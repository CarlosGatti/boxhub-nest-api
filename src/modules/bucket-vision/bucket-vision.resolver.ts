import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard';
import { CurrentUser } from '../../domains/user/current-user.decorator';
import { User } from '@generated/user/user.model';
import { BucketVisionService } from './bucket-vision.service';
import { BucketVisionBoard } from '@generated/bucket-vision-board/bucket-vision-board.model';
import { BucketVisionSection } from '@generated/bucket-vision-section/bucket-vision-section.model';
import { BucketVisionItem } from '@generated/bucket-vision-item/bucket-vision-item.model';
import { BucketVisionGoalLink } from '@generated/bucket-vision-goal-link/bucket-vision-goal-link.model';
import { BucketVisionCheckin } from '@generated/bucket-vision-checkin/bucket-vision-checkin.model';
import { CreateBucketVisionBoardInput } from './dto/create-bucket-vision-board.input';
import { UpdateBucketVisionBoardInput } from './dto/update-bucket-vision-board.input';
import { UpsertBucketVisionSectionInput } from './dto/upsert-bucket-vision-section.input';
import { AddBucketVisionItemInput } from './dto/add-bucket-vision-item.input';
import { UpdateBucketVisionItemInput } from './dto/update-bucket-vision-item.input';
import { CreateBucketVisionCheckinInput } from './dto/create-bucket-vision-checkin.input';
import { BucketVisionProgressSummary } from './types/bucket-vision-progress-summary.type';

@Resolver()
export class BucketVisionResolver {
  constructor(private readonly bucketVisionService: BucketVisionService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [BucketVisionBoard], {
    name: 'bucketVisionBoards',
    description: 'List current user vision boards (sorted by year desc)',
  })
  async bucketVisionBoards(@CurrentUser() user: User) {
    return this.bucketVisionService.listBoards(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => BucketVisionBoard, {
    name: 'bucketVisionBoard',
    nullable: true,
    description: 'Get full vision board by ID',
  })
  async bucketVisionBoard(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.bucketVisionService.getBoard(user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => BucketVisionBoard, {
    name: 'bucketVisionBoardByYear',
    description: 'Get vision board for a given year (convenience for YEAR boards)',
  })
  async bucketVisionBoardByYear(
    @Args('year', { type: () => Int }) year: number,
    @CurrentUser() user: User,
  ) {
    return this.bucketVisionService.getBoardByYear(user.id, year);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => BucketVisionProgressSummary, {
    name: 'bucketVisionBoardProgress',
    description: 'Progress summary: linked goals, completion rate, by-status counts',
  })
  async bucketVisionBoardProgress(
    @Args('boardId', { type: () => Int }) boardId: number,
    @CurrentUser() user: User,
  ) {
    return this.bucketVisionService.getBoardProgress(user.id, boardId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BucketVisionBoard, {
    name: 'createBucketVisionBoard',
    description: 'Create vision board with default sections',
  })
  async createBucketVisionBoard(
    @Args('input') input: CreateBucketVisionBoardInput,
    @CurrentUser() user: User,
  ) {
    return this.bucketVisionService.createBoard(user.id, input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BucketVisionBoard, {
    name: 'updateBucketVisionBoard',
    description: 'Update vision board fields',
  })
  async updateBucketVisionBoard(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateBucketVisionBoardInput,
    @CurrentUser() user: User,
  ) {
    return this.bucketVisionService.updateBoard(user.id, id, input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BucketVisionSection, {
    name: 'upsertBucketVisionSection',
    description: 'Save section content (prompt answers)',
  })
  async upsertBucketVisionSection(
    @Args('boardId', { type: () => Int }) boardId: number,
    @Args('input') input: UpsertBucketVisionSectionInput,
    @CurrentUser() user: User,
  ) {
    return this.bucketVisionService.upsertSection(user.id, boardId, input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BucketVisionItem, {
    name: 'addBucketVisionItem',
    description: 'Add visual inspiration item (image/quote/color/link)',
  })
  async addBucketVisionItem(
    @Args('boardId', { type: () => Int }) boardId: number,
    @Args('input') input: AddBucketVisionItemInput,
    @CurrentUser() user: User,
  ) {
    return this.bucketVisionService.addItem(user.id, boardId, input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BucketVisionItem, {
    name: 'updateBucketVisionItem',
    description: 'Update visual item',
  })
  async updateBucketVisionItem(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateBucketVisionItemInput,
    @CurrentUser() user: User,
  ) {
    return this.bucketVisionService.updateItem(user.id, id, input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean, {
    name: 'deleteBucketVisionItem',
    description: 'Remove visual item',
  })
  async deleteBucketVisionItem(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.bucketVisionService.deleteItem(user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BucketVisionGoalLink, {
    name: 'linkBucketVisionGoal',
    description: 'Link a BucketGoal to this vision board (Phase B)',
  })
  async linkBucketVisionGoal(
    @Args('boardId', { type: () => Int }) boardId: number,
    @Args('goalId', { type: () => Int }) goalId: number,
    @Args('label', { type: () => String, nullable: true }) label: string | undefined,
    @CurrentUser() user: User,
  ) {
    return this.bucketVisionService.linkGoal(user.id, boardId, goalId, label);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean, {
    name: 'unlinkBucketVisionGoal',
    description: 'Unlink goal from vision board',
  })
  async unlinkBucketVisionGoal(
    @Args('boardId', { type: () => Int }) boardId: number,
    @Args('goalId', { type: () => Int }) goalId: number,
    @CurrentUser() user: User,
  ) {
    return this.bucketVisionService.unlinkGoal(user.id, boardId, goalId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BucketVisionCheckin, {
    name: 'createBucketVisionCheckin',
    description: 'Create check-in/review entry (Phase D)',
  })
  async createBucketVisionCheckin(
    @Args('boardId', { type: () => Int }) boardId: number,
    @Args('input') input: CreateBucketVisionCheckinInput,
    @CurrentUser() user: User,
  ) {
    return this.bucketVisionService.createCheckin(user.id, boardId, input);
  }
}
