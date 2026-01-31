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

  private async resolveTargetApp(targetAppCode: string) {
    const app = await this.prisma.app.findUnique({
      where: { code: targetAppCode },
    });

    if (!app) {
      throw new BadRequestException(`Unknown app code: ${targetAppCode}`);
    }

    return app;
  }

  async submitFeedback(input: CreateFeedbackInput, user?: { id: number }) {
    const app = await this.resolveTargetApp(input.targetAppCode);

    if (!user && !input.anonymousId) {
      throw new BadRequestException('anonymousId is required for unauthenticated feedback');
    }

    const feedback = await this.prisma.feedback.create({
      data: {
        targetAppId: app.id,
        userId: user?.id ?? null,
        anonymousId: user ? null : input.anonymousId ?? null,
        contactEmail: input.contactEmail ?? null,
        rating: input.rating ?? null,
        message: input.message,
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
