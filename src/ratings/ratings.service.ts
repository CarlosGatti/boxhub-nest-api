import { Injectable, NotFoundException, ForbiddenException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateRatingInput } from './dto/create-rating.input';
import { User } from '../../@generated/user/user.model';
import { SellerRatingSummary } from './dto/rating.dto';

@Injectable()
export class RatingsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreateRatingInput, buyer: User): Promise<any> {
    // Validate stars
    if (input.stars < 1 || input.stars > 5) {
      throw new BadRequestException('Rating must be between 1 and 5 stars');
    }

    // Verify seller exists
    const seller = await this.prisma.user.findUnique({
      where: { id: input.sellerId },
    });

    if (!seller) {
      throw new NotFoundException('Seller not found');
    }

    // Prevent self-rating
    if (buyer.id === input.sellerId) {
      throw new ForbiddenException('You cannot rate yourself');
    }

    // Check if buyer already rated this seller (once lifetime rule)
    const existingRating = await this.prisma.rating.findUnique({
      where: {
        sellerId_buyerId: {
          sellerId: input.sellerId,
          buyerId: buyer.id,
        },
      },
    });

    if (existingRating) {
      throw new ConflictException('You have already rated this seller');
    }

    // Create rating
    const rating = await this.prisma.rating.create({
      data: {
        sellerId: input.sellerId,
        buyerId: buyer.id,
        stars: input.stars,
        comment: input.comment?.trim() || null,
      },
      include: {
        buyer: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            nickname: true,
            profilePicture: true,
          },
        },
      },
    });

    return rating;
  }

  async getSellerRatings(sellerId: number): Promise<SellerRatingSummary> {
    // Verify seller exists
    const seller = await this.prisma.user.findUnique({
      where: { id: sellerId },
    });

    if (!seller) {
      throw new NotFoundException('Seller not found');
    }

    // Get all ratings for this seller
    const ratings = await this.prisma.rating.findMany({
      where: { sellerId },
      include: {
        buyer: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            nickname: true,
            profilePicture: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Calculate average
    const total = ratings.length;
    const average = total > 0
      ? ratings.reduce((sum: number, r: any) => sum + r.stars, 0) / total
      : 0;

    return {
      average: Math.round(average * 10) / 10, // Round to 1 decimal
      total,
      ratings: ratings as any,
    };
  }
}

