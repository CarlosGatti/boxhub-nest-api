import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../../core/auth/guards/jwt-auth.guard';
import { CurrentUser } from '../../../domains/user/current-user.decorator';
import { User } from '@generated/user/user.model';
import { BucketShareService } from './bucket-share.service';
import { BucketShareSummary, BucketSharePublic } from './bucket-share.types';
import { BucketGoalsFilterInput } from '../dto/bucket-goals-filter.input';
import { BucketGoalType } from '@generated/prisma/bucket-goal-type.enum';
import { BucketShare } from '@generated/bucket-share/bucket-share.model';

@Resolver()
export class BucketShareResolver {
  constructor(private readonly shareService: BucketShareService) {}

  /**
   * PUBLIC — no auth required. Returns frozen snapshot by token.
   */
  @Query(() => BucketSharePublic, {
    name: 'bucketSharePublic',
    description: 'Get public share payload by token (no auth required)',
  })
  async bucketSharePublic(@Args('token', { type: () => String }) token: string) {
    return this.shareService.getPublicByToken(token);
  }

  /**
   * Auth required. List current user's shares.
   */
  @UseGuards(JwtAuthGuard)
  @Query(() => [BucketShareSummary], {
    name: 'bucketMyShares',
    description: 'List shares created by current user',
  })
  async bucketMyShares(@CurrentUser() user: User) {
    return this.shareService.listMyShares(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BucketShare, {
    name: 'createBucketShareFromGoal',
    description: 'Create a share from a single goal',
  })
  async createBucketShareFromGoal(
    @Args('goalId', { type: () => Int }) goalId: number,
    @Args('title', { type: () => String, nullable: true }) title: string | undefined,
    @CurrentUser() user: User
  ) {
    return this.shareService.createFromGoal(user.id, goalId, title);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BucketShare, {
    name: 'createBucketShareFromType',
    description: 'Create a share from goals of a given type (e.g. BOOK, GAME, or typeIn for watchlist)',
  })
  async createBucketShareFromType(
    @Args('type', { type: () => BucketGoalType }) type: BucketGoalType,
    @Args('filter', { type: () => BucketGoalsFilterInput, nullable: true }) filter: BucketGoalsFilterInput | undefined,
    @Args('title', { type: () => String, nullable: true }) title: string | undefined,
    @CurrentUser() user: User
  ) {
    return this.shareService.createFromType(user.id, type, filter ?? null, title);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BucketShare, {
    name: 'createBucketShareCustom',
    description: 'Create a share from a custom selection of goals',
  })
  async createBucketShareCustom(
    @Args('goalIds', { type: () => [Int] }) goalIds: number[],
    @Args('title', { type: () => String }) title: string,
    @CurrentUser() user: User
  ) {
    return this.shareService.createCustom(user.id, goalIds, title);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean, {
    name: 'deleteBucketShare',
    description: 'Delete a share (owner only)',
  })
  async deleteBucketShare(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User
  ) {
    return this.shareService.deleteShare(user.id, id);
  }
}
