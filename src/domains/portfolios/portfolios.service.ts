import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';

import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { PrismaService } from '../../core/prisma/prisma.service';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { User } from '@prisma/client';

@Injectable()
export class PortfoliosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, createPortfolioDto: CreatePortfolioDto) {
    return this.prisma.portfolio.create({
      data: {
        userId,
        name: createPortfolioDto.name,
        baseCurrency: createPortfolioDto.baseCurrency || 'USD',
      },
    });
  }

  async findAll(userId: number) {
    return this.prisma.portfolio.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number, userId: number) {
    const portfolio = await this.prisma.portfolio.findUnique({
      where: { id },
      include: {
        holdings: {
          include: {
            asset: true,
          },
        },
      },
    });

    if (!portfolio) {
      throw new NotFoundException(`Portfolio with ID ${id} not found`);
    }

    if (portfolio.userId !== userId) {
      throw new ForbiddenException('You do not have access to this portfolio');
    }

    return portfolio;
  }

  async update(id: number, userId: number, updatePortfolioDto: UpdatePortfolioDto) {
    // Verify ownership
    await this.findOne(id, userId);

    return this.prisma.portfolio.update({
      where: { id },
      data: updatePortfolioDto,
    });
  }

  async remove(id: number, userId: number) {
    // Verify ownership
    await this.findOne(id, userId);

    return this.prisma.portfolio.delete({
      where: { id },
    });
  }
}
