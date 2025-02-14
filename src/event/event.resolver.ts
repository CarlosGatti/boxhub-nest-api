import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EventService } from './event.service';
import { EventDetails, RegisterUserEvent } from './dto/event.dto';

import { CurrentUser } from '../user/current-user.decorator';
import { User } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { BaseResult } from '../models/base-error.dto';

import { Event as EventGQL } from '../../@generated/event/event.model';

@Resolver(() => EventGQL)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Query(() => [EventGQL], { name: 'findEventsByUser' })
  @UseGuards(JwtAuthGuard)
  findEventsByUser(@CurrentUser() currentUser: User) {
    return this.eventService.findEventsByUser(currentUser);
  }

  @Query(() => [EventGQL], { name: 'findEventsByCommunity' })
  @UseGuards(JwtAuthGuard)
  findEventsByCommunity(@Args('communityId') communityId: number) {
    return this.eventService.findEventsByCommunity(communityId);
  }

  @Query(() => EventDetails, { name: 'findEvent' })
  @UseGuards(JwtAuthGuard)
  findEvent(
    @CurrentUser() currentUser: User,
    @Args('eventId') eventId: number,
  ) {
    return this.eventService.findEvent(currentUser, eventId);
  }

  @Mutation(() => BaseResult, { name: 'joinEvent' })
  @UseGuards(JwtAuthGuard)
  joinEvent(
    @CurrentUser() currentUser: User,
    @Args('eventId') eventId: number,
  ) {
    return this.eventService.joinEvent(currentUser, eventId);
  }

  @Mutation(() => BaseResult, { name: 'createTicket' })
  @UseGuards(JwtAuthGuard)
  createTicket(
    @CurrentUser() currentUser: User,
    @Args('eventId') eventId: number,
  ) {
    return this.eventService.createTicket(currentUser, eventId);
  }

  @Mutation(() => BaseResult, { name: 'beepTicket' })
  @UseGuards(JwtAuthGuard)
  beepTicket(@Args('ticketId') ticketId: number) {
    return this.eventService.beepTicket(ticketId);
  }

  @Mutation(() => BaseResult, { name: 'registerUserEvent' })
  registerUserEvent(@Args('data') data: RegisterUserEvent) {
    return this.eventService.registerUserEvent(data);
  }
}
