import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { FeedbackStatus, LogAction, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { createLog } from '../../services/create-log';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { FeedbackFilterInput } from './dto/feedback-filter.input';
import { UpdateFeedbackStatusInput } from './dto/update-feedback-status.input';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  private parseDbId(rawUrl?: string) {
    if (!rawUrl) {
      return 'unknown';
    }
    try {
      const url = new URL(rawUrl);
      const dbName = url.pathname.replace('/', '');
      return `${url.hostname}:${url.port || '5432'}/${dbName}`;
    } catch {
      return 'invalid';
    }
  }

  private async resolveTargetApp(targetAppCode: string) {
    const raw = targetAppCode;
    const normalized = raw?.trim().toUpperCase();
    const rawUrl = process.env.DATABASE_URL;
    if (rawUrl) {
      try {
        const url = new URL(rawUrl);
        const dbName = url.pathname.replace('/', '');
        console.log(`[feedback] db=${url.hostname}:${url.port || '5432'}/${dbName}`);
      } catch {
        console.log('[feedback] Failed to parse DATABASE_URL');
      }
    }

    const app = await this.prisma.app.findUnique({
      where: { code: normalized },
      select: { id: true, code: true, name: true },
    });

    console.log('[feedback] targetAppCode raw=', raw, 'normalized=', normalized, 'found=', app);

    if (!app) {
      const all = await this.prisma.app.findMany({
        select: { code: true },
        orderBy: { code: 'asc' },
      });
      console.log('[feedback] available app codes:', all.map((item) => item.code));
    }

    if (!app) {
      throw new BadRequestException(`Unknown app code: ${normalized}`);
    }

    return app;
  }

  async submitFeedback(input: CreateFeedbackInput, user?: { id: number }) {
    const raw = input.targetAppCode;
    const normalized = (raw ?? '').trim().toUpperCase();
    const dbId = this.parseDbId(process.env.DATABASE_URL);
    console.log('[feedback] db=', dbId, 'raw=', raw, 'normalized=', normalized);

    const preCheck = await this.prisma.app.findUnique({
      where: { code: normalized },
      select: { id: true, code: true, name: true },
    });
    console.log('[feedback] precheck found=', preCheck);
    if (!preCheck) {
      const all = await this.prisma.app.findMany({
        select: { code: true },
        orderBy: { code: 'asc' },
      });
      console.log('[feedback] available app codes:', all.map((item) => item.code));
    }

    const app = await this.resolveTargetApp(normalized);

    if (!user && !input.anonymousId) {
      throw new BadRequestException('anonymousId is required for unauthenticated feedback');
    }

    const rating = input.rating ?? undefined;
    const message = input.message ?? undefined;
    const hasRating = typeof rating === 'number' && rating >= 1 && rating <= 5;
    const hasMessage = typeof message === 'string' && message.trim().length >= 3;
    if (!hasRating && !hasMessage) {
      throw new BadRequestException('Provide a rating or a short message.');
    }
    const normalizedMessage = hasMessage ? message.trim() : '';

    const feedback = await this.prisma.feedback.create({
      data: {
        targetAppId: app.id,
        userId: user?.id ?? null,
        anonymousId: user ? null : input.anonymousId ?? null,
        contactEmail: input.contactEmail ?? null,
        rating: hasRating ? rating : null,
        message: normalizedMessage,
        tags: input.tags ?? [],
        contextPath: input.contextPath ?? null,
        metadata: input.metadata
          ? (input.metadata as Prisma.InputJsonValue)
          : undefined,
        status: FeedbackStatus.PENDING,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId: user?.id,
      details: `Feedback submitted for ${app.code}`,
      route: 'submitFeedback',
      metadata: { feedbackId: feedback.id, targetAppId: app.id, targetAppCode: app.code },
    });

    return feedback;
  }

  async listFeedback(filter?: FeedbackFilterInput, take = 50, skip = 0) {
    let targetAppId: number | undefined;

    if (filter?.targetAppCode) {
      const app = await this.resolveTargetApp(filter.targetAppCode);
      targetAppId = app.id;
    }

    const where: Prisma.FeedbackWhereInput = {
      ...(targetAppId ? { targetAppId } : {}),
      ...(filter?.status ? { status: filter.status } : {}),
    };

    if (filter?.createdFrom || filter?.createdTo) {
      where.createdAt = {
        ...(filter.createdFrom ? { gte: filter.createdFrom } : {}),
        ...(filter.createdTo ? { lte: filter.createdTo } : {}),
      };
    }

    return this.prisma.feedback.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take,
      skip,
    });
  }

  async updateStatus(input: UpdateFeedbackStatusInput, userId: number) {
    const existing = await this.prisma.feedback.findUnique({
      where: { id: input.id },
    });

    if (!existing) {
      throw new NotFoundException('Feedback not found');
    }

    const feedback = await this.prisma.feedback.update({
      where: { id: input.id },
      data: { status: input.status },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `Feedback status updated to ${input.status}`,
      route: 'updateFeedbackStatus',
      metadata: { feedbackId: feedback.id, status: input.status },
    });

    return feedback;
  }
}
