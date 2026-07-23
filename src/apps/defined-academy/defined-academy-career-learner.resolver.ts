import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfile } from '@generated/defined-academy-user-career-profile/defined-academy-user-career-profile.model';
import { User } from '@generated/user/user.model';
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard';
import { CurrentUser } from '../../domains/user/current-user.decorator';
import { DefinedAcademyCareerService } from './defined-academy-career.service';
import { DefinedAcademyCareerRecommendations } from './types/defined-academy-career-recommendations.type';

@Resolver()
@UseGuards(JwtAuthGuard)
export class DefinedAcademyCareerLearnerResolver {
  constructor(
    private readonly definedAcademyCareerService: DefinedAcademyCareerService,
  ) {}

  @Query(() => DefinedAcademyUserCareerProfile, {
    name: 'myDefinedAcademyCareerProfile',
    nullable: true,
  })
  async myDefinedAcademyCareerProfile(
    @CurrentUser() user: User,
    @Args('academyId', { type: () => Int }) academyId: number,
  ) {
    return this.definedAcademyCareerService.myCareerProfile(user.id, academyId);
  }

  @Query(() => DefinedAcademyCareerRecommendations, {
    name: 'myDefinedAcademyCareerRecommendations',
  })
  async myDefinedAcademyCareerRecommendations(
    @CurrentUser() user: User,
    @Args('academyId', { type: () => Int }) academyId: number,
  ) {
    return this.definedAcademyCareerService.myCareerRecommendations(
      user.id,
      academyId,
    );
  }

  @Mutation(() => DefinedAcademyUserCareerProfile, {
    name: 'initializeMyDefinedAcademyCareerProfile',
  })
  async initializeMyDefinedAcademyCareerProfile(
    @CurrentUser() user: User,
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('stageId', { type: () => Int, nullable: true }) stageId?: number,
  ) {
    return this.definedAcademyCareerService.initializeMyCareerProfile(
      user.id,
      academyId,
      stageId,
    );
  }

  @Mutation(() => DefinedAcademyUserCareerProfile, {
    name: 'setMyDefinedAcademyCareerStage',
  })
  async setMyDefinedAcademyCareerStage(
    @CurrentUser() user: User,
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('stageId', { type: () => Int }) stageId: number,
  ) {
    return this.definedAcademyCareerService.setMyCareerStage(
      user.id,
      academyId,
      stageId,
    );
  }

  @Mutation(() => DefinedAcademyUserCareerProfile, {
    name: 'completeMyDefinedAcademyCareerStage',
  })
  async completeMyDefinedAcademyCareerStage(
    @CurrentUser() user: User,
    @Args('academyId', { type: () => Int }) academyId: number,
    @Args('stageId', { type: () => Int }) stageId: number,
    @Args('notes', { type: () => String, nullable: true }) notes?: string,
  ) {
    return this.definedAcademyCareerService.completeCareerStage(
      user.id,
      academyId,
      stageId,
      notes,
    );
  }
}
