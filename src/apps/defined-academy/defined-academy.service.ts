import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  DefinedAcademyContentStatus,
  DefinedAcademyCourseStatus,
  DefinedAcademyCourseVisibility,
  DefinedAcademyLessonType,
  DefinedAcademyPartnerStatus,
  DefinedAcademyResourceType,
  DefinedAcademyResourceStatus,
  DefinedAcademyStatus,
  LogAction,
  Prisma,
} from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';
import { createLog } from '../../core/services/create-log';
import {
  canAuthenticatedUserAccessCourse,
  isLessonPubliclyVisible,
  PUBLIC_ACADEMY_STATUSES,
  PUBLIC_CONTENT_STATUSES,
  PUBLIC_COURSE_STATUSES,
  PUBLIC_RESOURCE_STATUSES,
} from './utils/academy-publication.util';
import { reorderScopedItems } from './utils/academy-reorder.util';
import { validateAcademyResourcePayload } from './utils/academy-resource-validation.util';
import { normalizeSlug, SLUG_REGEX } from './utils/academy-url.util';

export const COURSE_INCLUDE = {
  modules: {
    orderBy: { sortOrder: 'asc' as const },
    include: {
      lessons: { orderBy: { sortOrder: 'asc' as const } },
    },
  },
};

type ReorderItemInput = { id: number; sortOrder: number };

@Injectable()
export class DefinedAcademyService {
  constructor(private readonly prisma: PrismaService) {}

