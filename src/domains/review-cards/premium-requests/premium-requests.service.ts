import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { CreateReviewCardPremiumRequestDto } from './dto/create-review-card-premium-request.dto';
import { UpdateReviewCardPremiumRequestDto } from './dto/update-review-card-premium-request.dto';

@Injectable()
export class PremiumRequestsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, input: CreateReviewCardPremiumRequestDto) {
    if (input.projectId) {
      const project = await this.prisma.reviewCardProject.findFirst({
        where: { id: input.projectId, userId },
      });
      if (!project) {
        throw new NotFoundException('Project not found');
      }
    }

    return this.prisma.reviewCardPremiumRequest.create({
      data: {
        userId,
        projectId: input.projectId ?? null,
        notes: input.notes.trim(),
      },
    });
  }

  async listAll() {
    return this.prisma.reviewCardPremiumRequest.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async listOwn(userId: number) {
    return this.prisma.reviewCardPremiumRequest.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateStatus(id: number, input: UpdateReviewCardPremiumRequestDto) {
    const existing = await this.prisma.reviewCardPremiumRequest.findUnique({
      where: { id },
    });
    if (!existing) {
      throw new NotFoundException('Premium request not found');
    }
    return this.prisma.reviewCardPremiumRequest.update({
      where: { id },
      data: { status: input.status },
    });
  }
}
