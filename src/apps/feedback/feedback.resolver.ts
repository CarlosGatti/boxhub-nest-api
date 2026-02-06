import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { Feedback } from '@generated/feedback/feedback.model';
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard';
import { AdminGuard } from '../../core/auth/guards/admin.guard';
import { CurrentUser } from '../../domains/user/current-user.decorator';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { FeedbackFilterInput } from './dto/feedback-filter.input';
import { UpdateFeedbackStatusInput } from './dto/update-feedback-status.input';
import { OptionalJwtAuthGuard } from './guards/optional-jwt-auth.guard';

@Resolver(() => Feedback)
export class FeedbackResolver {
  constructor(private readonly feedbackService: FeedbackService) {}

  @UseGuards(OptionalJwtAuthGuard)
  @Mutation(() => Feedback, { name: 'submitFeedback' })
  async submitFeedback(
    @Args('input') input: CreateFeedbackInput,
    @CurrentUser() user?: { id: number },
  ) {
    return this.feedbackService.submitFeedback(input, user);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Query(() => [Feedback], { name: 'feedbackList' })
  async feedbackList(
    @Args('filter', { nullable: true }) filter?: FeedbackFilterInput,
    @Args('take', { type: () => Int, nullable: true, defaultValue: 50 })
    take?: number,
    @Args('skip', { type: () => Int, nullable: true, defaultValue: 0 })
    skip?: number,
  ) {
    return this.feedbackService.listFeedback(filter, take ?? 50, skip ?? 0);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Mutation(() => Feedback, { name: 'updateFeedbackStatus' })
  async updateFeedbackStatus(
    @Args('input') input: UpdateFeedbackStatusInput,
    @CurrentUser() user: { id: number },
  ) {
    return this.feedbackService.updateStatus(input, user.id);
  }
}
