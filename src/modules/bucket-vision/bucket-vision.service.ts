import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import {
  BucketVisionSectionType,
  BucketGoalStatus,
  LogAction,
} from '@prisma/client';
import { createLog } from '../../core/services/create-log';
import { deleteUploadByUrl } from '../../core/utils/upload-delete.util';
import { validateSectionContent } from './validation/section-content.schemas';
import { CreateBucketVisionBoardInput } from './dto/create-bucket-vision-board.input';
import { UpdateBucketVisionBoardInput } from './dto/update-bucket-vision-board.input';
import { UpsertBucketVisionSectionInput } from './dto/upsert-bucket-vision-section.input';
import { AddBucketVisionItemInput } from './dto/add-bucket-vision-item.input';
import { UpdateBucketVisionItemInput } from './dto/update-bucket-vision-item.input';
import { CreateBucketVisionCheckinInput } from './dto/create-bucket-vision-checkin.input';
import { BucketVisionProgressSummary } from './types/bucket-vision-progress-summary.type';
import { Prisma } from '@prisma/client';

const DEFAULT_SECTION_TYPES: BucketVisionSectionType[] = [
  BucketVisionSectionType.LIFE_WELLBEING,
  BucketVisionSectionType.SCHOOL_LEARNING,
  BucketVisionSectionType.DREAM_BIG,
  BucketVisionSectionType.CAREER_GROWTH,
  BucketVisionSectionType.VISUAL_INSPIRATION,
];

@Injectable()
export class BucketVisionService {
  constructor(private readonly prisma: PrismaService) {}

  private async assertBoardOwnership(boardId: number, userId: number) {
    const board = await this.prisma.bucketVisionBoard.findUnique({
      where: { id: boardId },
    });
    if (!board) {
      throw new NotFoundException(`Vision board with ID ${boardId} not found`);
    }
    if (board.userId !== userId) {
      throw new ForbiddenException('You do not have access to this vision board');
    }
    return board;
  }

  private async assertItemOwnership(itemId: number, userId: number) {
    const item = await this.prisma.bucketVisionItem.findUnique({
      where: { id: itemId },
      include: { board: true },
    });
    if (!item) {
      throw new NotFoundException(`Vision item with ID ${itemId} not found`);
    }
    if (item.board.userId !== userId) {
      throw new ForbiddenException('You do not have access to this item');
    }
    return item;
  }

  async listBoards(userId: number) {
    return this.prisma.bucketVisionBoard.findMany({
      where: { userId },
      orderBy: [{ year: 'desc' }, { createdAt: 'desc' }],
      include: {
        _count: { select: { sections: true, items: true, goalLinks: true } },
      },
    });
  }

  async getBoard(userId: number, boardId: number) {
    await this.assertBoardOwnership(boardId, userId);
    return this.prisma.bucketVisionBoard.findUnique({
      where: { id: boardId },
      include: {
        sections: { orderBy: { order: 'asc' } },
        items: { orderBy: { order: 'asc' } },
        goalLinks: { include: { goal: true } },
        checkins: { orderBy: { createdAt: 'desc' }, take: 10 },
      },
    });
  }

  async getBoardByYear(userId: number, year: number) {
    const board = await this.prisma.bucketVisionBoard.findFirst({
      where: { userId, year },
      include: {
        sections: { orderBy: { order: 'asc' } },
        items: { orderBy: { order: 'asc' } },
        goalLinks: { include: { goal: true } },
      },
    });
    if (!board) {
      throw new NotFoundException(`No vision board found for year ${year}`);
    }
    // Lazy backfill periodKey for YEAR boards (safe, one-time write)
    if (board.periodKey == null && board.year != null && board.periodType === 'YEAR') {
      await this.prisma.bucketVisionBoard.update({
        where: { id: board.id },
        data: { periodKey: String(board.year) },
      });
      board.periodKey = String(board.year);
    }
    return board;
  }

