import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard';
import { CurrentUser } from '../../domains/user/current-user.decorator';
import { User } from '@generated/user/user.model';
import { BucketService } from './bucket.service';
import { BucketGoal } from '@generated/bucket-goal/bucket-goal.model';
import { BucketGoalLog } from '@generated/bucket-goal-log/bucket-goal-log.model';
import { BucketGoalMedia } from '@generated/bucket-goal-media/bucket-goal-media.model';
import { BucketGoalPin } from '@generated/bucket-goal-pin/bucket-goal-pin.model';
import { CreateBucketGoalInput } from './dto/create-bucket-goal.input';
import { UpdateBucketGoalInput } from './dto/update-bucket-goal.input';
import { BucketGoalsFilterInput } from './dto/bucket-goals-filter.input';
import { CreateBucketGoalLogInput } from './dto/create-bucket-goal-log.input';
import { AddBucketGoalPinInput } from './dto/add-bucket-goal-pin.input';
import { AddBucketGoalMediaInput } from './dto/add-bucket-goal-media.input';
import { BucketMapPinsFilterInput } from './dto/bucket-map-pins-filter.input';
import { BucketDashboardSummary } from './types/bucket-dashboard-summary.type';
import { BucketMapPinOutput } from './types/bucket-map-pin-output.type';

@Resolver()
export class BucketResolver {
  constructor(private readonly bucketService: BucketService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [BucketGoal], {
    name: 'bucketGoals',
    description: 'List bucket goals (Vision Board order: IN_PROGRESS/PLANNED first, then priority, targetDate)',
  })
  async bucketGoals(
    @Args('filter', { nullable: true, type: () => BucketGoalsFilterInput }) filter: BucketGoalsFilterInput | undefined,
    @CurrentUser() user: User,
  ) {
    return this.bucketService.listGoals(user.id, filter);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => BucketGoal, {
    name: 'bucketGoal',
    nullable: true,
    description: 'Get a single bucket goal by ID',
  })
  async bucketGoal(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.bucketService.getGoal(user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [BucketMapPinOutput], {
    name: 'bucketMapPins',
    description: 'List map pins for all goals (with minimal goal context for popups)',
  })
  async bucketMapPins(
    @Args('filter', { nullable: true, type: () => BucketMapPinsFilterInput }) filter: BucketMapPinsFilterInput | undefined,
    @CurrentUser() user: User,
  ) {
    return this.bucketService.listMapPins(user.id, filter);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => BucketDashboardSummary, {
    name: 'bucketDashboardSummary',
    description: 'Dashboard counts: totalGoals, byStatus, byType, completionRate',
  })
  async bucketDashboardSummary(@CurrentUser() user: User) {
    return this.bucketService.dashboardSummary(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BucketGoal, {
    name: 'createBucketGoal',
    description: 'Create a new bucket goal',
  })
  async createBucketGoal(
    @Args('input') input: CreateBucketGoalInput,
    @CurrentUser() user: User,
  ) {
    return this.bucketService.createGoal(user.id, input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BucketGoal, {
    name: 'updateBucketGoal',
    description: 'Update an existing bucket goal',
  })
  async updateBucketGoal(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateBucketGoalInput,
    @CurrentUser() user: User,
  ) {
    return this.bucketService.updateGoal(user.id, id, input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean, {
    name: 'deleteBucketGoal',
    description: 'Delete a bucket goal (cascades to logs, pins, media)',
  })
  async deleteBucketGoal(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.bucketService.deleteGoal(user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BucketGoal, {
    name: 'removeBucketGoalCover',
    description: 'Remove cover image from a goal (clears coverUrl, deletes local file if applicable)',
  })
  async removeBucketGoalCover(
    @Args('goalId', { type: () => Int }) goalId: number,
    @CurrentUser() user: User,
  ) {
    return this.bucketService.removeBucketGoalCover(user.id, goalId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean, {
    name: 'deleteBucketGoalMedia',
    description: 'Delete a goal media record and its local file if applicable',
  })
  async deleteBucketGoalMedia(
    @Args('mediaId', { type: () => Int }) mediaId: number,
    @CurrentUser() user: User,
  ) {
    return this.bucketService.deleteBucketGoalMedia(user.id, mediaId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BucketGoalLog, {
    name: 'addBucketGoalLog',
    description: 'Add a memory/log entry to a goal',
  })
  async addBucketGoalLog(
    @Args('goalId', { type: () => Int }) goalId: number,
    @Args('input') input: CreateBucketGoalLogInput,
    @CurrentUser() user: User,
  ) {
    return this.bucketService.addLog(user.id, goalId, input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean, {
    name: 'deleteBucketGoalLog',
    description: 'Delete a goal log (cascades to its media)',
  })
  async deleteBucketGoalLog(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.bucketService.deleteLog(user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BucketGoalPin, {
    name: 'addBucketGoalPin',
    description: 'Add a map pin to a goal (v1: MANUAL only, lat/lng from user)',
  })
  async addBucketGoalPin(
    @Args('goalId', { type: () => Int }) goalId: number,
    @Args('input') input: AddBucketGoalPinInput,
    @CurrentUser() user: User,
  ) {
    return this.bucketService.addPin(user.id, goalId, input);
  }

  @Mutation(() => BucketGoalMedia, {
    name: 'addBucketGoalMedia',
    description: 'Add media to a goal or log. Exactly one of goalId or logId required (XOR).',
  })
  async addBucketGoalMedia(
    @Args('input') input: AddBucketGoalMediaInput,
    @CurrentUser() user: User,
  ) {
    return this.bucketService.addBucketGoalMedia(user.id, input);
  }
}
