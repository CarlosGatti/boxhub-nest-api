import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../core/prisma/prisma.service';

@Injectable()
export class TemplatesService {
  constructor(private readonly prisma: PrismaService) {}

  async list(filters: { aspect?: string; category?: string }) {
    return this.prisma.reviewCardTemplate.findMany({
      where: {
        isActive: true,
        aspect: filters.aspect ? { equals: filters.aspect } : undefined,
        category: filters.category ? { equals: filters.category } : undefined,
      },
      orderBy: { name: 'asc' },
    });
  }
}
