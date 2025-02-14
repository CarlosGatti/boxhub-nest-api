import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  TimelineFilterInput,
  TimelineInputArgs,
  TimelineResult,
} from './dto/timeline.dto';

import { CurrentUser } from '../../user/current-user.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { TimelineService } from './timeline.service';
import { UseGuards } from '@nestjs/common';
import { User } from '@generated/user/user.model';

@Resolver()
export class TimelineResolver {
  constructor(private readonly timelineService: TimelineService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => TimelineResult, { name: 'timeline' })
  timeline(
    @CurrentUser() currentUser: User,
    @Args('pagination', { nullable: true }) pagination?: TimelineInputArgs,
    @Args('forceUpdate', { nullable: true }) forceUpdate?: boolean,
    @Args('filter', { nullable: true }) filter?: TimelineFilterInput,
  ) {
    return this.timelineService.timeline(
      currentUser,
      pagination || {
        skip: 0,
        take: 10,
      },
      forceUpdate,
      filter,
    );
  }
}
