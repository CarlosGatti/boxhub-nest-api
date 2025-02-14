import {
  Timeline,
  TimelineDto,
  TimelineFilterInput,
  TimelineInputArgs,
} from './dto/timeline.dto';

import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';
import JSONCache from 'redis-json';
import { Prisma, User } from '@prisma/client';

import { BaseResult } from '../../models/base-error.dto';

const DEFAULT_TTL = 60 * 60;

@Injectable()
export class TimelineService {
  constructor(
    private prismaService: PrismaService,
    @InjectRedis() private readonly redis: Redis,
  ) {}

  async timeline(
    currentUser: User,
    pagination: TimelineInputArgs,
    forceUpdate?: boolean,
    filter: TimelineFilterInput = {},
  ): Promise<TimelineDto | BaseResult> {
    const jsonCache = new JSONCache<TimelineDto>(this.redis, {
      stringifier: {
        Date: (val: Date) => val.toISOString(),
      },
      parser: {
        Date: (str: string) => new Date(str),
      },
    });

    if (!forceUpdate) {
      const cachedTimeline = await jsonCache.get(`timeline:${currentUser.id}`);

      // check if cache is expired
      const ttl = await this.redis.ttl(`timeline:${currentUser.id}`);

      if (cachedTimeline && ttl > 0) {
        Logger.log(`Timeline cache hit - ttl: ${ttl}`, 'TimelineService');
        return {
          ...cachedTimeline,
          publications: cachedTimeline.publications?.slice(
            pagination.skip,
            pagination.skip + pagination?.take,
          ),
        };
      }
    }

    Logger.log(
      `Timeline cache miss, updating cache with ttl: ${DEFAULT_TTL}`,
      'TimelineService',
    );

    const where: Prisma.PublicationFindManyArgs['where'] = {};

    // If have communityId in filter, returns community timeline
    if (filter?.communityId) {
      const isCommunityMember =
        await this.prismaService.communityMember.findFirst({
          where: {
            communityId: filter.communityId,
            userId: currentUser.id,
          },
        });

      if (!isCommunityMember) {
        const isCommunityAdmin = await this.prismaService.community.findFirst({
          where: {
            ownerId: currentUser.id,
          },
        });

        if (!isCommunityAdmin) {
          // If user isnt community member or admin, return error
          return {
            message: 'Usuário não participa desta comunidade',
            success: false,
          };
        }
      }

      where.communityId = filter.communityId;
      where.published = true;
    }

    // If doenst have communityId in filter, not returns publications with communityId
    else {
      where.OR = [
        {
          user: {
            id: currentUser.id,
          },
        },
        {
          user: {
            followers: {
              some: {
                followerId: currentUser.id,
              },
            },
          },
        },
      ];
      where.communityId = null;
      where.published = true;
    }

    // fetch data from db
    const data = await this.prismaService.publication.findMany({
      where,
      include: {
        community: true,
        user: true,
        likes: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
        comments: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
          take: 3,
        },
        post: {
          include: {
            author: true,
          },
        },
        event: {
          include: {
            owner: true,
            address: true,
            onlineDetails: true,
            members: true,
          },
        },
        _count: {
          select: {
            comments: true,
            likes: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      ...pagination,
    });

    const timeline = {
      publications: data.map<Timeline | undefined | null>(
        ({ id, user, likes, post, event, comments, _count, community }) => {
          if (!user) return null;

          const { id: userId, firstName, lastName, profilePicture } = user;

          const liked = likes.some(({ userId }) => userId === currentUser.id);

          return {
            id,
            user: {
              id: userId,
              name: `${firstName} ${lastName}`,
              nickname: user.nickname,
              profilePicture,
            },
            post: {
              id: post.id,
              text: post.content,
              images: post.images,
              createdAt: post.createdAt,
            },
            event: event
              ? {
                  id: event?.id,
                  description: event?.content,
                  title: event?.title,
                  banner: event?.banner,
                  startDate: event?.startDate,
                  endDate: event?.endDate,
                  user: {
                    id: event?.ownerId,
                    name: `${event?.owner?.firstName} ${event?.owner?.lastName}`,
                    nickname: event?.owner?.nickname,
                    profilePicture: event?.owner?.profilePicture || '',
                  },
                }
              : null,
            community: {
              id: community?.id,
              name: community?.name,
            },
            liked,
            likes,
            comments: comments.map(
              ({
                content,
                createdAt,
                id: comment_id,
                user: {
                  firstName,
                  lastName,
                  nickname,
                  profilePicture,
                  id: userId,
                },
              }) => ({
                id: comment_id,
                text: content,
                createdAt,
                user: {
                  id: userId,
                  name: `${firstName} ${lastName}`,
                  nickname: nickname,
                  profilePicture,
                },
              }),
            ),
            likeCount: _count.likes,
            commentCount: _count.comments,
          };
        },
      ),
      count: data.length,
      skip: pagination.skip,
      take: pagination.take,
    } as TimelineDto;

    try {
      Logger.log(
        `Setting timeline cache with ttl: ${DEFAULT_TTL}`,
        'TimelineService',
      );

      await jsonCache.set(`timeline:${currentUser.id}`, timeline, {
        expire: DEFAULT_TTL,
      });
    } catch (error) {
      Logger.error(error, 'TimelineService');
    }

    return timeline;
  }
}
