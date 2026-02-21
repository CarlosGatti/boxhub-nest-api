import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { BucketShareType as PrismaBucketShareType } from '@prisma/client';
import { BucketGoalsFilterInput } from '../dto/bucket-goals-filter.input';
import { generateUniqueToken, isValidTokenFormat } from './bucket-share.helpers';
import { createLog } from '../../../core/services/create-log';
import { LogAction } from '@prisma/client';
import { Prisma } from '@prisma/client';

const MAX_GOALS_IN_SHARE = 100;
const MAX_LOGS_PREVIEW = 3;

/** Snapshot payload shape (version 1) */
export interface SharePayload {
  version: number;
  kind: 'GOAL' | 'TYPE' | 'CUSTOM';
  title: string;
  createdAt: string;
  owner: { displayName: string | null };
  filters?: Record<string, unknown> | null;
  goals: ShareGoalPayload[];
}

export interface ShareGoalPayload {
  id: number;
  title: string;
  description: string | null;
  type: string;
  status: string;
  priority: number;
  coverUrl: string | null;
  tags: string[];
  details: unknown;
  targetDate: string | null;
  completedAt: string | null;
  createdAt: string;
  _count: { logs: number; pins: number; media: number };
  logsPreview: { id: number; note: string; happenedAt: string }[];
  pinsPreview: { lat: number; lng: number; label: string | null }[];
}

@Injectable()
export class BucketShareService {
  constructor(private readonly prisma: PrismaService) {}

  private async assertBucketAccess(userId: number): Promise<void> {
    const access = await this.prisma.userAppAccess.findFirst({
      where: {
        userId,
        app: { code: 'BUCKET' },
      },
    });
    if (!access) {
      throw new ForbiddenException('Bucket List access required');
    }
  }

