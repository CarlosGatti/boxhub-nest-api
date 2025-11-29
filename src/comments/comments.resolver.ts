import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentInput } from './dto/create-comment.input';
import { Comment } from './dto/comment.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../user/current-user.decorator';
import { User } from '../../@generated/user/user.model';
import { BaseResult } from '../models/base-error.dto';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Comment)
  async createComment(
    @Args('input') input: CreateCommentInput,
    @CurrentUser() user: User,
  ): Promise<Comment> {
    return this.commentsService.create(input, user as any) as any;
  }

  @Query(() => [Comment])
  async comments(@Args('discartItemId', { type: () => Int }) discartItemId: number): Promise<Comment[]> {
    return this.commentsService.findByDiscartItemId(discartItemId) as any;
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BaseResult)
  async deleteComment(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ): Promise<BaseResult> {
    return this.commentsService.delete(id, user as any);
  }
}

