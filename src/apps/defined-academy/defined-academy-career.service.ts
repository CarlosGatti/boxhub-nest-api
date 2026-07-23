import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  DefinedAcademyCareerJourneyStatus,
  DefinedAcademyCareerStageContentType,
  DefinedAcademyStatus,
  LogAction,
} from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';
import { createLog } from '../../core/services/create-log';
import {
  PUBLIC_COURSE_STATUSES,
  PUBLIC_RESOURCE_STATUSES,
} from './utils/academy-publication.util';
import { reorderScopedItems } from './utils/academy-reorder.util';
import { normalizeSlug, SLUG_REGEX } from './utils/academy-url.util';

const JOURNEY_INCLUDE = {
  stages: {
    orderBy: { sortOrder: 'asc' as const },
    include: {
      contentLinks: {
        orderBy: { sortOrder: 'asc' as const },
        include: {
          course: true,
          resource: true,
        },
      },
    },
  },
};

const PROFILE_INCLUDE = {
  journey: { include: JOURNEY_INCLUDE },
  currentStage: {
    include: {
      contentLinks: {
        orderBy: { sortOrder: 'asc' as const },
        include: { course: true, resource: true },
      },
    },
  },
  completions: {
    orderBy: { completedAt: 'asc' as const },
    include: { stage: true },
  },
};

type ReorderItemInput = { id: number; sortOrder: number };

@Injectable()
export class DefinedAcademyCareerService {
  constructor(private readonly prisma: PrismaService) {}

  private assertValidSlug(slug: string): string {
    const normalized = normalizeSlug(slug);
    if (!SLUG_REGEX.test(normalized)) {
      throw new BadRequestException(`Invalid slug: ${slug}`);
    }
    return normalized;
  }

  private async ensureAcademy(academyId: number) {
    const academy = await this.prisma.definedAcademy.findUnique({
      where: { id: academyId },
    });
    if (!academy) {
      throw new NotFoundException(`Defined academy ${academyId} not found`);
    }
    return academy;
  }

  private async ensureActiveAcademy(academyId: number) {
    const academy = await this.ensureAcademy(academyId);
    if (academy.status !== DefinedAcademyStatus.ACTIVE) {
      throw new BadRequestException('Academy must be ACTIVE');
    }
    return academy;
  }

  private async ensureJourneyForAcademy(academyId: number) {
    const journey = await this.prisma.definedAcademyCareerJourney.findUnique({
      where: { academyId },
      include: JOURNEY_INCLUDE,
    });
    if (!journey) {
      throw new NotFoundException(
        `Career journey not found for academy ${academyId}`,
      );
    }
    return journey;
  }

