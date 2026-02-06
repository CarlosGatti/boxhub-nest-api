import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { CreateReviewCardBusinessDto } from './dto/create-review-card-business.dto';
import { UpdateReviewCardBusinessDto } from './dto/update-review-card-business.dto';

@Injectable()
export class BusinessesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, input: CreateReviewCardBusinessDto) {
    return this.prisma.reviewCardBusiness.create({
      data: {
        userId,
        name: input.name.trim(),
        placeId: input.placeId ?? null,
        googleReviewUrl: input.googleReviewUrl ?? null,
        website: input.website ?? null,
        phone: input.phone ?? null,
      },
    });
  }

  async list(userId: number) {
    return this.prisma.reviewCardBusiness.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async get(userId: number, id: number) {
    const business = await this.prisma.reviewCardBusiness.findFirst({
      where: { id, userId },
    });
    if (!business) {
      throw new NotFoundException('Business not found');
    }
    return business;
  }

  async update(userId: number, id: number, input: UpdateReviewCardBusinessDto) {
    const business = await this.prisma.reviewCardBusiness.findFirst({
      where: { id, userId },
    });
    if (!business) {
      throw new NotFoundException('Business not found');
    }

    if (input.name !== undefined && input.name.trim().length === 0) {
      throw new BadRequestException('Name cannot be empty');
    }

    return this.prisma.reviewCardBusiness.update({
      where: { id },
      data: {
        name: input.name?.trim() ?? undefined,
        placeId: input.placeId ?? undefined,
        googleReviewUrl: input.googleReviewUrl ?? undefined,
        website: input.website ?? undefined,
        phone: input.phone ?? undefined,
      },
    });
  }
}