  async listAcademies(appId?: number, status?: DefinedAcademyStatus) {
    return this.prisma.definedAcademy.findMany({
      where: { appId, status },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getAcademy(id: number) {
    return this.ensureAcademy(id);
  }

  async getAcademyBySlug(slug: string) {
    const normalizedSlug = this.assertValidSlug(slug);
    const academy = await this.prisma.definedAcademy.findUnique({
      where: { slug: normalizedSlug },
    });
    if (!academy) {
      throw new NotFoundException(`Defined academy slug "${slug}" not found`);
    }
    return academy;
  }

  async createAcademy(
    input: {
      appId?: number;
      name: string;
      slug: string;
      description?: string;
      status?: DefinedAcademyStatus;
      logoUrl?: string;
      settings?: Prisma.InputJsonValue;
    },
    userId?: number,
  ) {
    const slug = this.assertValidSlug(input.slug);
    if (input.appId) {
      await this.ensureApp(input.appId);
    }

    const academy = await this.prisma.definedAcademy.create({
      data: {
        appId: input.appId,
        name: input.name.trim(),
        slug,
        description: input.description,
        status: input.status ?? DefinedAcademyStatus.DRAFT,
        logoUrl: input.logoUrl,
        settings: input.settings,
        publishedAt:
          input.status === DefinedAcademyStatus.ACTIVE ? new Date() : undefined,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy created',
      route: 'createDefinedAcademy',
      metadata: { academyId: academy.id, slug: academy.slug },
    });

    return academy;
  }

  async updateAcademy(
    id: number,
    input: {
      appId?: number;
      name?: string;
      slug?: string;
      description?: string;
      status?: DefinedAcademyStatus;
      logoUrl?: string;
      settings?: Prisma.InputJsonValue;
    },
    userId?: number,
  ) {
    const existing = await this.ensureAcademy(id);
    if (input.appId) {
      await this.ensureApp(input.appId);
    }

    const nextStatus = input.status ?? existing.status;
    const academy = await this.prisma.definedAcademy.update({
      where: { id },
      data: {
        appId: input.appId,
        name: input.name?.trim(),
        slug: input.slug ? this.assertValidSlug(input.slug) : undefined,
        description: input.description,
        status: input.status,
        logoUrl: input.logoUrl,
        settings: input.settings,
        publishedAt:
          nextStatus === DefinedAcademyStatus.ACTIVE && !existing.publishedAt
            ? new Date()
            : undefined,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy updated',
      route: 'updateDefinedAcademy',
      metadata: { academyId: academy.id },
    });

    return academy;
  }

  async archiveAcademy(id: number, userId?: number) {
    await this.ensureAcademy(id);
    const academy = await this.prisma.definedAcademy.update({
      where: { id },
      data: {
        status: DefinedAcademyStatus.ARCHIVED,
        archivedAt: new Date(),
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy archived',
      route: 'archiveDefinedAcademy',
      metadata: { academyId: academy.id },
    });

    return academy;
  }

  async listCourses(academyId: number) {
    await this.ensureAcademy(academyId);
    return this.prisma.definedAcademyCourse.findMany({
      where: { academyId },
      include: COURSE_INCLUDE,
      orderBy: { sortOrder: 'asc' },
    });
  }

  async getCourse(academyId: number, courseId: number) {
    return this.ensureCourse(academyId, courseId);
  }

  async createCourse(
    academyId: number,
    input: {
      title: string;
      slug: string;
      summary?: string;
      description?: string;
      coverImageUrl?: string;
      visibility?: DefinedAcademyCourseVisibility;
      level?: string;
      estimatedDurationMinutes?: number;
      sortOrder?: number;
    },
    userId?: number,
  ) {
    await this.ensureAcademy(academyId);
    const slug = this.assertValidSlug(input.slug);

    const maxOrder = await this.prisma.definedAcademyCourse.aggregate({
      where: { academyId },
      _max: { sortOrder: true },
    });

    const course = await this.prisma.definedAcademyCourse.create({
      data: {
        academyId,
        title: input.title.trim(),
        slug,
        summary: input.summary,
        description: input.description,
        coverImageUrl: input.coverImageUrl,
        visibility: input.visibility ?? DefinedAcademyCourseVisibility.PUBLIC,
        level: input.level,
        estimatedDurationMinutes: input.estimatedDurationMinutes,
        sortOrder: input.sortOrder ?? (maxOrder._max.sortOrder ?? -1) + 1,
        createdById: userId,
      },
      include: COURSE_INCLUDE,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy course created',
      route: 'createDefinedAcademyCourse',
      metadata: { academyId, courseId: course.id },
    });

    return course;
  }

  async updateCourse(
    academyId: number,
    courseId: number,
    input: {
      title?: string;
      slug?: string;
      summary?: string;
      description?: string;
      coverImageUrl?: string;
      visibility?: DefinedAcademyCourseVisibility;
      level?: string;
      estimatedDurationMinutes?: number;
      sortOrder?: number;
    },
    userId?: number,
  ) {
    await this.ensureCourse(academyId, courseId);
    const course = await this.prisma.definedAcademyCourse.update({
      where: { id: courseId },
      data: {
        title: input.title?.trim(),
        slug: input.slug ? this.assertValidSlug(input.slug) : undefined,
        summary: input.summary,
        description: input.description,
        coverImageUrl: input.coverImageUrl,
        visibility: input.visibility,
        level: input.level,
        estimatedDurationMinutes: input.estimatedDurationMinutes,
        sortOrder: input.sortOrder,
      },
      include: COURSE_INCLUDE,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy course updated',
      route: 'updateDefinedAcademyCourse',
      metadata: { academyId, courseId },
    });

    return course;
  }

  async publishCourse(academyId: number, courseId: number, userId?: number) {
    const academy = await this.ensureAcademy(academyId);
    if (academy.status !== DefinedAcademyStatus.ACTIVE) {
      throw new BadRequestException(
        'Academy must be ACTIVE before publishing a course',
      );
    }
    await this.ensureCourse(academyId, courseId);

    const course = await this.prisma.definedAcademyCourse.update({
      where: { id: courseId },
      data: {
        status: DefinedAcademyCourseStatus.PUBLISHED,
        publishedAt: new Date(),
      },
      include: COURSE_INCLUDE,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy course published',
      route: 'publishDefinedAcademyCourse',
      metadata: { academyId, courseId },
    });

    return course;
  }

  async archiveCourse(academyId: number, courseId: number, userId?: number) {
    await this.ensureCourse(academyId, courseId);
    const course = await this.prisma.definedAcademyCourse.update({
      where: { id: courseId },
      data: { status: DefinedAcademyCourseStatus.ARCHIVED },
      include: COURSE_INCLUDE,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy course archived',
      route: 'archiveDefinedAcademyCourse',
      metadata: { academyId, courseId },
    });

    return course;
  }

  async reorderCourses(
    academyId: number,
    items: ReorderItemInput[],
    userId?: number,
  ) {
    await this.ensureAcademy(academyId);
    const sortedItems = [...items].sort((a, b) => a.sortOrder - b.sortOrder);
    const courseIds = sortedItems.map((item) => item.id);
    const existingCourses = await this.prisma.definedAcademyCourse.findMany({
      where: { id: { in: courseIds }, academyId },
      select: { id: true, academyId: true },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy courses reordered',
      route: 'reorderDefinedAcademyCourses',
      metadata: { academyId, count: items.length },
    });

    return reorderScopedItems({
      parentId: academyId,
      parentField: 'academyId',
      itemIds: courseIds,
      existingItems: existingCourses,
      parentIdFromItem: (item) => item.academyId,
      updateOrder: (id, order) =>
        this.prisma.definedAcademyCourse.update({
          where: { id },
          data: { sortOrder: order },
        }),
      orderedItems: () =>
        this.prisma.definedAcademyCourse.findMany({
          where: { academyId },
          include: COURSE_INCLUDE,
          orderBy: { sortOrder: 'asc' },
        }),
    });
  }

  async createModule(
    academyId: number,
    courseId: number,
    input: {
      title: string;
      description?: string;
      sortOrder?: number;
      status?: DefinedAcademyContentStatus;
    },
    userId?: number,
  ) {
    await this.ensureCourse(academyId, courseId);
    const maxOrder = await this.prisma.definedAcademyModule.aggregate({
      where: { courseId },
      _max: { sortOrder: true },
    });

    const module = await this.prisma.definedAcademyModule.create({
      data: {
        courseId,
        title: input.title.trim(),
        description: input.description,
        sortOrder: input.sortOrder ?? (maxOrder._max.sortOrder ?? -1) + 1,
        status: input.status ?? DefinedAcademyContentStatus.DRAFT,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy module created',
      route: 'createDefinedAcademyModule',
      metadata: { academyId, courseId, moduleId: module.id },
    });

    return module;
  }

  async updateModule(
    academyId: number,
    moduleId: number,
    input: {
      title?: string;
      description?: string;
      sortOrder?: number;
      status?: DefinedAcademyContentStatus;
    },
    userId?: number,
  ) {
    const module = await this.ensureModule(academyId, moduleId);
    const updated = await this.prisma.definedAcademyModule.update({
      where: { id: moduleId },
      data: {
        title: input.title?.trim(),
        description: input.description,
        sortOrder: input.sortOrder,
        status: input.status,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy module updated',
      route: 'updateDefinedAcademyModule',
      metadata: { academyId, courseId: module.courseId, moduleId },
    });

    return updated;
  }

  async reorderModules(
    academyId: number,
    courseId: number,
    items: ReorderItemInput[],
    userId?: number,
  ) {
    await this.ensureCourse(academyId, courseId);
    const sortedItems = [...items].sort((a, b) => a.sortOrder - b.sortOrder);
    const moduleIds = sortedItems.map((item) => item.id);
    const existingModules = await this.prisma.definedAcademyModule.findMany({
      where: { id: { in: moduleIds }, courseId },
      select: { id: true, courseId: true },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy modules reordered',
      route: 'reorderDefinedAcademyModules',
      metadata: { academyId, courseId, count: items.length },
    });

    return reorderScopedItems({
      parentId: courseId,
      parentField: 'courseId',
      itemIds: moduleIds,
      existingItems: existingModules,
      parentIdFromItem: (item) => item.courseId,
      updateOrder: (id, order) =>
        this.prisma.definedAcademyModule.update({
          where: { id },
          data: { sortOrder: order },
        }),
      orderedItems: () =>
        this.prisma.definedAcademyModule.findMany({
          where: { courseId },
          orderBy: { sortOrder: 'asc' },
        }),
    });
  }

  async createLesson(
    academyId: number,
    moduleId: number,
    input: {
      title: string;
      slug: string;
      summary?: string;
      description?: string;
      lessonType?: DefinedAcademyLessonType;
      videoUrl?: string;
      videoProvider?: string;
      videoDurationSeconds?: number;
      bodyContent?: string;
      sortOrder?: number;
      visibility?: DefinedAcademyCourseVisibility;
      isPreview?: boolean;
    },
    userId?: number,
  ) {
    const module = await this.ensureModule(academyId, moduleId);
    const slug = this.assertValidSlug(input.slug);
    const maxOrder = await this.prisma.definedAcademyLesson.aggregate({
      where: { moduleId },
      _max: { sortOrder: true },
    });

    const lesson = await this.prisma.definedAcademyLesson.create({
      data: {
        moduleId,
        title: input.title.trim(),
        slug,
        summary: input.summary,
        description: input.description,
        lessonType: input.lessonType ?? DefinedAcademyLessonType.VIDEO,
        videoUrl: input.videoUrl,
        videoProvider: input.videoProvider,
        videoDurationSeconds: input.videoDurationSeconds,
        bodyContent: input.bodyContent,
        sortOrder: input.sortOrder ?? (maxOrder._max.sortOrder ?? -1) + 1,
        visibility: input.visibility ?? DefinedAcademyCourseVisibility.PUBLIC,
        isPreview: input.isPreview ?? false,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy lesson created',
      route: 'createDefinedAcademyLesson',
      metadata: { academyId, courseId: module.courseId, moduleId, lessonId: lesson.id },
    });

    return lesson;
  }

  async updateLesson(
    academyId: number,
    lessonId: number,
    input: {
      title?: string;
      slug?: string;
      summary?: string;
      description?: string;
      lessonType?: DefinedAcademyLessonType;
      videoUrl?: string;
      videoProvider?: string;
      videoDurationSeconds?: number;
      bodyContent?: string;
      sortOrder?: number;
      visibility?: DefinedAcademyCourseVisibility;
      isPreview?: boolean;
      status?: DefinedAcademyContentStatus;
    },
    userId?: number,
  ) {
    const lesson = await this.ensureLesson(academyId, lessonId);
    const updated = await this.prisma.definedAcademyLesson.update({
      where: { id: lessonId },
      data: {
        title: input.title?.trim(),
        slug: input.slug ? this.assertValidSlug(input.slug) : undefined,
        summary: input.summary,
        description: input.description,
        lessonType: input.lessonType,
        videoUrl: input.videoUrl,
        videoProvider: input.videoProvider,
        videoDurationSeconds: input.videoDurationSeconds,
        bodyContent: input.bodyContent,
        sortOrder: input.sortOrder,
        visibility: input.visibility,
        isPreview: input.isPreview,
        status: input.status,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy lesson updated',
      route: 'updateDefinedAcademyLesson',
      metadata: { academyId, lessonId },
    });

    return updated;
  }

  async publishLesson(academyId: number, lessonId: number, userId?: number) {
    const lessonContext = await this.ensureLesson(academyId, lessonId);
    const course = await this.prisma.definedAcademyCourse.findUnique({
      where: { id: lessonContext.module.courseId },
      include: { academy: true },
    });
    if (!course) {
      throw new NotFoundException(`Defined academy course ${lessonContext.module.courseId} not found`);
    }
    if (course.academy.status !== DefinedAcademyStatus.ACTIVE) {
      throw new BadRequestException(
        'Academy must be ACTIVE before publishing a lesson',
      );
    }
    if (course.status !== DefinedAcademyCourseStatus.PUBLISHED) {
      throw new BadRequestException(
        'Course must be PUBLISHED before publishing a lesson',
      );
    }

    const lesson = await this.prisma.definedAcademyLesson.update({
      where: { id: lessonId },
      data: {
        status: DefinedAcademyContentStatus.PUBLISHED,
        publishedAt: new Date(),
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy lesson published',
      route: 'publishDefinedAcademyLesson',
      metadata: { academyId, lessonId },
    });

    return lesson;
  }

  async reorderLessons(
    academyId: number,
    moduleId: number,
    items: ReorderItemInput[],
    userId?: number,
  ) {
    await this.ensureModule(academyId, moduleId);
    const sortedItems = [...items].sort((a, b) => a.sortOrder - b.sortOrder);
    const lessonIds = sortedItems.map((item) => item.id);
    const existingLessons = await this.prisma.definedAcademyLesson.findMany({
      where: { id: { in: lessonIds }, moduleId },
      select: { id: true, moduleId: true },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy lessons reordered',
      route: 'reorderDefinedAcademyLessons',
      metadata: { academyId, moduleId, count: items.length },
    });

    return reorderScopedItems({
      parentId: moduleId,
      parentField: 'moduleId',
      itemIds: lessonIds,
      existingItems: existingLessons,
      parentIdFromItem: (item) => item.moduleId,
      updateOrder: (id, order) =>
        this.prisma.definedAcademyLesson.update({
          where: { id },
          data: { sortOrder: order },
        }),
      orderedItems: () =>
        this.prisma.definedAcademyLesson.findMany({
          where: { moduleId },
          orderBy: { sortOrder: 'asc' },
        }),
    });
  }

  async createResource(
    academyId: number,
    input: {
      lessonId?: number;
      title: string;
      description?: string;
      type: DefinedAcademyResourceType;
      fileUrl?: string;
      externalUrl?: string;
      textContent?: string;
      mimeType?: string;
      fileName?: string;
      fileSize?: number;
      sortOrder?: number;
      visibility?: DefinedAcademyCourseVisibility;
      downloadable?: boolean;
    },
    userId?: number,
  ) {
    await this.ensureAcademy(academyId);
    if (input.lessonId) {
      await this.ensureLesson(academyId, input.lessonId);
    }

    validateAcademyResourcePayload({
      type: input.type,
      fileUrl: input.fileUrl,
      externalUrl: input.externalUrl,
      textContent: input.textContent,
    });

    const maxOrder = await this.prisma.definedAcademyResource.aggregate({
      where: { academyId, lessonId: input.lessonId ?? null },
      _max: { sortOrder: true },
    });

    const resource = await this.prisma.definedAcademyResource.create({
      data: {
        academyId,
        lessonId: input.lessonId,
        title: input.title.trim(),
        description: input.description,
        type: input.type,
        fileUrl: input.fileUrl,
        externalUrl: input.externalUrl,
        textContent: input.textContent,
        mimeType: input.mimeType,
        fileName: input.fileName,
        fileSize: input.fileSize,
        sortOrder: input.sortOrder ?? (maxOrder._max.sortOrder ?? -1) + 1,
        visibility: input.visibility ?? DefinedAcademyCourseVisibility.PUBLIC,
        downloadable: input.downloadable ?? true,
        createdById: userId,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy resource created',
      route: 'createDefinedAcademyResource',
      metadata: { academyId, resourceId: resource.id },
    });

    return resource;
  }

  async updateResource(
    academyId: number,
    resourceId: number,
    input: {
      lessonId?: number | null;
      title?: string;
      description?: string;
      type?: DefinedAcademyResourceType;
      fileUrl?: string;
      externalUrl?: string;
      textContent?: string;
      mimeType?: string;
      fileName?: string;
      fileSize?: number;
      sortOrder?: number;
      visibility?: DefinedAcademyCourseVisibility;
      downloadable?: boolean;
      status?: DefinedAcademyResourceStatus;
    },
    userId?: number,
  ) {
    const existing = await this.ensureResource(academyId, resourceId);
    if (input.lessonId) {
      await this.ensureLesson(academyId, input.lessonId);
    }

    const nextType = (input.type ?? existing.type) as typeof existing.type;
    validateAcademyResourcePayload({
      type: nextType,
      fileUrl: input.fileUrl ?? existing.fileUrl,
      externalUrl: input.externalUrl ?? existing.externalUrl,
      textContent: input.textContent ?? existing.textContent,
    });

    const resource = await this.prisma.definedAcademyResource.update({
      where: { id: resourceId },
      data: {
        lessonId: input.lessonId,
        title: input.title?.trim(),
        description: input.description,
        type: input.type,
        fileUrl: input.fileUrl,
        externalUrl: input.externalUrl,
        textContent: input.textContent,
        mimeType: input.mimeType,
        fileName: input.fileName,
        fileSize: input.fileSize,
        sortOrder: input.sortOrder,
        visibility: input.visibility,
        downloadable: input.downloadable,
        status: input.status,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy resource updated',
      route: 'updateDefinedAcademyResource',
      metadata: { academyId, resourceId },
    });

    return resource;
  }

  async archiveResource(academyId: number, resourceId: number, userId?: number) {
    await this.ensureResource(academyId, resourceId);
    const resource = await this.prisma.definedAcademyResource.update({
      where: { id: resourceId },
      data: { status: DefinedAcademyResourceStatus.ARCHIVED },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy resource archived',
      route: 'archiveDefinedAcademyResource',
      metadata: { academyId, resourceId },
    });

    return resource;
  }

  async listResources(academyId: number, lessonId?: number) {
    await this.ensureAcademy(academyId);
    return this.prisma.definedAcademyResource.findMany({
      where: { academyId, lessonId },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async listPartners(academyId: number) {
    await this.ensureAcademy(academyId);
    return this.prisma.definedAcademyPartner.findMany({
      where: { academyId },
      include: { category: true },
      orderBy: [{ featured: 'desc' }, { sortOrder: 'asc' }],
    });
  }

  async createPartnerCategory(
    academyId: number,
    input: {
      name: string;
      slug: string;
      description?: string;
      sortOrder?: number;
    },
    userId?: number,
  ) {
    await this.ensureAcademy(academyId);
    const slug = this.assertValidSlug(input.slug);
    const maxOrder = await this.prisma.definedAcademyPartnerCategory.aggregate({
      where: { academyId },
      _max: { sortOrder: true },
    });

    const category = await this.prisma.definedAcademyPartnerCategory.create({
      data: {
        academyId,
        name: input.name.trim(),
        slug,
        description: input.description,
        sortOrder: input.sortOrder ?? (maxOrder._max.sortOrder ?? -1) + 1,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy partner category created',
      route: 'createDefinedAcademyPartnerCategory',
      metadata: { academyId, categoryId: category.id },
    });

    return category;
  }

  async createPartner(
    academyId: number,
    input: {
      categoryId?: number;
      name: string;
      slug: string;
      description?: string;
      websiteUrl?: string;
      contactUrl?: string;
      logoUrl?: string;
      location?: string;
      status?: DefinedAcademyPartnerStatus;
      featured?: boolean;
      sortOrder?: number;
    },
    userId?: number,
  ) {
    await this.ensureAcademy(academyId);
    if (input.categoryId) {
      await this.ensurePartnerCategory(academyId, input.categoryId);
    }
    const slug = this.assertValidSlug(input.slug);
    const maxOrder = await this.prisma.definedAcademyPartner.aggregate({
      where: { academyId },
      _max: { sortOrder: true },
    });

    const partner = await this.prisma.definedAcademyPartner.create({
      data: {
        academyId,
        categoryId: input.categoryId,
        name: input.name.trim(),
        slug,
        description: input.description,
        websiteUrl: input.websiteUrl,
        contactUrl: input.contactUrl,
        logoUrl: input.logoUrl,
        location: input.location,
        status: input.status ?? DefinedAcademyPartnerStatus.DRAFT,
        featured: input.featured ?? false,
        sortOrder: input.sortOrder ?? (maxOrder._max.sortOrder ?? -1) + 1,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy partner created',
      route: 'createDefinedAcademyPartner',
      metadata: { academyId, partnerId: partner.id },
    });

    return partner;
  }

  async updatePartner(
    academyId: number,
    partnerId: number,
    input: {
      categoryId?: number | null;
      name?: string;
      slug?: string;
      description?: string;
      websiteUrl?: string;
      contactUrl?: string;
      logoUrl?: string;
      location?: string;
      status?: DefinedAcademyPartnerStatus;
      featured?: boolean;
      sortOrder?: number;
    },
    userId?: number,
  ) {
    await this.ensurePartner(academyId, partnerId);
    if (input.categoryId) {
      await this.ensurePartnerCategory(academyId, input.categoryId);
    }

    const partner = await this.prisma.definedAcademyPartner.update({
      where: { id: partnerId },
      data: {
        categoryId: input.categoryId,
        name: input.name?.trim(),
        slug: input.slug ? this.assertValidSlug(input.slug) : undefined,
        description: input.description,
        websiteUrl: input.websiteUrl,
        contactUrl: input.contactUrl,
        logoUrl: input.logoUrl,
        location: input.location,
        status: input.status,
        featured: input.featured,
        sortOrder: input.sortOrder,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy partner updated',
      route: 'updateDefinedAcademyPartner',
      metadata: { academyId, partnerId },
    });

    return partner;
  }

  async getPublicAcademyBySlug(slug: string) {
    const normalizedSlug = normalizeSlug(slug);
    if (!normalizedSlug) {
      throw new BadRequestException('slug is required');
    }

    const academy = await this.prisma.definedAcademy.findUnique({
      where: { slug: normalizedSlug },
    });

    if (!academy || !PUBLIC_ACADEMY_STATUSES.includes(academy.status)) {
      return null;
    }

    return academy;
  }

  async listPublicCourses(academySlug: string, isAuthenticated = false) {
    const academy = await this.getPublicAcademyBySlug(academySlug);
    if (!academy) {
      return [];
    }

    const courses = await this.prisma.definedAcademyCourse.findMany({
      where: {
        academyId: academy.id,
        status: { in: PUBLIC_COURSE_STATUSES },
      },
      include: COURSE_INCLUDE,
      orderBy: { sortOrder: 'asc' },
    });

    return courses.filter((course) =>
      canAuthenticatedUserAccessCourse(course.visibility, isAuthenticated),
    );
  }

  async getPublicCourseBySlug(
    academySlug: string,
    courseSlug: string,
    isAuthenticated = false,
  ) {
    const academy = await this.getPublicAcademyBySlug(academySlug);
    if (!academy) {
      return null;
    }

    const normalizedCourseSlug = normalizeSlug(courseSlug);
    if (!normalizedCourseSlug) {
      throw new BadRequestException('courseSlug is required');
    }

    const course = await this.prisma.definedAcademyCourse.findUnique({
      where: {
        academyId_slug: { academyId: academy.id, slug: normalizedCourseSlug },
      },
      include: COURSE_INCLUDE,
    });

    if (
      !course ||
      !PUBLIC_COURSE_STATUSES.includes(course.status) ||
      !canAuthenticatedUserAccessCourse(course.visibility, isAuthenticated)
    ) {
      return null;
    }

    return course;
  }

  async getPublicLessonBySlug(
    academySlug: string,
    courseSlug: string,
    lessonSlug: string,
    isAuthenticated = false,
  ) {
    const course = await this.getPublicCourseBySlug(
      academySlug,
      courseSlug,
      isAuthenticated,
    );
    if (!course) {
      return null;
    }

    const normalizedLessonSlug = normalizeSlug(lessonSlug);
    if (!normalizedLessonSlug) {
      throw new BadRequestException('lessonSlug is required');
    }

    const academy = await this.getPublicAcademyBySlug(academySlug);
    if (!academy) {
      return null;
    }

    const lesson = await this.prisma.definedAcademyLesson.findFirst({
      where: {
        slug: normalizedLessonSlug,
        module: { courseId: course.id },
      },
      include: {
        module: true,
        resources: {
          where: {
            status: { in: PUBLIC_RESOURCE_STATUSES },
          },
          orderBy: { sortOrder: 'asc' },
        },
      },
    });

    if (!lesson) {
      return null;
    }

    const isVisible = isLessonPubliclyVisible(
      {
        academyStatus: academy.status,
        courseStatus: course.status,
        moduleStatus: lesson.module.status,
        lessonStatus: lesson.status,
      },
      lesson.isPreview,
    );

    if (
      !isVisible ||
      !canAuthenticatedUserAccessCourse(lesson.visibility, isAuthenticated)
    ) {
      return null;
    }

    return lesson;
  }

  async listPublicPartners(academySlug: string) {
    const academy = await this.getPublicAcademyBySlug(academySlug);
    if (!academy) {
      return [];
    }

    return this.prisma.definedAcademyPartner.findMany({
      where: {
        academyId: academy.id,
        status: DefinedAcademyPartnerStatus.ACTIVE,
      },
      include: { category: true },
      orderBy: [{ featured: 'desc' }, { sortOrder: 'asc' }],
    });
  }

  async getPublicPartnerBySlug(academySlug: string, partnerSlug: string) {
    const academy = await this.getPublicAcademyBySlug(academySlug);
    if (!academy) {
      return null;
    }

    const normalizedPartnerSlug = normalizeSlug(partnerSlug);
    if (!normalizedPartnerSlug) {
      throw new BadRequestException('partnerSlug is required');
    }

    const partner = await this.prisma.definedAcademyPartner.findUnique({
      where: {
        academyId_slug: { academyId: academy.id, slug: normalizedPartnerSlug },
      },
      include: { category: true },
    });

    if (!partner || partner.status !== DefinedAcademyPartnerStatus.ACTIVE) {
      return null;
    }

    return partner;
  }

  async listPublicResources(
    academySlug: string,
    lessonId?: number,
    isAuthenticated = false,
  ) {
    const academy = await this.getPublicAcademyBySlug(academySlug);
    if (!academy) {
      return [];
    }

    const resources = await this.prisma.definedAcademyResource.findMany({
      where: {
        academyId: academy.id,
        lessonId,
        status: { in: PUBLIC_RESOURCE_STATUSES },
      },
      orderBy: { sortOrder: 'asc' },
    });

    return resources.filter((resource) =>
      canAuthenticatedUserAccessCourse(resource.visibility, isAuthenticated),
    );
  }

  async ensureAcademy(
    id: number,
    tx: PrismaService | Prisma.TransactionClient = this.prisma,
  ) {
    const academy = await tx.definedAcademy.findUnique({ where: { id } });
    if (!academy) {
      throw new NotFoundException(`Defined academy ${id} not found`);
    }
    return academy;
  }

  async ensureCourse(
    academyId: number,
    courseId: number,
    tx: PrismaService | Prisma.TransactionClient = this.prisma,
  ) {
    const course = await tx.definedAcademyCourse.findUnique({
      where: { id: courseId },
      include: COURSE_INCLUDE,
    });
    if (!course || course.academyId !== academyId) {
      throw new NotFoundException(
        `Defined academy course ${courseId} not found in academy ${academyId}`,
      );
    }
    return course;
  }

  async ensureModule(
    academyId: number,
    moduleId: number,
    tx: PrismaService | Prisma.TransactionClient = this.prisma,
  ) {
    const module = await tx.definedAcademyModule.findUnique({
      where: { id: moduleId },
      include: { course: true },
    });
    if (!module || module.course.academyId !== academyId) {
      throw new NotFoundException(
        `Defined academy module ${moduleId} not found in academy ${academyId}`,
      );
    }
    return module;
  }

  async ensureLesson(
    academyId: number,
    lessonId: number,
    tx: PrismaService | Prisma.TransactionClient = this.prisma,
  ) {
    const lesson = await tx.definedAcademyLesson.findUnique({
      where: { id: lessonId },
      include: { module: { include: { course: true } } },
    });
    if (!lesson || lesson.module.course.academyId !== academyId) {
      throw new NotFoundException(
        `Defined academy lesson ${lessonId} not found in academy ${academyId}`,
      );
    }
    return lesson;
  }

  private async ensureResource(academyId: number, resourceId: number) {
    const resource = await this.prisma.definedAcademyResource.findUnique({
      where: { id: resourceId },
    });
    if (!resource || resource.academyId !== academyId) {
      throw new NotFoundException(
        `Defined academy resource ${resourceId} not found in academy ${academyId}`,
      );
    }
    return resource;
  }

  private async ensurePartnerCategory(academyId: number, categoryId: number) {
    const category = await this.prisma.definedAcademyPartnerCategory.findUnique({
      where: { id: categoryId },
    });
    if (!category || category.academyId !== academyId) {
      throw new NotFoundException(
        `Defined academy partner category ${categoryId} not found in academy ${academyId}`,
      );
    }
    return category;
  }

  private async ensurePartner(academyId: number, partnerId: number) {
    const partner = await this.prisma.definedAcademyPartner.findUnique({
      where: { id: partnerId },
    });
    if (!partner || partner.academyId !== academyId) {
      throw new NotFoundException(
        `Defined academy partner ${partnerId} not found in academy ${academyId}`,
      );
    }
    return partner;
  }

  private async ensureApp(appId: number) {
    const app = await this.prisma.app.findUnique({ where: { id: appId } });
    if (!app) {
      throw new NotFoundException(`App ${appId} not found`);
    }
    return app;
  }

  private assertValidSlug(slug: string, fieldName = 'slug'): string {
    const normalized = normalizeSlug(slug);
    if (!normalized || !SLUG_REGEX.test(normalized)) {
      throw new BadRequestException(
        `${fieldName} must be a valid lowercase slug`,
      );
    }
    return normalized;
  }
}
