import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { CreateReviewCardExportDto } from './dto/create-review-card-export.dto';

@Injectable()
export class ExportsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, projectId: number, input: CreateReviewCardExportDto) {
    const project = await this.prisma.reviewCardProject.findFirst({
      where: { id: projectId, userId },
    });
    if (!project) {
      throw new NotFoundException('Project not found');
    }

    return this.prisma.reviewCardExport.create({
      data: {
        projectId,
        type: input.type,
        format: input.format,
      },
    });
  }

  async get(userId: number, id: number) {
    const exportJob = await this.prisma.reviewCardExport.findFirst({
      where: { id, project: { userId } },
      include: { project: true },
    });
    if (!exportJob) {
      throw new NotFoundException('Export not found');
    }
    return exportJob;
  }
}
