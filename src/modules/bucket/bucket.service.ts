import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { BucketGoalType, BucketGoalStatus, BucketPinSource, LogAction } from '@prisma/client';
import { createLog } from '../../core/services/create-log';
import { validateDetails } from './validation/details.schemas';
import { CreateBucketGoalInput } from './dto/create-bucket-goal.input';
import { UpdateBucketGoalInput } from './dto/update-bucket-goal.input';
import { BucketGoalsFilterInput } from './dto/bucket-goals-filter.input';
import { CreateBucketGoalLogInput } from './dto/create-bucket-goal-log.input';
import { AddBucketGoalPinInput } from './dto/add-bucket-goal-pin.input';
import { BucketMapPinsFilterInput } from './dto/bucket-map-pins-filter.input';
import {
  BucketDashboardSummary,
  BucketStatusCounts,
  BucketTypeCounts,
} from './types/bucket-dashboard-summary.type';
import { BucketMapPinOutput } from './types/bucket-map-pin-output.type';
import { Prisma } from '@prisma/client';

@Injectable()
export class BucketService {
  constructor(private readonly prisma: PrismaService) {}

  private async assertGoalOwnership(goalId: number, userId: number) {
    const goal = await this.prisma.bucketGoal.findUnique({
      where: { id: goalId },
    });
    if (!goal) {
      throw new NotFoundException(`Bucket goal with ID ${goalId} not found`);
    }
    if (goal.userId !== userId) {
      throw new ForbiddenException('You do not have access to this goal');
    }
    return goal;
  }

  private async assertLogOwnership(logId: number, userId: number) {
    const log = await this.prisma.bucketGoalLog.findUnique({
      where: { id: logId },
      include: { goal: true },
    });
    if (!log) {
      throw new NotFoundException(`Bucket goal log with ID ${logId} not found`);
    }
    if (log.goal.userId !== userId) {
      throw new ForbiddenException('You do not have access to this log');
    }
    return log;
  }

