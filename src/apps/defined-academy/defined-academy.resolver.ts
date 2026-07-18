import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DefinedAcademy } from '@generated/defined-academy/defined-academy.model';
import { DefinedAcademyCourse } from '@generated/defined-academy-course/defined-academy-course.model';
import { DefinedAcademyLesson } from '@generated/defined-academy-lesson/defined-academy-lesson.model';
import { DefinedAcademyModule } from '@generated/defined-academy-module/defined-academy-module.model';
import { DefinedAcademyPartner } from '@generated/defined-academy-partner/defined-academy-partner.model';
import { DefinedAcademyPartnerCategory } from '@generated/defined-academy-partner-category/defined-academy-partner-category.model';
import { DefinedAcademyReferralCampaign } from '@generated/defined-academy-referral-campaign/defined-academy-referral-campaign.model';
import { DefinedAcademyResource } from '@generated/defined-academy-resource/defined-academy-resource.model';
import { DefinedAcademyShortLink } from '@generated/defined-academy-short-link/defined-academy-short-link.model';
import { DefinedAcademyReferralCampaignStatus } from '@generated/prisma/defined-academy-referral-campaign-status.enum';
import { DefinedAcademyStatus } from '@generated/prisma/defined-academy-status.enum';
import { User } from '@generated/user/user.model';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard';
import {
  AppPermissionGuard,
  RequireApp,
} from '../../core/auth/guards/app-permission.guard';
import { CurrentUser } from '../../domains/user/current-user.decorator';
import { DefinedAcademyAnalyticsService } from './defined-academy-analytics.service';
import { DefinedAcademyReferralService } from './defined-academy-referral.service';
import { DefinedAcademyShortLinkService } from './defined-academy-shortlink.service';
import { DefinedAcademyService } from './defined-academy.service';
import { CreateDefinedAcademyCourseInput } from './dto/create-defined-academy-course.input';
import { CreateDefinedAcademyInput } from './dto/create-defined-academy.input';
import { CreateDefinedAcademyLessonInput } from './dto/create-defined-academy-lesson.input';
import { CreateDefinedAcademyModuleInput } from './dto/create-defined-academy-module.input';
import { CreateDefinedAcademyPartnerCategoryInput } from './dto/create-defined-academy-partner-category.input';
import { CreateDefinedAcademyPartnerInput } from './dto/create-defined-academy-partner.input';
import { CreateDefinedAcademyReferralCampaignInput } from './dto/create-defined-academy-referral-campaign.input';
import { CreateDefinedAcademyResourceInput } from './dto/create-defined-academy-resource.input';
import { CreateDefinedAcademyShortLinkInput } from './dto/create-defined-academy-short-link.input';
import { ReorderDefinedAcademyItemsInput } from './dto/reorder-defined-academy-items.input';
import { UpdateDefinedAcademyCourseInput } from './dto/update-defined-academy-course.input';
import { UpdateDefinedAcademyInput } from './dto/update-defined-academy.input';
import { UpdateDefinedAcademyLessonInput } from './dto/update-defined-academy-lesson.input';
import { UpdateDefinedAcademyModuleInput } from './dto/update-defined-academy-module.input';
import { UpdateDefinedAcademyPartnerInput } from './dto/update-defined-academy-partner.input';
import { UpdateDefinedAcademyReferralCampaignInput } from './dto/update-defined-academy-referral-campaign.input';
import { UpdateDefinedAcademyResourceInput } from './dto/update-defined-academy-resource.input';
import { DefinedAcademyAnalyticsSummary } from './types/defined-academy-analytics-summary.type';

@Resolver()
@UseGuards(JwtAuthGuard, AppPermissionGuard)
export class DefinedAcademyResolver {
  constructor(
    private readonly definedAcademyService: DefinedAcademyService,
    private readonly definedAcademyShortlinkService: DefinedAcademyShortLinkService,
    private readonly definedAcademyReferralService: DefinedAcademyReferralService,
    private readonly definedAcademyAnalyticsService: DefinedAcademyAnalyticsService,
  ) {}