  async createBoard(userId: number, input: CreateBucketVisionBoardInput) {
    const periodType = input.periodType ?? 'YEAR';
    const year = periodType === 'YEAR' ? (input.year ?? new Date().getFullYear()) : input.year ?? null;

    if (year !== null) {
      const existing = await this.prisma.bucketVisionBoard.findUnique({
        where: { userId_year: { userId, year } },
      });
      if (existing) {
        throw new ConflictException(`Vision board for year ${year} already exists`);
      }
    }

    const periodKey = year !== null ? String(year) : (input as { periodKey?: string }).periodKey ?? null;

    const board = await this.prisma.bucketVisionBoard.create({
      data: {
        userId,
        title: input.title ?? 'Your Vision Board',
        periodType: periodType as any,
        year,
        periodKey,
        startDate: input.startDate,
        endDate: input.endDate,
        theme: input.theme,
        coverUrl: input.coverUrl,
      },
    });

    for (let i = 0; i < DEFAULT_SECTION_TYPES.length; i++) {
      await this.prisma.bucketVisionSection.create({
        data: {
          boardId: board.id,
          type: DEFAULT_SECTION_TYPES[i],
          content: {}, // Empty sections allowed; frontend fills progressively
          order: i,
        },
      });
    }

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'VISION_BOARD_CREATED',
      metadata: { boardId: board.id, year },
    });

    return this.getBoard(userId, board.id);
  }

  async updateBoard(userId: number, boardId: number, input: UpdateBucketVisionBoardInput) {
    await this.assertBoardOwnership(boardId, userId);

    const updateData: Prisma.BucketVisionBoardUpdateInput = {
      ...(input.title !== undefined && { title: input.title }),
      ...(input.periodType !== undefined && { periodType: input.periodType }),
      ...(input.year !== undefined && { year: input.year }),
      ...(input.startDate !== undefined && { startDate: input.startDate }),
      ...(input.endDate !== undefined && { endDate: input.endDate }),
      ...(input.theme !== undefined && { theme: input.theme }),
      ...(input.layoutMode !== undefined && { layoutMode: input.layoutMode }),
      ...(input.coverUrl !== undefined && { coverUrl: input.coverUrl }),
    };

    await this.prisma.bucketVisionBoard.update({
      where: { id: boardId },
      data: updateData,
    });

    return this.getBoard(userId, boardId);
  }

  async upsertSection(userId: number, boardId: number, input: UpsertBucketVisionSectionInput) {
    await this.assertBoardOwnership(boardId, userId);

    let content: object | null;
    try {
      content = validateSectionContent(input.type, input.content);
    } catch (e) {
      throw new BadRequestException(e instanceof Error ? e.message : 'Invalid section content');
    }

    const section = await this.prisma.bucketVisionSection.upsert({
      where: {
        boardId_type: { boardId, type: input.type as any },
      },
      create: {
        boardId,
        type: input.type as any,
        title: input.title,
        content: content === null ? Prisma.DbNull : (content as Prisma.JsonObject),
        order: input.order ?? 0,
      },
      update: {
        title: input.title,
        content: content === null ? Prisma.DbNull : (content as Prisma.JsonObject),
        order: input.order ?? 0,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'VISION_SECTION_UPDATED',
      metadata: { boardId, sectionId: section.id, type: input.type },
    });

    return section;
  }

  async addItem(userId: number, boardId: number, input: AddBucketVisionItemInput) {
    await this.assertBoardOwnership(boardId, userId);

    const item = await this.prisma.bucketVisionItem.create({
      data: {
        boardId,
        type: input.type as any,
        text: input.text,
        url: input.url,
        color: input.color,
        metadata: (input.metadata ?? {}) as Prisma.JsonObject,
        order: input.order ?? 0,
        layout: (input.layout ?? {}) as Prisma.JsonObject | undefined,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'VISION_ITEM_ADDED',
      metadata: { boardId, itemId: item.id, type: input.type },
    });

    return item;
  }

  async updateItem(userId: number, itemId: number, input: UpdateBucketVisionItemInput) {
    await this.assertItemOwnership(itemId, userId);

    const updateData: Prisma.BucketVisionItemUpdateInput = {
      ...(input.type !== undefined && { type: input.type }),
      ...(input.text !== undefined && { text: input.text }),
      ...(input.url !== undefined && { url: input.url }),
      ...(input.color !== undefined && { color: input.color }),
      ...(input.metadata !== undefined && { metadata: input.metadata as Prisma.JsonObject }),
      ...(input.order !== undefined && { order: input.order }),
      ...(input.layout !== undefined && { layout: input.layout as Prisma.JsonObject }),
    };

    const item = await this.prisma.bucketVisionItem.update({
      where: { id: itemId },
      data: updateData,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'VISION_ITEM_UPDATED',
      metadata: { itemId },
    });

    return item;
  }

  async deleteItem(userId: number, itemId: number) {
    const item = await this.assertItemOwnership(itemId, userId);

    await this.prisma.bucketVisionItem.delete({
      where: { id: itemId },
    });

    await deleteUploadByUrl(item.url);

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'VISION_ITEM_DELETED',
      metadata: { itemId },
    });

    return true;
  }

  async linkGoal(userId: number, boardId: number, goalId: number, label?: string) {
    await this.assertBoardOwnership(boardId, userId);

    const goal = await this.prisma.bucketGoal.findUnique({
      where: { id: goalId },
    });
    if (!goal) {
      throw new NotFoundException(`Goal with ID ${goalId} not found`);
    }
    if (goal.userId !== userId) {
      throw new ForbiddenException('You do not have access to this goal');
    }

    const link = await this.prisma.bucketVisionGoalLink.upsert({
      where: {
        boardId_goalId: { boardId, goalId },
      },
      create: { boardId, goalId, label },
      update: { label },
    });

    return link;
  }

  async unlinkGoal(userId: number, boardId: number, goalId: number) {
    await this.assertBoardOwnership(boardId, userId);

    await this.prisma.bucketVisionGoalLink.deleteMany({
      where: { boardId, goalId },
    });

    return true;
  }

  async createCheckin(userId: number, boardId: number, input: CreateBucketVisionCheckinInput) {
    await this.assertBoardOwnership(boardId, userId);

    const checkin = await this.prisma.bucketVisionCheckin.create({
      data: {
        boardId,
        kind: input.kind,
        notes: input.notes,
        mood: (input.mood ?? {}) as Prisma.JsonObject | undefined,
        snapshot: (input.snapshot ?? {}) as Prisma.JsonObject | undefined,
      },
    });

    return checkin;
  }

  async getBoardProgress(userId: number, boardId: number): Promise<BucketVisionProgressSummary> {
    await this.assertBoardOwnership(boardId, userId);

    const links = await this.prisma.bucketVisionGoalLink.findMany({
      where: { boardId },
      include: { goal: true },
    });

    const linkedGoalsCount = links.length;
    const doneGoalsCount = links.filter((l) => l.goal.status === BucketGoalStatus.DONE).length;
    const completionRate = linkedGoalsCount > 0 ? doneGoalsCount / linkedGoalsCount : 0;

    const statusCounts = {
      idea: links.filter((l) => l.goal.status === BucketGoalStatus.IDEA).length,
      planned: links.filter((l) => l.goal.status === BucketGoalStatus.PLANNED).length,
      inProgress: links.filter((l) => l.goal.status === BucketGoalStatus.IN_PROGRESS).length,
      dropped: links.filter((l) => l.goal.status === BucketGoalStatus.DROPPED).length,
    };

    return {
      linkedGoalsCount,
      doneGoalsCount,
      completionRate,
      ideaCount: statusCounts.idea,
      plannedCount: statusCounts.planned,
      inProgressCount: statusCounts.inProgress,
      droppedCount: statusCounts.dropped,
    };
  }
}
