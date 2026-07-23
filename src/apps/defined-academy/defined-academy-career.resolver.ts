import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DefinedAcademyCareerJourney } from '@generated/defined-academy-career-journey/defined-academy-career-journey.model';
import { DefinedAcademyCareerStage } from '@generated/defined-academy-career-stage/defined-academy-career-stage.model';
import { DefinedAcademyCareerStageContent } from '@generated/defined-academy-career-stage-content/defined-academy-career-stage-content.model';
import { User } from '@generated/user/user.model';
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard';
import {
  AppPermissionGuard,
  RequireApp,
} from '../../core/auth/guards/app-permission.guard';
import { CurrentUser } from '../../domains/user/current-user.decorator';
import { DefinedAcademyCareerService } from './defined-academy-career.service';
import { CreateDefinedAcademyCareerJourneyInput } from './dto/create-defined-academy-career-journey.input';
import { CreateDefinedAcademyCareerStageInput } from './dto/create-defined-academy-career-stage.input';
import { LinkDefinedAcademyCareerStageContentInput } from './dto/link-defined-academy-career-stage-content.input';
import { ReorderDefinedAcademyItemsInput } from './dto/reorder-defined-academy-items.input';
import { UpdateDefinedAcademyCareerJourneyInput } from './dto/update-defined-academy-career-journey.input';
import { UpdateDefinedAcademyCareerStageInput } from './dto/update-defined-academy-career-stage.input';

@Resolver()
@UseGuards(JwtAuthGuard, AppPermissionGuard)
export class DefinedAcademyCareerResolver {
  constructor(
    private readonly definedAcademyCareerService: DefinedAcademyCareerService,
  ) {}

  @RequireApp('DEFINED')
  @Query(() => DefinedAcademyCareerJourney, {
    name: 'definedAcademyCareerJourney',
    nullable: true,
  })
  async definedAcademyCareerJourney(
    @Args('academyId', { type: () => Int }) academyId: number,
  ) {
    return this.definedAcademyCareerService.getAdminCareerJourney(academyId);
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyCareerJourney, {
    name: 'createDefinedAcademyCareerJourney',
  })
  async createDefinedAcademyCareerJourney(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('input') input: CreateDefinedAcademyCareerJourneyInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyCareerService.createCareerJourney(
      academyId,
      input,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyCareerJourney, {
    name: 'updateDefinedAcademyCareerJourney',
  })
  async updateDefinedAcademyCareerJourney(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('input') input: UpdateDefinedAcademyCareerJourneyInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyCareerService.updateCareerJourney(
      academyId,
      input,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyCareerStage, {
    name: 'createDefinedAcademyCareerStage',
  })
  async createDefinedAcademyCareerStage(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('input') input: CreateDefinedAcademyCareerStageInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyCareerService.createCareerStage(
      academyId,
      input,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyCareerStage, {
    name: 'updateDefinedAcademyCareerStage',
  })
  async updateDefinedAcademyCareerStage(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('stageId', { type: () => Int }) stageId: number,
    @Args('input') input: UpdateDefinedAcademyCareerStageInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyCareerService.updateCareerStage(
      academyId,
      stageId,
      input,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => [DefinedAcademyCareerStage], {
    name: 'reorderDefinedAcademyCareerStages',
  })
  async reorderDefinedAcademyCareerStages(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('input') input: ReorderDefinedAcademyItemsInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyCareerService.reorderCareerStages(
      academyId,
      input.items,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => DefinedAcademyCareerStageContent, {
    name: 'linkDefinedAcademyCareerStageContent',
  })
  async linkDefinedAcademyCareerStageContent(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('stageId', { type: () => Int }) stageId: number,
    @Args('input') input: LinkDefinedAcademyCareerStageContentInput,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyCareerService.linkCareerStageContent(
      academyId,
      stageId,
      input,
      user.id,
    );
  }

  @RequireApp('DEFINED')
  @Mutation(() => Boolean, {
    name: 'unlinkDefinedAcademyCareerStageContent',
  })
  async unlinkDefinedAcademyCareerStageContent(
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('stageId', { type: () => Int }) stageId: number,
    @Args('contentLinkId', { type: () => Int }) contentLinkId: number,
    @CurrentUser() user: User,
  ) {
    return this.definedAcademyCareerService.unlinkCareerStageContent(
      academyId,
      stageId,
      contentLinkId,
      user.id,
    );
  }
}