  @RequireApp('DEFINED')
  @Query(() => DefinedAcademy, { name: 'definedAcademy' })
  async definedAcademy(@Args('id', { type: () => Int }) id: number) {
    return this.definedAcademyService.getAcademy(id);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedAcademy], { name: 'definedAcademies' })
  async definedAcademies(
    @Args('appId', { type: () => Int, nullable: true }) appId?: number,
    @Args('status', { type: () => DefinedAcademyStatus, nullable: true })
    status?: DefinedAcademyStatus,
  ) {
    return this.definedAcademyService.listAcademies(appId, status);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedAcademyCourse], { name: 'definedAcademyCourses' })
  async definedAcademyCourses(
    @Args('academyId', { type: () => Int }) academyId: number,
  ) {
    return this.definedAcademyService.listCourses(academyId);
  }

  @RequireApp('DEFINED')
  @Query(() => DefinedAcademyCourse, { name: 'definedAcademyCourse' })
  async definedAcademyCourse(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('courseId', { type: () => Int }) courseId: number,
  ) {
    return this.definedAcademyService.getCourse(academyId, courseId);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedAcademyResource], { name: 'definedAcademyResources' })
  async definedAcademyResources(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('lessonId', { type: () => Int, nullable: true }) lessonId?: number,
  ) {
    return this.definedAcademyService.listResources(academyId, lessonId);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedAcademyPartner], { name: 'definedAcademyPartners' })
  async definedAcademyPartners(
    @Args('academyId', { type: () => Int }) academyId: number,
  ) {
    return this.definedAcademyService.listPartners(academyId);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedAcademyShortLink], { name: 'definedAcademyShortLinks' })
  async definedAcademyShortLinks(
    @Args('academyId', { type: () => Int }) academyId: number,
  ) {
    return this.definedAcademyShortlinkService.listShortLinks(academyId);
  }

  @RequireApp('DEFINED')
  @Query(() => [DefinedAcademyReferralCampaign], {
    name: 'definedAcademyReferralCampaigns',
  })
  async definedAcademyReferralCampaigns(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('status', {
      type: () => DefinedAcademyReferralCampaignStatus,
      nullable: true,
    })
    status?: DefinedAcademyReferralCampaignStatus,
  ) {
    return this.definedAcademyReferralService.listCampaigns(academyId, status);
  }

  @RequireApp('DEFINED')
  @Query(() => DefinedAcademyAnalyticsSummary, {
    name: 'definedAcademyAnalyticsSummary',
  })
  async definedAcademyAnalyticsSummary(
    @Args('academyId', { type: () => Int }) academyId: number,
  ) {
    return this.definedAcademyAnalyticsService.getAnalyticsSummary(academyId);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademy, { name: 'createDefinedAcademy' })
  async createDefinedAcademy(
    @Args('input') input: CreateDefinedAcademyInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.createAcademy(
      {
        ...input,
        settings: input.settings as Prisma.InputJsonValue | undefined,
      },
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademy, { name: 'updateDefinedAcademy' })
  async updateDefinedAcademy(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateDefinedAcademyInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.updateAcademy(
      id,
      {
        ...input,
        settings: input.settings as Prisma.InputJsonValue | undefined,
      },
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademy, { name: 'archiveDefinedAcademy' })
  async archiveDefinedAcademy(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.archiveAcademy(id, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyCourse, { name: 'createDefinedAcademyCourse' })
  async createDefinedAcademyCourse(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('input') input: CreateDefinedAcademyCourseInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.createCourse(academyId, input, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyCourse, { name: 'updateDefinedAcademyCourse' })
  async updateDefinedAcademyCourse(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('courseId', { type: () => Int }) courseId: number,
    @Args('input') input: UpdateDefinedAcademyCourseInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.updateCourse(
      academyId,
      courseId,
      input,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyCourse, { name: 'publishDefinedAcademyCourse' })
  async publishDefinedAcademyCourse(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('courseId', { type: () => Int }) courseId: number,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.publishCourse(academyId, courseId, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyCourse, { name: 'archiveDefinedAcademyCourse' })
  async archiveDefinedAcademyCourse(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('courseId', { type: () => Int }) courseId: number,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.archiveCourse(academyId, courseId, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => [DefinedAcademyCourse], { name: 'reorderDefinedAcademyCourses' })
  async reorderDefinedAcademyCourses(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('input') input: ReorderDefinedAcademyItemsInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.reorderCourses(
      academyId,
      input.items,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyModule, { name: 'createDefinedAcademyModule' })
  async createDefinedAcademyModule(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('courseId', { type: () => Int }) courseId: number,
    @Args('input') input: CreateDefinedAcademyModuleInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.createModule(
      academyId,
      courseId,
      input,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyModule, { name: 'updateDefinedAcademyModule' })
  async updateDefinedAcademyModule(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('moduleId', { type: () => Int }) moduleId: number,
    @Args('input') input: UpdateDefinedAcademyModuleInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.updateModule(
      academyId,
      moduleId,
      input,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => [DefinedAcademyModule], { name: 'reorderDefinedAcademyModules' })
  async reorderDefinedAcademyModules(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('input') input: ReorderDefinedAcademyItemsInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.reorderModules(
      academyId,
      input.parentId,
      input.items,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyLesson, { name: 'createDefinedAcademyLesson' })
  async createDefinedAcademyLesson(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('moduleId', { type: () => Int }) moduleId: number,
    @Args('input') input: CreateDefinedAcademyLessonInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.createLesson(
      academyId,
      moduleId,
      input,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyLesson, { name: 'updateDefinedAcademyLesson' })
  async updateDefinedAcademyLesson(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('lessonId', { type: () => Int }) lessonId: number,
    @Args('input') input: UpdateDefinedAcademyLessonInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.updateLesson(
      academyId,
      lessonId,
      input,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyLesson, { name: 'publishDefinedAcademyLesson' })
  async publishDefinedAcademyLesson(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('lessonId', { type: () => Int }) lessonId: number,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.publishLesson(academyId, lessonId, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => [DefinedAcademyLesson], { name: 'reorderDefinedAcademyLessons' })
  async reorderDefinedAcademyLessons(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('input') input: ReorderDefinedAcademyItemsInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.reorderLessons(
      academyId,
      input.parentId,
      input.items,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyResource, { name: 'createDefinedAcademyResource' })
  async createDefinedAcademyResource(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('input') input: CreateDefinedAcademyResourceInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.createResource(academyId, input, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyResource, { name: 'updateDefinedAcademyResource' })
  async updateDefinedAcademyResource(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('resourceId', { type: () => Int }) resourceId: number,
    @Args('input') input: UpdateDefinedAcademyResourceInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.updateResource(
      academyId,
      resourceId,
      input,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyResource, { name: 'archiveDefinedAcademyResource' })
  async archiveDefinedAcademyResource(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('resourceId', { type: () => Int }) resourceId: number,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.archiveResource(
      academyId,
      resourceId,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyPartnerCategory, {
    name: 'createDefinedAcademyPartnerCategory',
  })
  async createDefinedAcademyPartnerCategory(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('input') input: CreateDefinedAcademyPartnerCategoryInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.createPartnerCategory(
      academyId,
      input,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyPartner, { name: 'createDefinedAcademyPartner' })
  async createDefinedAcademyPartner(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('input') input: CreateDefinedAcademyPartnerInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.createPartner(academyId, input, user.id);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyPartner, { name: 'updateDefinedAcademyPartner' })
  async updateDefinedAcademyPartner(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('partnerId', { type: () => Int }) partnerId: number,
    @Args('input') input: UpdateDefinedAcademyPartnerInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyService.updatePartner(
      academyId,
      partnerId,
      input,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyShortLink, { name: 'createDefinedAcademyShortLink' })
  async createDefinedAcademyShortLink(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('input') input: CreateDefinedAcademyShortLinkInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyShortlinkService.createShortLink(
      academyId,
      input,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyShortLink, { name: 'disableDefinedAcademyShortLink' })
  async disableDefinedAcademyShortLink(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('shortLinkId', { type: () => Int }) shortLinkId: number,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyShortlinkService.disableShortLink(
      academyId,
      shortLinkId,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyReferralCampaign, {
    name: 'createDefinedAcademyReferralCampaign',
  })
  async createDefinedAcademyReferralCampaign(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('input') input: CreateDefinedAcademyReferralCampaignInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyReferralService.createCampaign(
      academyId,
      {
        ...input,
        metadata: input.metadata as Prisma.InputJsonValue | undefined,
      },
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyReferralCampaign, {
    name: 'updateDefinedAcademyReferralCampaign',
  })
  async updateDefinedAcademyReferralCampaign(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('campaignId', { type: () => Int }) campaignId: number,
    @Args('input') input: UpdateDefinedAcademyReferralCampaignInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyReferralService.updateCampaign(
      academyId,
      campaignId,
      {
        ...input,
        metadata: input.metadata as Prisma.InputJsonValue | undefined,
      },
      user.id,
    );
  }
}
