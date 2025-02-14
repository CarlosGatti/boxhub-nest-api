import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  // async createGroup(data: Prisma.CommunityGroupCreateArgs) {
  //   return await this.prisma.communityGroup.create(data);
  // }

  // async getGroup(groupId: number) {
  //   return await this.prisma.communityGroup.findUnique({
  //     where: {
  //       id: groupId,
  //     },
  //   });
  // }

  // async getCommunitiesGroupsIAmMember(userId: number) {
  //   return await this.prisma.communityGroup.findMany({
  //     where: {
  //       CommunityGroupMember: {
  //         some: {
  //           user_id: userId,
  //         },
  //       },
  //     },
  //   });
  // }

  // async getCommunitiesGroupsIAmAdmin(userId: number) {
  //   return await this.prisma.communityGroup.findMany({
  //     where: {
  //       CommunityGroupMember: {
  //         some: {
  //           AND: {
  //             user_id: userId,
  //             admin: true,
  //           },
  //         },
  //       },
  //     },
  //   });
  // }

  // async searchCommunitiesGroups(searchString: string) {
  //   return await this.prisma.communityGroup.findMany({
  //     where: {
  //       name: {
  //         contains: searchString,
  //       },
  //     },
  //   });
  // }

  // async addGroupMember(group: any, userId: number, admin?: boolean) {
  //   return await this.prisma.communityGroupMember.create({
  //     data: {
  //       admin,
  //       user_id: userId,
  //       group_id: group.id,
  //       member_can_invite: admin ? true : group.member_can_invite,
  //       member_can_post: admin ? true : group.member_can_post,
  //     },
  //   });
  // }

  // async deleteGroup(data: Prisma.CommunityGroupDeleteArgs): Promise<boolean> {
  //   const result = await this.prisma.communityGroup.delete(data);
  //   return !!result;
  // }
}
