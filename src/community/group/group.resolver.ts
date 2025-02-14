import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CurrentUser } from '../../user/current-user.decorator';
import { GroupService } from './group.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';

@Resolver()
export class GroupResolver {
  constructor(private readonly groupService: GroupService) {}

  // @Mutation(() => CommunityGroup, { name: 'createGroup' })
  // @UseGuards(JwtAuthGuard)
  // async createGroup(
  //   @CurrentUser() currentUser: User,
  //   @Args() data: CreateCommunityGroupProps,
  // ) {
  //   const group = await this.groupService.createGroup({
  //     data: {
  //       ...data.data,
  //       User: {
  //         connect: {
  //           id: currentUser.id,
  //         },
  //       },
  //       Community: {
  //         connect: {
  //           id: data.community_id,
  //         },
  //       },
  //     },
  //   });

  //   await this.groupService.addGroupMember(group, currentUser.id, true);

  //   return group;
  // }

  // @Query(() => CommunityGroup, { name: 'communityGroup' })
  // @UseGuards(JwtAuthGuard)
  // async communityGroup(@Args() data: GetCommunityGroupProps) {
  //   return await this.groupService.getGroup(data.groupId);
  // }

  // @Query(() => [CommunityGroup], { name: 'communitiesGroupsIAmMember' })
  // @UseGuards(JwtAuthGuard)
  // async communitiesGroupsIAmMember(@CurrentUser() currentUser: User) {
  //   return await this.groupService.getCommunitiesGroupsIAmMember(
  //     currentUser.id,
  //   );
  // }

  // @Query(() => [CommunityGroup], { name: 'communitiesGroupIAmAdmin' })
  // @UseGuards(JwtAuthGuard)
  // async communitiesGroupIAmAdmin(@CurrentUser() currentUser: User) {
  //   return await this.groupService.getCommunitiesGroupsIAmAdmin(currentUser.id);
  // }

  // @Query(() => [CommunityGroup], { name: 'searchCommunitiesGroups' })
  // @UseGuards(JwtAuthGuard)
  // async searchCommunities(@Args() data: SearchCommunitiesGroupsProps) {
  //   return await this.groupService.searchCommunitiesGroups(data.searchString);
  // }

  // @Mutation(() => CommunityGroupMember, { name: 'joinCommunityGroup' })
  // @UseGuards(JwtAuthGuard)
  // async joinCommunityGroup(
  //   @CurrentUser() currentUser: User,
  //   @Args() data: AddCommunityGroupMemberProps,
  // ) {
  //   const communityGroup = await this.groupService.getGroup(data.groupId);

  //   if (communityGroup) {
  //     return await this.groupService.addGroupMember(
  //       communityGroup,
  //       currentUser.id,
  //     );
  //   }
  // }

  // @Mutation(() => Boolean, { name: 'deleteCommunityGroup' })
  // @UseGuards(JwtAuthGuard)
  // async deleteCommunityGroup(
  //   @CurrentUser() currentUser: User,
  //   @Args() data: DeleteCommunityGroupProps,
  // ) {
  //   const group = await this.groupService.getGroup(data.groupId);

  //   if (group?.owner_id === currentUser.id) {
  //     return await this.groupService.deleteGroup({
  //       where: {
  //         id: data.groupId,
  //       },
  //     });
  //   }

  //   return false;
  // }
}
