import { CommunityService } from './community.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { Community } from '../../@generated/community/community.model';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../user/current-user.decorator';
import {
  CommunityEventsProps,
  CreateCommunityInput,
  UpdateCommunityInput,
} from './dto/community.dto';
import { BaseResult } from '../models/base-error.dto';
import { User } from '../../@generated/user/user.model';
import { CommunityDto } from './dto/search.dto';

@Resolver()
export class CommunityResolver {
  constructor(private readonly communityService: CommunityService) {}

  @Mutation(() => Community, { name: 'createCommunity' })
  @UseGuards(JwtAuthGuard)
  createCommunity(
    @CurrentUser() currentUser: User,
    @Args('data') data: CreateCommunityInput,
  ) {
    return this.communityService.createCommunity(currentUser, data);
  }

  @Mutation(() => BaseResult, { name: 'updateCommunity' })
  @UseGuards(JwtAuthGuard)
  updateCommunity(
    @CurrentUser() currentUser: User,
    @Args('data') data: UpdateCommunityInput,
  ) {
    return this.communityService.updateCommunity(currentUser, data);
  }

  @Query(() => Community, { name: 'communityById' })
  @UseGuards(JwtAuthGuard)
  communityById(@Args('id') id: number) {
    return this.communityService.getCommunityById(id);
  }

  @Query(() => [CommunityDto], { name: 'searchCommunities' })
  @UseGuards(JwtAuthGuard)
  searchCommunities(
    @CurrentUser() currentUser: User,
    @Args('term') term: string,
  ) {
    return this.communityService.searchCommunities(term, currentUser);
  }

  @Mutation(() => BaseResult, { name: 'joinCommunity' })
  @UseGuards(JwtAuthGuard)
  joinCommunity(
    @CurrentUser() currentUser: User,
    @Args('communityId') communityId: number,
  ) {
    return this.communityService.joinCommunity(communityId, currentUser.id);
  }

  @Mutation(() => BaseResult, { name: 'leaveCommunity' })
  @UseGuards(JwtAuthGuard)
  leaveCommunity(
    @CurrentUser() currentUser: User,
    @Args('communityId') communityId: number,
  ) {
    return this.communityService.leaveCommunity(communityId, currentUser.id);
  }

  @Query(() => [User], { name: 'getPendingCommunityMember' })
  @UseGuards(JwtAuthGuard)
  getPendingCommunityMember(
    @CurrentUser() currentUser: User,
    @Args('communityId') communityId: number,
  ) {
    return this.communityService.getPendingCommunityMembers(
      currentUser,
      communityId,
    );
  }

  @Mutation(() => BaseResult, { name: 'approveCommunityMember' })
  @UseGuards(JwtAuthGuard)
  approveCommunityMember(
    @CurrentUser() currentUser: User,
    @Args('communityId') communityId: number,
    @Args('userId') userId?: number,
  ) {
    return this.communityService.approveCommunityMember(
      currentUser,
      communityId,
      userId,
    );
  }

  @Mutation(() => BaseResult, { name: 'unpublishCommunity' })
  @UseGuards(JwtAuthGuard)
  unpublishCommunity(
    @CurrentUser() currentUser: User,
    @Args('communityId') communityId: number,
  ) {
    return this.communityService.unpublishCommunity(currentUser, communityId);
  }

  @Mutation(() => BaseResult, { name: 'publishCommunity' })
  @UseGuards(JwtAuthGuard)
  publishCommunity(
    @CurrentUser() currentUser: User,
    @Args('communityId') communityId: number,
  ) {
    return this.communityService.publishCommunity(currentUser, communityId);
  }

  @Mutation(() => CommunityEventsProps, { name: 'communityEvents' })
  @UseGuards(JwtAuthGuard)
  communityEvents(@Args('communityId') communityId: number) {
    return this.communityService.communityEvents(communityId);
  }
}