  private async buildPayload(
    userId: number,
    kind: 'GOAL' | 'TYPE' | 'CUSTOM',
    goals: Awaited<ReturnType<typeof this.fetchGoalsForSnapshot>>,
    title: string,
    filters?: Record<string, unknown> | null
  ): Promise<SharePayload> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { firstName: true, lastName: true },
    });
    const displayName = user
      ? [user.firstName, user.lastName].filter(Boolean).join(' ').trim() || null
      : null;

    type GoalWithRelations = (typeof goals)[number];
    const goalsPayload: ShareGoalPayload[] = goals.map((g: GoalWithRelations) => ({
      id: g.id,
      title: g.title,
      description: g.description,
      type: g.type,
      status: g.status,
      priority: g.priority,
      coverUrl: g.coverUrl,
      tags: g.tags ?? [],
      details: g.details,
      targetDate: g.targetDate?.toISOString() ?? null,
      completedAt: g.completedAt?.toISOString() ?? null,
      createdAt: g.createdAt.toISOString(),
      _count: (g as { _count?: { logs: number; pins: number; media: number } })._count ?? {
        logs: 0,
        pins: 0,
        media: 0,
      },
      logsPreview: (g as { logs?: { id: number; note: string; happenedAt: Date }[] }).logs
        ?.slice(0, MAX_LOGS_PREVIEW)
        .map((l) => ({
          id: l.id,
          note: l.note,
          happenedAt: l.happenedAt.toISOString(),
        })) ?? [],
      pinsPreview: (g as { pins?: { lat: number; lng: number; label: string | null }[] }).pins
        ?.slice(0, 1)
        .map((p) => ({ lat: p.lat, lng: p.lng, label: p.label })) ?? [],
    }));

    return {
      version: 1,
      kind,
      title,
      createdAt: new Date().toISOString(),
      owner: { displayName },
      filters: filters ?? null,
      goals: goalsPayload,
    };
  }

  private async fetchGoalsForSnapshot(
    userId: number,
    goalIds: number[],
    includeLogs = true,
    includePins = true
  ) {
    const include: Prisma.BucketGoalInclude = {
      _count: { select: { logs: true, pins: true, media: true } },
    };
    if (includeLogs) {
      (include as any).logs = {
        orderBy: { happenedAt: 'desc' as const },
        take: MAX_LOGS_PREVIEW,
        select: { id: true, note: true, happenedAt: true },
      };
    }
    if (includePins) {
      (include as any).pins = {
        take: 1,
        select: { lat: true, lng: true, label: true },
      };
    }

    return this.prisma.bucketGoal.findMany({
      where: { id: { in: goalIds }, userId },
      include,
      orderBy: [{ priority: 'desc' }, { targetDate: 'asc' }, { createdAt: 'desc' }],
    });
  }

  async createFromGoal(userId: number, goalId: number, title?: string) {
    await this.assertBucketAccess(userId);

    const goal = await this.prisma.bucketGoal.findUnique({
      where: { id: goalId, userId },
    });
    if (!goal) {
      throw new NotFoundException(`Bucket goal with ID ${goalId} not found`);
    }

    const goals = await this.fetchGoalsForSnapshot(userId, [goalId]);
    const shareTitle = title?.trim() || goal.title;
    const payload = await this.buildPayload(userId, 'GOAL', goals, shareTitle);

    const token = await generateUniqueToken((t: string) =>
      this.prisma.bucketShare.findUnique({ where: { token: t } }).then((s: { id: number } | null) => !!s)
    );

    const share = await this.prisma.bucketShare.create({
      data: {
        userId,
        token,
        type: PrismaBucketShareType.GOAL,
        payload: payload as unknown as Prisma.JsonObject,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'BUCKET_SHARE_CREATED',
      metadata: { shareId: share.id, type: 'GOAL', goalId },
    });

    return share;
  }

  async createFromType(
    userId: number,
    type: string,
    filter?: BucketGoalsFilterInput | null,
    title?: string
  ) {
    await this.assertBucketAccess(userId);

    const where: Prisma.BucketGoalWhereInput = { userId };

    // Type: filter.typeIn takes precedence (e.g. [MOVIE, TV_SHOW] for watchlist), else single type
    if (filter?.typeIn?.length) {
      where.type = { in: filter.typeIn };
    } else {
      where.type = type as any;
    }

    // Apply additional filter
    if (filter?.tagsHasAny?.length) {
      where.tags = { hasSome: filter.tagsHasAny };
    }
    if (filter?.search?.trim()) {
      where.OR = [
        { title: { contains: filter.search.trim(), mode: 'insensitive' } },
        { description: { contains: filter.search.trim(), mode: 'insensitive' } },
      ];
    }
    if (filter?.statusIn?.length) {
      where.status = { in: filter.statusIn };
    } else if (filter?.status) {
      where.status = filter.status;
    }

    const goals = await this.prisma.bucketGoal.findMany({
      where,
      orderBy: [{ priority: 'desc' }, { targetDate: 'asc' }, { createdAt: 'desc' }],
      take: MAX_GOALS_IN_SHARE,
      include: {
        _count: { select: { logs: true, pins: true, media: true } },
        logs: {
          orderBy: { happenedAt: 'desc' },
          take: MAX_LOGS_PREVIEW,
          select: { id: true, note: true, happenedAt: true },
        },
        pins: { take: 1, select: { lat: true, lng: true, label: true } },
      },
    });

    const goalIds = goals.map((g: { id: number }) => g.id);
    if (goalIds.length === 0) {
      throw new BadRequestException('No goals match the selected type/filter');
    }

    const shareTitle = title?.trim() || `${type} List`;
    const payload = await this.buildPayload(
      userId,
      'TYPE',
      goals as any,
      shareTitle,
      filter ? { type, ...filter } : { type }
    );

    const token = await generateUniqueToken((t: string) =>
      this.prisma.bucketShare.findUnique({ where: { token: t } }).then((s: { id: number } | null) => !!s)
    );

    const share = await this.prisma.bucketShare.create({
      data: {
        userId,
        token,
        type: PrismaBucketShareType.TYPE,
        payload: payload as unknown as Prisma.JsonObject,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'BUCKET_SHARE_CREATED',
      metadata: { shareId: share.id, type: 'TYPE', goalType: type },
    });

    return share;
  }

  async createCustom(userId: number, goalIds: number[], title: string) {
    await this.assertBucketAccess(userId);

    if (!goalIds?.length) {
      throw new BadRequestException('At least one goal is required');
    }
    if (goalIds.length > MAX_GOALS_IN_SHARE) {
      throw new BadRequestException(`Maximum ${MAX_GOALS_IN_SHARE} goals allowed`);
    }

    const uniqueIds = [...new Set(goalIds)];
    const goals = await this.fetchGoalsForSnapshot(userId, uniqueIds);

    if (goals.length !== uniqueIds.length) {
      const foundIds = new Set(goals.map((g: { id: number }) => g.id));
      const missing = uniqueIds.filter((id) => !foundIds.has(id));
      throw new NotFoundException(
        `Goals not found or not owned by you: ${missing.join(', ')}`
      );
    }

    // Preserve order from goalIds
    const orderMap = new Map(uniqueIds.map((id, i) => [id, i]));
    goals.sort((a: { id: number }, b: { id: number }) => (orderMap.get(a.id) ?? 0) - (orderMap.get(b.id) ?? 0));

    const shareTitle = title?.trim() || 'My Bucket List';
    const payload = await this.buildPayload(userId, 'CUSTOM', goals, shareTitle);

    const token = await generateUniqueToken((t: string) =>
      this.prisma.bucketShare.findUnique({ where: { token: t } }).then((s: { id: number } | null) => !!s)
    );

    const share = await this.prisma.bucketShare.create({
      data: {
        userId,
        token,
        type: PrismaBucketShareType.CUSTOM,
        payload: payload as unknown as Prisma.JsonObject,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'BUCKET_SHARE_CREATED',
      metadata: { shareId: share.id, type: 'CUSTOM', goalCount: goalIds.length },
    });

    return share;
  }

  async getPublicByToken(token: string) {
    if (!isValidTokenFormat(token)) {
      throw new NotFoundException('Share not found');
    }

    const share = await this.prisma.bucketShare.findUnique({
      where: { token: token.trim() },
    });

    if (!share) {
      throw new NotFoundException('Share not found or link expired');
    }

    return {
      token: share.token,
      type: share.type,
      payload: share.payload as Record<string, unknown>,
      createdAt: share.createdAt,
    };
  }

  async listMyShares(userId: number) {
    await this.assertBucketAccess(userId);

    const shares = await this.prisma.bucketShare.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      select: { id: true, token: true, type: true, createdAt: true },
    });

    return shares;
  }

  async deleteShare(userId: number, id: number) {
    await this.assertBucketAccess(userId);

    const share = await this.prisma.bucketShare.findUnique({
      where: { id },
    });

    if (!share) {
      throw new NotFoundException('Share not found');
    }
    if (share.userId !== userId) {
      throw new ForbiddenException('You can only delete your own shares');
    }

    await this.prisma.bucketShare.delete({
      where: { id },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'BUCKET_SHARE_DELETED',
      metadata: { shareId: id },
    });

    return true;
  }
}