  async getPublicCareerJourneyByAcademySlug(academySlug: string) {
    const slug = this.assertValidSlug(academySlug);
    const academy = await this.prisma.definedAcademy.findUnique({
      where: { slug },
    });
    if (!academy || academy.status !== DefinedAcademyStatus.ACTIVE) {
      return null;
    }

    return this.prisma.definedAcademyCareerJourney.findFirst({
      where: {
        academyId: academy.id,
        status: DefinedAcademyCareerJourneyStatus.ACTIVE,
      },
      include: {
        stages: {
          orderBy: { sortOrder: 'asc' },
          select: {
            id: true,
            journeyId: true,
            title: true,
            slug: true,
            description: true,
            summary: true,
            iconKey: true,
            sortOrder: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
  }

  async getAdminCareerJourney(academyId: number) {
    await this.ensureAcademy(academyId);
    return this.prisma.definedAcademyCareerJourney.findUnique({
      where: { academyId },
      include: JOURNEY_INCLUDE,
    });
  }

  async createCareerJourney(
    academyId: number,
    input: {
      title: string;
      slug: string;
      description?: string;
      status?: DefinedAcademyCareerJourneyStatus;
    },
    userId?: number,
  ) {
    await this.ensureAcademy(academyId);
    const existing = await this.prisma.definedAcademyCareerJourney.findUnique({
      where: { academyId },
    });
    if (existing) {
      throw new BadRequestException(
        'Career journey already exists for this academy',
      );
    }

    const journey = await this.prisma.definedAcademyCareerJourney.create({
      data: {
        academyId,
        title: input.title.trim(),
        slug: this.assertValidSlug(input.slug),
        description: input.description?.trim() || null,
        status: input.status ?? DefinedAcademyCareerJourneyStatus.DRAFT,
      },
      include: JOURNEY_INCLUDE,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy career journey created',
      route: 'createDefinedAcademyCareerJourney',
      metadata: {
        academyId,
        journeyId: journey.id,
        feature: 'defined-academy-career',
      },
    });

    return journey;
  }

  async updateCareerJourney(
    academyId: number,
    input: {
      title?: string;
      description?: string;
      status?: DefinedAcademyCareerJourneyStatus;
    },
    userId?: number,
  ) {
    const journey = await this.ensureJourneyForAcademy(academyId);
    const updated = await this.prisma.definedAcademyCareerJourney.update({
      where: { id: journey.id },
      data: {
        title: input.title?.trim(),
        description:
          input.description !== undefined
            ? input.description?.trim() || null
            : undefined,
        status: input.status,
      },
      include: JOURNEY_INCLUDE,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy career journey updated',
      route: 'updateDefinedAcademyCareerJourney',
      metadata: {
        academyId,
        journeyId: journey.id,
        feature: 'defined-academy-career',
      },
    });

    return updated;
  }

  async createCareerStage(
    academyId: number,
    input: {
      title: string;
      slug: string;
      description?: string;
      summary?: string;
      iconKey?: string;
      sortOrder?: number;
    },
    userId?: number,
  ) {
    const journey = await this.ensureJourneyForAcademy(academyId);
    const stage = await this.prisma.definedAcademyCareerStage.create({
      data: {
        journeyId: journey.id,
        title: input.title.trim(),
        slug: this.assertValidSlug(input.slug),
        description: input.description?.trim() || null,
        summary: input.summary?.trim() || null,
        iconKey: input.iconKey?.trim() || null,
        sortOrder: input.sortOrder ?? journey.stages.length,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy career stage created',
      route: 'createDefinedAcademyCareerStage',
      metadata: { academyId, stageId: stage.id, feature: 'defined-academy-career' },
    });

    return stage;
  }

  async updateCareerStage(
    academyId: number,
    stageId: number,
    input: {
      title?: string;
      description?: string;
      summary?: string;
      iconKey?: string;
      sortOrder?: number;
    },
    userId?: number,
  ) {
    await this.ensureStage(academyId, stageId);
    const updated = await this.prisma.definedAcademyCareerStage.update({
      where: { id: stageId },
      data: {
        title: input.title?.trim(),
        description:
          input.description !== undefined
            ? input.description?.trim() || null
            : undefined,
        summary:
          input.summary !== undefined ? input.summary?.trim() || null : undefined,
        iconKey:
          input.iconKey !== undefined ? input.iconKey?.trim() || null : undefined,
        sortOrder: input.sortOrder,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy career stage updated',
      route: 'updateDefinedAcademyCareerStage',
      metadata: { academyId, stageId, feature: 'defined-academy-career' },
    });

    return updated;
  }

  async reorderCareerStages(
    academyId: number,
    items: ReorderItemInput[],
    userId?: number,
  ) {
    const journey = await this.ensureJourneyForAcademy(academyId);
    const sortedItems = [...items].sort((a, b) => a.sortOrder - b.sortOrder);
    const stageIds = sortedItems.map((item) => item.id);
    const existingStages = await this.prisma.definedAcademyCareerStage.findMany({
      where: { id: { in: stageIds }, journeyId: journey.id },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy career stages reordered',
      route: 'reorderDefinedAcademyCareerStages',
      metadata: { academyId, feature: 'defined-academy-career' },
    });

    return reorderScopedItems({
      parentId: journey.id,
      parentField: 'journeyId',
      itemIds: stageIds,
      existingItems: existingStages,
      parentIdFromItem: (item) => item.journeyId,
      updateOrder: (id, order) =>
        this.prisma.definedAcademyCareerStage.update({
          where: { id },
          data: { sortOrder: order },
        }),
      orderedItems: () =>
        this.prisma.definedAcademyCareerStage.findMany({
          where: { journeyId: journey.id },
          orderBy: { sortOrder: 'asc' },
        }),
    });
  }

  async linkCareerStageContent(
    academyId: number,
    stageId: number,
    input: {
      contentType: DefinedAcademyCareerStageContentType;
      courseId?: number;
      resourceId?: number;
      label?: string;
      sortOrder?: number;
    },
    userId?: number,
  ) {
    const stage = await this.ensureStage(academyId, stageId);
    await this.validateStageContentLink(academyId, input);

    const link = await this.prisma.definedAcademyCareerStageContent.create({
      data: {
        stageId: stage.id,
        contentType: input.contentType,
        courseId: input.courseId ?? null,
        resourceId: input.resourceId ?? null,
        label: input.label?.trim() || null,
        sortOrder: input.sortOrder ?? 0,
      },
      include: { course: true, resource: true },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy career stage content linked',
      route: 'linkDefinedAcademyCareerStageContent',
      metadata: {
        academyId,
        stageId,
        linkId: link.id,
        feature: 'defined-academy-career',
      },
    });

    return link;
  }

  async unlinkCareerStageContent(
    academyId: number,
    stageId: number,
    contentLinkId: number,
    userId?: number,
  ) {
    await this.ensureStage(academyId, stageId);
    const link = await this.prisma.definedAcademyCareerStageContent.findFirst({
      where: { id: contentLinkId, stageId },
    });
    if (!link) {
      throw new NotFoundException(`Content link ${contentLinkId} not found`);
    }

    await this.prisma.definedAcademyCareerStageContent.delete({
      where: { id: contentLinkId },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy career stage content unlinked',
      route: 'unlinkDefinedAcademyCareerStageContent',
      metadata: {
        academyId,
        stageId,
        contentLinkId,
        feature: 'defined-academy-career',
      },
    });

    return true;
  }

  async myCareerProfile(userId: number, academyId: number) {
    await this.ensureAcademy(academyId);
    return this.prisma.definedAcademyUserCareerProfile.findUnique({
      where: { userId_academyId: { userId, academyId } },
      include: PROFILE_INCLUDE,
    });
  }

  async initializeMyCareerProfile(
    userId: number,
    academyId: number,
    stageId?: number,
  ) {
    await this.ensureActiveAcademy(academyId);
    const journey = await this.prisma.definedAcademyCareerJourney.findFirst({
      where: {
        academyId,
        status: DefinedAcademyCareerJourneyStatus.ACTIVE,
      },
      include: { stages: { orderBy: { sortOrder: 'asc' } } },
    });
    if (!journey) {
      throw new NotFoundException('Active career journey not found');
    }

    const existing = await this.prisma.definedAcademyUserCareerProfile.findUnique(
      {
        where: { userId_academyId: { userId, academyId } },
        include: PROFILE_INCLUDE,
      },
    );
    if (existing) {
      return existing;
    }

    let currentStageId: number | null = null;
    if (stageId) {
      const stage = journey.stages.find((s) => s.id === stageId);
      if (!stage) {
        throw new BadRequestException(
          `Stage ${stageId} does not belong to this academy journey`,
        );
      }
      currentStageId = stage.id;
    }

    return this.prisma.definedAcademyUserCareerProfile.create({
      data: {
        userId,
        academyId,
        journeyId: journey.id,
        currentStageId,
      },
      include: PROFILE_INCLUDE,
    });
  }

  async setMyCareerStage(userId: number, academyId: number, stageId: number) {
    const profile = await this.prisma.definedAcademyUserCareerProfile.findUnique({
      where: { userId_academyId: { userId, academyId } },
    });
    if (!profile) {
      throw new NotFoundException('Career profile not found. Initialize first.');
    }

    await this.ensureStage(academyId, stageId);

    return this.prisma.definedAcademyUserCareerProfile.update({
      where: { id: profile.id },
      data: { currentStageId: stageId },
      include: PROFILE_INCLUDE,
    });
  }

  async completeCareerStage(
    userId: number,
    academyId: number,
    stageId: number,
    notes?: string,
  ) {
    const profile = await this.prisma.definedAcademyUserCareerProfile.findUnique({
      where: { userId_academyId: { userId, academyId } },
    });
    if (!profile) {
      throw new NotFoundException('Career profile not found. Initialize first.');
    }

    await this.ensureStage(academyId, stageId);

    await this.prisma.definedAcademyUserCareerStageCompletion.upsert({
      where: {
        profileId_stageId: { profileId: profile.id, stageId },
      },
      update: {
        notes: notes?.trim() || null,
        completedAt: new Date(),
      },
      create: {
        profileId: profile.id,
        stageId,
        notes: notes?.trim() || null,
      },
    });

    const journey = await this.ensureJourneyForAcademy(academyId);
    const completedStage = journey.stages.find((s) => s.id === stageId);
    const nextStage =
      completedStage &&
      journey.stages.find((s) => s.sortOrder > completedStage.sortOrder);

    return this.prisma.definedAcademyUserCareerProfile.update({
      where: { id: profile.id },
      data: {
        currentStageId: nextStage?.id ?? stageId,
      },
      include: PROFILE_INCLUDE,
    });
  }

  async myCareerRecommendations(userId: number, academyId: number) {
    const profile = await this.myCareerProfile(userId, academyId);
    if (!profile?.currentStageId) {
      return { stage: null, courses: [], resources: [] };
    }

    const stage = await this.prisma.definedAcademyCareerStage.findUnique({
      where: { id: profile.currentStageId },
      include: {
        contentLinks: {
          orderBy: { sortOrder: 'asc' },
          include: { course: true, resource: true },
        },
      },
    });

    if (!stage) {
      return { stage: null, courses: [], resources: [] };
    }

    const courses = stage.contentLinks
      .filter(
        (link) =>
          link.contentType === DefinedAcademyCareerStageContentType.COURSE &&
          link.course &&
          PUBLIC_COURSE_STATUSES.includes(link.course.status),
      )
      .map((link) => link.course!);

    const resources = stage.contentLinks
      .filter(
        (link) =>
          link.contentType === DefinedAcademyCareerStageContentType.RESOURCE &&
          link.resource &&
          PUBLIC_RESOURCE_STATUSES.includes(link.resource.status),
      )
      .map((link) => link.resource!);

    return { stage, courses, resources };
  }

  private async ensureStage(academyId: number, stageId: number) {
    const journey = await this.ensureJourneyForAcademy(academyId);
    const stage = journey.stages.find((s) => s.id === stageId);
    if (!stage) {
      throw new NotFoundException(
        `Career stage ${stageId} not found for academy ${academyId}`,
      );
    }
    return stage;
  }

  private async validateStageContentLink(
    academyId: number,
    input: {
      contentType: DefinedAcademyCareerStageContentType;
      courseId?: number;
      resourceId?: number;
    },
  ) {
    if (input.contentType === DefinedAcademyCareerStageContentType.COURSE) {
      if (!input.courseId) {
        throw new BadRequestException('courseId is required for COURSE content');
      }
      const course = await this.prisma.definedAcademyCourse.findFirst({
        where: { id: input.courseId, academyId },
      });
      if (!course) {
        throw new NotFoundException(`Course ${input.courseId} not found`);
      }
      return;
    }

    if (input.contentType === DefinedAcademyCareerStageContentType.RESOURCE) {
      if (!input.resourceId) {
        throw new BadRequestException(
          'resourceId is required for RESOURCE content',
        );
      }
      const resource = await this.prisma.definedAcademyResource.findFirst({
        where: { id: input.resourceId, academyId },
      });
      if (!resource) {
        throw new NotFoundException(`Resource ${input.resourceId} not found`);
      }
    }
  }
}
