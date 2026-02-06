import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { CreateReviewCardProjectDto } from './dto/create-review-card-project.dto';
import { UpdateReviewCardProjectDto } from './dto/update-review-card-project.dto';
import {
  Prisma,
  ReviewCardProjectStatus,
  ReviewCardLinkMode,
} from '@prisma/client';
import { generateUniqueSlug } from '../common/slug';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, input: CreateReviewCardProjectDto) {
    const business = await this.prisma.reviewCardBusiness.findFirst({
      where: { id: input.businessId, userId },
    });
    if (!business) {
      throw new NotFoundException('Business not found');
    }

    const template = await this.prisma.reviewCardTemplate.findFirst({
      where: { id: input.templateId, isActive: true },
    });
    if (!template) {
      throw new BadRequestException('Template not available');
    }

    const googleReviewUrlFinal =
      input.googleReviewUrlFinal ?? business.googleReviewUrl ?? null;
    if (!googleReviewUrlFinal) {
      throw new BadRequestException('Missing googleReviewUrlFinal');
    }

    return this.prisma.reviewCardProject.create({
      data: {
        userId,
        businessId: input.businessId,
        templateId: input.templateId,
        name: input.name.trim(),
        reviewLinkMode: input.reviewLinkMode ?? ReviewCardLinkMode.REDIRECT,
        googleReviewUrlFinal,
        designJson: (input.designJson ?? {}) as Prisma.InputJsonValue,
        assetsJson: (input.assetsJson ?? {}) as Prisma.InputJsonValue,
      },
    });
  }

  async list(userId: number) {
    return this.prisma.reviewCardProject.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async get(userId: number, id: number) {
    const project = await this.prisma.reviewCardProject.findFirst({
      where: { id, userId },
    });
    if (!project) {
      throw new NotFoundException('Project not found');
    }
    return project;
  }

  async update(userId: number, id: number, input: UpdateReviewCardProjectDto) {
    const project = await this.prisma.reviewCardProject.findFirst({
      where: { id, userId },
    });
    if (!project) {
      throw new NotFoundException('Project not found');
    }

    if (input.status === ReviewCardProjectStatus.PUBLISHED) {
      throw new BadRequestException('Use publish endpoint to publish');
    }

    return this.prisma.reviewCardProject.update({
      where: { id },
      data: {
        name: input.name?.trim() ?? undefined,
        status: input.status ?? undefined,
        reviewLinkMode: input.reviewLinkMode ?? undefined,
        googleReviewUrlFinal: input.googleReviewUrlFinal ?? undefined,
        designJson: input.designJson
          ? (input.designJson as Prisma.InputJsonValue)
          : undefined,
        assetsJson: input.assetsJson
          ? (input.assetsJson as Prisma.InputJsonValue)
          : undefined,
      },
    });
  }

  async publish(userId: number, id: number) {
    return this.prisma.$transaction(async (tx) => {
      const project = await tx.reviewCardProject.findFirst({
        where: { id, userId },
        include: { business: true, template: true },
      });
      if (!project) {
        throw new NotFoundException('Project not found');
      }

      if (!project.template.isActive) {
        throw new BadRequestException('Template not available');
      }

      const finalUrl =
        project.googleReviewUrlFinal ?? project.business.googleReviewUrl;
      if (!finalUrl) {
        throw new BadRequestException('Missing googleReviewUrlFinal');
      }

      if (project.status === ReviewCardProjectStatus.PUBLISHED && project.slug) {
        return {
          slug: project.slug,
          redirectUrl: `/r/${project.slug}`,
        };
      }

      const slug = await generateUniqueSlug(project.business.name, async (value) => {
        const exists = await tx.reviewCardProject.findUnique({
          where: { slug: value },
          select: { id: true },
        });
        return Boolean(exists);
      });

      const updated = await tx.reviewCardProject.update({
        where: { id: project.id },
        data: {
          slug,
          status: ReviewCardProjectStatus.PUBLISHED,
          googleReviewUrlFinal: finalUrl,
        },
      });

      return {
        slug: updated.slug,
        redirectUrl: `/r/${updated.slug}`,
      };
    });
  }
}
