import {
  Community,
  CommunityMember,
  MembershipStatus,
  User,
  Visibility,
} from '@prisma/client';
import {
  CreateCommunityInput,
  UpdateCommunityInput,
} from './dto/community.dto';

import { BaseResult } from '../models/base-error.dto';
import { CommunityDto } from './dto/search.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CommunityService {
  constructor(private prisma: PrismaService) {}

  createCommunity(currentUser: User, data: CreateCommunityInput) {
    return this.prisma.community.create({
      data: {
        ...data,
        owner: {
          connect: {
            id: currentUser.id,
          },
        },
        ...(data.plan && {
          plan: {
            create: {
              ...data.plan,
            },
          },
        }),
      },
    });
  }

  async updateCommunity(currentUser: User, data: UpdateCommunityInput) {
    if (!(await this.isUserCommunityAdmin(currentUser, data.id))) {
      return {
        success: false,
        message: 'Você não tem permissão para editar esta comunidade.',
      };
    }

    const updated = await this.prisma.community.update({
      where: {
        id: data.id,
      },
      data: {
        ...(data.banner && { banner: data.banner }),
        ...(data.description && { description: data.description }),
        ...(data.name && { name: data.name }),
        ...(data.visibility && { visibility: data.visibility }),
        ...(data.postEnabledRole && { postEnabledRole: data.postEnabledRole }),
        ...(data.inviteEnabledRole && {
          inviteEnabledRole: data.inviteEnabledRole,
        }),
        ...(data.plan && {
          plan: {
            update: {
              ...data.plan,
            },
          },
        }),
      },
    });

    return {
      success: !!updated,
      message: 'Comunidade atualizada com sucesso.',
    };
  }

  getCommunityById(id: number) {
    return this.prisma.community.findUnique({
      where: {
        id,
      },
      include: {
        events: {
          select: {
            members: true,
            owner: true,
          },
        },
        owner: true,
        facets: true,
        members: {
          include: {
            user: true,
          },
        },
        groups: true,
        parentCommunity: true,
        plan: true,
        publications: true,
        _count: {
          select: {
            members: true,
            events: true,
            publications: true,
            groups: true,
          },
        },
      },
    });
  }

  async searchCommunities(
    searchString: string,
    currentUser: User,
  ): Promise<CommunityDto[]> {
    if (!searchString) {
      const suggestedCommunities = await this.suggestedCommunities(currentUser);

      return this.mapCommunityForSearch(currentUser, suggestedCommunities);
    }

    const searchResults = await this.searchCommunitiesByName(
      currentUser,
      searchString,
    );

    return this.mapCommunityForSearch(currentUser, searchResults);
  }

  async joinCommunity(
    communityId: number,
    userId: number,
  ): Promise<BaseResult> {
    const isUserAlreadyAMember = await this.prisma.communityMember.count({
      where: {
        communityId,
        userId,
      },
    });

    if (isUserAlreadyAMember) {
      return {
        success: false,
        message: 'Você já é membro desta comunidade.',
      };
    }

    const isUserCommunityAdmin = await this.prisma.community.count({
      where: {
        id: communityId,
        ownerId: userId,
      },
    });

    if (isUserCommunityAdmin) {
      return {
        success: false,
        message: 'Você não pode se juntar a uma comunidade como administrador.',
      };
    }

    const community = await this.prisma.community.findUnique({
      where: {
        id: communityId,
      },
      select: {
        visibility: true,
      },
    });

    const membership = await this.prisma.communityMember.create({
      data: {
        community: {
          connect: {
            id: communityId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
        status:
          community?.visibility === Visibility.PUBLIC
            ? MembershipStatus.ACCEPTED
            : MembershipStatus.PENDING,
        joinedAt: new Date(),
      },
    });

    return {
      success: !!membership,
      message: 'Você se juntou a esta comunidade.',
    };
  }

  async leaveCommunity(
    communityId: number,
    userId: number,
  ): Promise<BaseResult> {
    const isUserAMember = await this.prisma.communityMember.findMany({
      where: {
        communityId,
        userId,
      },
    });

    if (isUserAMember.length === 0) {
      return {
        success: false,
        message: 'Você não é membro desta comunidade.',
      };
    }

    const isUserOwner = await this.prisma.community.findFirst({
      where: {
        ownerId: userId,
        id: communityId,
      },
    });

    if (isUserOwner) {
      return {
        success: false,
        message:
          'O proprietário da comunidade não tem permissão para sair dela.',
      };
    }

    const membership = await this.prisma.communityMember.delete({
      where: {
        id: isUserAMember[0].id,
      },
    });

    return {
      success: !!membership,
      message: 'Você saiu desta comunidade.',
    };
  }

  async getPendingCommunityMembers(currentUser: User, communityId: number) {
    if (!(await this.isUserCommunityAdmin(currentUser, communityId))) {
      return [];
    }

    const communityMember = await this.prisma.communityMember.findMany({
      where: {
        communityId,
        status: MembershipStatus.PENDING,
      },
      include: {
        user: true,
      },
    });

    return communityMember.map(({ user }) => user);
  }

  async approveCommunityMember(
    currentUser: User,
    communityId: number,
    userId?: number,
  ): Promise<BaseResult> {
    if (!(await this.isUserCommunityAdmin(currentUser, communityId))) {
      return {
        success: false,
        message: 'Você não tem permissão para aprovar membros.',
      };
    }

    const membership = await this.prisma.communityMember.updateMany({
      where: {
        communityId,
        userId,
      },
      data: {
        status: MembershipStatus.ACCEPTED,
      },
    });

    return {
      success: !!membership,
      message: 'Membro(s) aprovado(s) com sucesso.',
    };
  }

  async unpublishCommunity(
    currentUser: User,
    communityId: number,
  ): Promise<BaseResult> {
    if (!(await this.isUserCommunityAdmin(currentUser, communityId))) {
      return {
        success: false,
        message: 'Você não tem permissão para despublicar esta comunidade.',
      };
    }

    const community = await this.prisma.community.update({
      where: {
        id: communityId,
      },
      data: {
        published: false,
      },
    });

    return {
      success: !!community,
      message: 'Comunidade despublicada com sucesso.',
    };
  }

  async publishCommunity(
    currentUser: User,
    communityId: number,
  ): Promise<BaseResult> {
    if (!(await this.isUserCommunityAdmin(currentUser, communityId))) {
      return {
        success: false,
        message: 'Você não tem permissão para publicar esta comunidade.',
      };
    }

    const community = await this.prisma.community.update({
      where: {
        id: communityId,
      },
      data: {
        published: true,
      },
    });

    return {
      success: !!community,
      message: 'Comunidade publicada com sucesso.',
    };
  }

  async communityEvents(communityId: number) {
    const communityEvents = await this.prisma.community.findFirst({
      where: {
        id: communityId,
      },
      select: {
        events: true,
      },
    });

    return communityEvents;
  }

  private async isUserCommunityAdmin(
    currentUser: User,
    communityId: number,
  ): Promise<boolean> {
    const isUserCommunityAdmin = await this.prisma.community.count({
      where: {
        id: communityId,
        ownerId: currentUser.id,
      },
    });

    return !!isUserCommunityAdmin;
  }

  private async suggestedCommunities(currentUser: User) {
    return this.prisma.community.findMany({
      where: {
        AND: [
          {
            members: {
              some: {
                user: {
                  followers: {
                    some: {
                      followerId: {
                        equals: currentUser.id,
                      },
                    },
                  },
                },
              },
            },
          },
          {
            members: {
              none: {
                userId: currentUser.id,
              },
            },
          },
          {
            ownerId: {
              not: {
                equals: currentUser.id,
              },
            },
          },
        ],
      },
      include: {
        members: true,
      },
    });
  }

  private async mapCommunityForSearch(
    currentUser: User,
    communities: (Community & {
      members: CommunityMember[];
    })[],
  ): Promise<CommunityDto[]> {
    return communities.map((community) => ({
      ...community,
      isMember: community.members.some(
        (member) => member.userId === currentUser.id,
      ),
      count: community.members.length,
    }));
  }

  private async searchCommunitiesByName(currentUser: User, search: string) {
    const communities = await this.prisma.community.findMany({
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
        owner: {
          isNot: currentUser,
        },
      },
      include: {
        members: true,
        owner: true,
      },
    });

    return communities;
  }
}