  async createGoal(userId: number, input: CreateBucketGoalInput) {
    const type = input.type ?? BucketGoalType.GENERAL;
    let details: object | undefined;
    try {
      details = input.details ? validateDetails(type, input.details) ?? undefined : undefined;
    } catch (e) {
      throw new BadRequestException(e instanceof Error ? e.message : 'Invalid details');
    }

    const goal = await this.prisma.bucketGoal.create({
      data: {
        userId,
        title: input.title,
        description: input.description,
        type,
        status: input.status ?? BucketGoalStatus.IDEA,
        priority: input.priority ?? 0,
        details: details as Prisma.JsonObject | undefined,
        coverUrl: input.coverUrl,
        tags: input.tags ?? [],
        targetDate: input.targetDate,
        completedAt: input.completedAt,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'GOAL_CREATED',
      metadata: { goalId: goal.id, type: goal.type },
    });

    return goal;
  }

  async updateGoal(userId: number, goalId: number, input: UpdateBucketGoalInput) {
    const existing = await this.assertGoalOwnership(goalId, userId);
    const type = input.type ?? existing.type;
    let details: object | undefined;
    try {
      details =
        input.details !== undefined ? validateDetails(type, input.details) ?? undefined : undefined;
    } catch (e) {
      throw new BadRequestException(e instanceof Error ? e.message : 'Invalid details');
    }

    const updateData: Prisma.BucketGoalUpdateInput = {
      ...(input.title !== undefined && { title: input.title }),
      ...(input.description !== undefined && { description: input.description }),
      ...(input.type !== undefined && { type: input.type }),
      ...(input.status !== undefined && { status: input.status }),
      ...(input.priority !== undefined && { priority: input.priority }),
      ...(details !== undefined && { details: details as Prisma.JsonObject }),
      ...(input.coverUrl !== undefined && { coverUrl: input.coverUrl }),
      ...(input.tags !== undefined && { tags: input.tags }),
      ...(input.targetDate !== undefined && { targetDate: input.targetDate }),
      ...(input.completedAt !== undefined && { completedAt: input.completedAt }),
    };

    const goal = await this.prisma.bucketGoal.update({
      where: { id: goalId },
      data: updateData,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'GOAL_UPDATED',
      metadata: { goalId, type: goal.type },
    });

    return goal;
  }

  async deleteGoal(userId: number, goalId: number) {
    await this.assertGoalOwnership(goalId, userId);

    await this.prisma.bucketGoal.delete({
      where: { id: goalId },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'GOAL_DELETED',
      metadata: { goalId },
    });

    return true;
  }

  async listGoals(
    userId: number,
    filter?: BucketGoalsFilterInput,
  ) {
    const where: Prisma.BucketGoalWhereInput = { userId };

    if (filter?.type) {
      where.type = filter.type;
    }
    if (filter?.status) {
      where.status = filter.status;
    }
    if (filter?.search && filter.search.trim()) {
      where.OR = [
        { title: { contains: filter.search, mode: 'insensitive' } },
        { description: { contains: filter.search, mode: 'insensitive' } },
      ];
    }

    const goals = await this.prisma.bucketGoal.findMany({
      where,
      orderBy: [
        { priority: 'desc' },
        { targetDate: 'asc' },
        { createdAt: 'desc' },
      ],
      include: {
        _count: { select: { logs: true, pins: true, media: true } },
      },
    });

    const statusOrder = [
      BucketGoalStatus.IN_PROGRESS,
      BucketGoalStatus.PLANNED,
      BucketGoalStatus.IDEA,
      BucketGoalStatus.DONE,
      BucketGoalStatus.DROPPED,
    ];
    goals.sort((a, b) => {
      const aIdx = statusOrder.indexOf(a.status);
      const bIdx = statusOrder.indexOf(b.status);
      return aIdx - bIdx;
    });

    return goals;
  }

  async getGoal(userId: number, goalId: number) {
    const goal = await this.assertGoalOwnership(goalId, userId);
    return this.prisma.bucketGoal.findUnique({
      where: { id: goalId },
      include: {
        logs: { orderBy: { happenedAt: 'desc' } },
        pins: true,
        media: true,
      },
    });
  }

  async addLog(userId: number, goalId: number, input: CreateBucketGoalLogInput) {
    await this.assertGoalOwnership(goalId, userId);

    const log = await this.prisma.bucketGoalLog.create({
      data: {
        goalId,
        note: input.note,
        happenedAt: new Date(input.happenedAt),
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'LOG_ADDED',
      metadata: { goalId, logId: log.id },
    });

    return log;
  }

  async deleteLog(userId: number, logId: number) {
    await this.assertLogOwnership(logId, userId);

    await this.prisma.bucketGoalLog.delete({
      where: { id: logId },
    });

    return true;
  }

  async addPin(userId: number, goalId: number, input: AddBucketGoalPinInput) {
    await this.assertGoalOwnership(goalId, userId);

    const pin = await this.prisma.bucketGoalPin.create({
      data: {
        goalId,
        lat: input.lat,
        lng: input.lng,
        label: input.label,
        source: BucketPinSource.MANUAL,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'PIN_ADDED',
      metadata: { goalId, pinId: pin.id },
    });

    return pin;
  }

  async listMapPins(userId: number, filter?: BucketMapPinsFilterInput) {
    const where: Prisma.BucketGoalPinWhereInput = {
      goal: {
        is: {
          userId,
          ...(filter?.goalStatus && { status: filter.goalStatus }),
        },
      },
    };

    const pins = await this.prisma.bucketGoalPin.findMany({
      where,
      include: {
        goal: {
          select: { id: true, title: true, status: true, type: true, coverUrl: true },
        },
      },
    });

    return pins.map((p) => ({
      id: p.id,
      goalId: p.goalId,
      lat: p.lat,
      lng: p.lng,
      label: p.label,
      goalTitle: p.goal.title,
      goalStatus: p.goal.status,
      goalType: p.goal.type,
      coverUrl: p.goal.coverUrl,
    })) as BucketMapPinOutput[];
  }

  async dashboardSummary(userId: number): Promise<BucketDashboardSummary> {
    const [total, byStatus, byType] = await Promise.all([
      this.prisma.bucketGoal.count({ where: { userId } }),
      this.prisma.bucketGoal.groupBy({
        by: ['status'],
        where: { userId },
        _count: { id: true },
      }),
      this.prisma.bucketGoal.groupBy({
        by: ['type'],
        where: { userId },
        _count: { id: true },
      }),
    ]);

    const statusMap: Record<string, number> = {
      IDEA: 0,
      PLANNED: 0,
      IN_PROGRESS: 0,
      DONE: 0,
      DROPPED: 0,
    };
    byStatus.forEach((s) => {
      statusMap[s.status] = s._count.id;
    });

    const typeMap: Record<string, number> = {
      GENERAL: 0,
      TRAVEL: 0,
      EVENT: 0,
      PLACE_COLLECTION: 0,
      ACHIEVEMENT: 0,
    };
    byType.forEach((t) => {
      typeMap[t.type] = t._count.id;
    });

    const completionRate = total > 0 ? statusMap.DONE / total : 0;

    return {
      totalGoals: total,
      byStatus: statusMap as unknown as BucketStatusCounts,
      byType: typeMap as unknown as BucketTypeCounts,
      completionRate,
    };
  }
}
