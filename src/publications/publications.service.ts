import { CommunityPrivacy, User } from '@prisma/client';

import { BaseResult } from '../models/base-error.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Publication } from '../../@generated/publication/publication.model';
import { PublicationCreateArgs } from './dto/publications.dto';
import { PaginationArgs } from '../shared/types/pagination.input';

@Injectable()
export class PublicationService {
  constructor(private prismaService: PrismaService) {}

  async createPublication(
    currentUser: User,
    data: PublicationCreateArgs,
  ): Promise<BaseResult> {
    if (data.communityId) {
      const community = await this.prismaService.community.findFirst({
        where: {
          id: data.communityId,
        },
      });

      // get membership of current user in community
      const membership = await this.prismaService.communityMember.findFirst({
        where: {
          communityId: data.communityId,
          userId: currentUser.id,
        },
      });

      // check if user has permission to post in community
      if (
        community?.postEnabledRole !== membership?.role &&
        community?.postEnabledRole !== CommunityPrivacy.ALL
      ) {
        return {
          success: false,
          message: 'Você não tem permissão para publicar nesta comunidade.',
        };
      }
    }

    const publication = await this.prismaService.publication.create({
      data: {
        description: data.description,
        published: true,
        visibility: data.visibility,
        user: {
          connect: {
            id: currentUser.id,
          },
        },
        post: {
          create: {
            author: {
              connect: {
                id: currentUser.id,
              },
            },
            content: data.description,
            visibility: data.visibility,
            published: data.published,
            images: {
              set: data.images || [],
            },
          },
        },
        // community
        ...(data.communityId && {
          community: {
            connect: {
              id: data.communityId,
            },
          },
        }),
        // event
        ...(data.event && {
          event: {
            connectOrCreate: {
              where: {
                id: data.eventId,
              },
              create: {
                title: data.event.title,
                content: data.event.content,
                startDate: data.event.startDate,
                endDate: data.event.endDate,
                visibility: data.visibility,
                banner: data.event.banner,
                ...(data.event.onlineDetails && {
                  onlineDetails: {
                    create: {
                      link: data.event.onlineDetails?.link || '',
                      platform: data.event.onlineDetails?.platform || '',
                      joinCode: data.event.onlineDetails?.joinCode || '',
                      joinDetails: data.event.onlineDetails?.joinDetails || '',
                    },
                  },
                }),
                ...(data.event.address && {
                  address: {
                    create: {
                      city: data.event.address?.city || '',
                      zipCode: data.event.address?.zipCode || '',
                      country: data.event.address?.country || '',
                      address: data.event.address?.address || '',
                    },
                  },
                }),
                owner: {
                  connect: {
                    id: currentUser.id,
                  },
                },
                ...(data.communityId && {
                  Community: {
                    connect: {
                      id: data.communityId,
                    },
                  },
                }),
              },
            },
          },
        }),
      },
    });

    return {
      success: !!publication,
      message: 'Publicação criada com sucesso.',
    };
  }

  async publicationById(id: number): Promise<Publication | BaseResult | null> {
    const result = await this.prismaService.publication.findFirst({
      where: {
        id,
        published: true,
      },
      include: {
        user: true,
        post: true,
        event: {
          include: {
            owner: true,
            members: true,
            address: true,
            onlineDetails: true,
          },
        },
        likes: {
          include: {
            user: true,
          },
        },
        comments: {
          include: {
            user: true,
          },
        },
        _count: {
          select: {
            likes: true,
            comments: true,
          },
        },
      },
    });

    if (!result) {
      return {
        success: false,
        message: 'Publicação não encontrada ou removida.',
      };
    }

    return result;
  }

  async updatePublication(id: number, data: PublicationCreateArgs) {
    return this.prismaService.publication.update({
      where: {
        id,
      },
      data: {
        description: data.description,
        post: {
          update: {
            content: data.description,
            published: true,
          },
        },
      },
    });
  }

  async unpublish(id: number) {
    const updated = await this.prismaService.publication.update({
      where: {
        id,
      },
      data: {
        published: false,
      },
    });

    return !!updated;
  }

  async publish(id: number) {
    const updated = await this.prismaService.publication.update({
      where: {
        id,
      },
      data: {
        published: true,
      },
    });

    return !!updated;
  }

  async likePublication(id: number, userId: number) {
    const isLiked = await this.prismaService.publication.count({
      where: {
        id,
        AND: {
          likes: {
            some: {
              userId,
            },
          },
        },
      },
    });

    if (isLiked) {
      return false;
    }

    const publication = await this.prismaService.publication.update({
      where: {
        id,
      },
      data: {
        likes: {
          create: {
            user: {
              connect: {
                id: userId,
              },
            },
          },
        },
      },
    });

    return !!publication;
  }

  async unlikePublication(id: number, userId: number) {
    const publication = await this.prismaService.publication.update({
      where: {
        id,
      },
      data: {
        likes: {
          deleteMany: {
            userId,
          },
        },
      },
    });

    return !!publication;
  }

  async commentPublication(
    publicationId: number,
    userId: number,
    content: string,
  ) {
    const comment = await this.prismaService.publication.update({
      where: {
        id: publicationId,
      },
      data: {
        comments: {
          create: {
            content,
            user: {
              connect: {
                id: userId,
              },
            },
          },
        },
      },
    });

    return !!comment;
  }

  async deleteComment(id: number, commentId: number) {
    const comment = await this.prismaService.publication.update({
      where: {
        id,
      },
      data: {
        comments: {
          deleteMany: {
            id: commentId,
          },
        },
      },
    });

    return !!comment;
  }

  async findCommentsByPublication(
    publicationId: number,
    pagination?: PaginationArgs,
  ) {
    return this.prismaService.publicationComment.findMany({
      where: {
        publicationId,
      },
      include: {
        user: true,
      },
      ...pagination,
    });
  }
}
