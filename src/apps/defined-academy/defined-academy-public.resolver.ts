import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DefinedAcademy } from '@generated/defined-academy/defined-academy.model';
import { DefinedAcademyCourse } from '@generated/defined-academy-course/defined-academy-course.model';
import { DefinedAcademyLesson } from '@generated/defined-academy-lesson/defined-academy-lesson.model';
import { DefinedAcademyPartner } from '@generated/defined-academy-partner/defined-academy-partner.model';
import { DefinedAcademyReferral } from '@generated/defined-academy-referral/defined-academy-referral.model';
import { DefinedAcademyResource } from '@generated/defined-academy-resource/defined-academy-resource.model';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralService } from './defined-academy-referral.service';
import { DefinedAcademyShortLinkService } from './defined-academy-shortlink.service';
import { DefinedAcademyService } from './defined-academy.service';
import { CaptureDefinedAcademyReferralInput } from './dto/capture-defined-academy-referral.input';
import { DefinedAcademyShortlinkResolve } from './types/defined-academy-shortlink-resolve.type';

@Resolver()
export class DefinedAcademyPublicResolver {
  constructor(
    private readonly definedAcademyService: DefinedAcademyService,
    private readonly definedAcademyShortlinkService: DefinedAcademyShortLinkService,
    private readonly definedAcademyReferralService: DefinedAcademyReferralService,
  ) {}

  @Query(() => DefinedAcademy, {
    name: 'definedAcademyBySlug',
    nullable: true,
  })
  async definedAcademyBySlug(@Args('slug') slug: string) {
    return this.definedAcademyService.getPublicAcademyBySlug(slug);
  }

  @Query(() => [DefinedAcademyCourse], { name: 'definedAcademyPublishedCourses' })
  async definedAcademyPublishedCourses(
    @Args('academySlug') academySlug: string,
    @Context() context?: { req?: { user?: unknown } },
  ) {
    return this.definedAcademyService.listPublicCourses(
      academySlug,
      this.isAuthenticated(context),
    );
  }

  @Query(() => DefinedAcademyCourse, {
    name: 'definedAcademyCourseBySlug',
    nullable: true,
  })
  async definedAcademyCourseBySlug(
    @Args('academySlug') academySlug: string,
    @Args('courseSlug') courseSlug: string,
    @Context() context?: { req?: { user?: unknown } },
  ) {
    return this.definedAcademyService.getPublicCourseBySlug(
      academySlug,
      courseSlug,
      this.isAuthenticated(context),
    );
  }

  @Query(() => DefinedAcademyLesson, {
    name: 'definedAcademyLessonBySlug',
    nullable: true,
  })
  async definedAcademyLessonBySlug(
    @Args('academySlug') academySlug: string,
    @Args('courseSlug') courseSlug: string,
    @Args('lessonSlug') lessonSlug: string,
    @Context() context?: { req?: { user?: unknown } },
  ) {
    return this.definedAcademyService.getPublicLessonBySlug(
      academySlug,
      courseSlug,
      lessonSlug,
      this.isAuthenticated(context),
    );
  }

  @Query(() => [DefinedAcademyResource], {
    name: 'definedPublicAcademyResources',
  })
  async definedPublicAcademyResources(
    @Args('academySlug') academySlug: string,
    @Args('lessonId', { type: () => Int, nullable: true }) lessonId?: number,
    @Context() context?: { req?: { user?: unknown } },
  ) {
    return this.definedAcademyService.listPublicResources(
      academySlug,
      lessonId,
      this.isAuthenticated(context),
    );
  }

  @Query(() => [DefinedAcademyPartner], { name: 'definedPublicAcademyPartners' })
  async definedPublicAcademyPartners(@Args('academySlug') academySlug: string) {
    return this.definedAcademyService.listPublicPartners(academySlug);
  }

  @Query(() => DefinedAcademyPartner, {
    name: 'definedAcademyPartnerBySlug',
    nullable: true,
  })
  async definedAcademyPartnerBySlug(
    @Args('academySlug') academySlug: string,
    @Args('partnerSlug') partnerSlug: string,
  ) {
    return this.definedAcademyService.getPublicPartnerBySlug(
      academySlug,
      partnerSlug,
    );
  }

  @Query(() => DefinedAcademyShortlinkResolve, {
    name: 'resolveDefinedAcademyShortLink',
  })
  async resolveDefinedAcademyShortLink(@Args('code') code: string) {
    const result = await this.definedAcademyShortlinkService.resolveShortLink(code);
    return {
      code: result.shortLink.code,
      destinationUrl: result.destinationUrl,
      status: result.shortLink.status,
    };
  }

  @Mutation(() => DefinedAcademyReferral, { name: 'captureDefinedAcademyReferral' })
  async captureDefinedAcademyReferral(
    @Args('input') input: CaptureDefinedAcademyReferralInput,
  ) {
    return this.definedAcademyReferralService.captureReferral({
      ...input,
      metadata: input.metadata as Prisma.InputJsonValue | undefined,
    });
  }

  private isAuthenticated(context?: { req?: { user?: unknown } }): boolean {
    return Boolean(context?.req?.user);
  }
}
