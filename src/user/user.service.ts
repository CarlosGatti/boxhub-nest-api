import { Prisma, User } from '@prisma/client';
import { SearchDto, SearchUserDto, UsersToMap } from './dto/search.dto';

import { BaseResult } from '../models/base-error.dto';
import { CreateUserWithoutPassword } from './dto/createUser.dto';
import { Injectable } from '@nestjs/common';
import { MailService } from 'src/services/providers/mail/mail.service';
import { MeDto } from './dto/me.dto';
import { MyUserFollowings } from './dto/suggestedUser.dto';
import { PaginationArgs } from '../shared/types/pagination.input';
import { PrismaService } from '../prisma.service';
import { UserCreateInput } from '../../@generated/user/user-create.input';
import { UserUpdateInput } from '../../@generated/user/user-update.input';
import { generate } from 'generate-password';
import { hashSync } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private mailService: MailService,
    private readonly prismaService: PrismaService,
  ) {}

  async users(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  async user(args: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return this.prismaService.user.findFirst(args);
  }

  async me(user: User): Promise<MeDto> {
    const data = await this.prismaService.user.findUnique({
      where: { id: user.id },
      include: {
        adminCommunities: {
          include: {
            owner: true,
            members: true,
          },
          where: {
            published: true,
          },
        },
        memberCommunities: {
          include: {
            community: {
              include: {
                members: true,
              },
            },
            user: true,
          },
        },
        following: {
          include: {
            following: true,
          },
        },
        followers: {
          include: {
            follower: true,
          },
        },
        storageMemberships: {
          include: {
            storage: true,
          },
        },
      },
    });

    if (!data) {
      throw new Error('User not found');
    }

    return {
      ...data,
      peopleImFollowing: data.following.map((f) => f.following),
      peopleFollowingMe: data.followers.map((f) => f.follower),
    } as MeDto;
  }

  async createUser(data: UserCreateInput): Promise<User> {
    const user = await this.prismaService.user.create({
      data: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        nickname: data.nickname,
        password: hashSync(data.password, 10),
        profilePicture: data.profilePicture,
        public: data.public,
      },
    });

    const variables = {
      firstName: user.firstName,
      lastName: user.lastName,
      loginUrl: process.env.FRONTEND_URL_PROD + '/account/login',
      year: new Date().getFullYear(),
    };

    this.mailService.send({
      path: 'welcome',
      to: data.email,
      subject: 'Welcome to BoxHub',
      variables,
    });

    return user;
  }

  async createUserWithoutPassword(
    data: CreateUserWithoutPassword,
  ): Promise<BaseResult> {
    const password = generate({
      numbers: true,
      excludeSimilarCharacters: true,
    });

    const variables = {
      title: 'We Social - Sua senha',
      password,
    };

    try {
      const { id } = await this.prismaService.user.create({
        data: {
          ...data,
          password: hashSync(password, 10),
        },
      });

      if (id) {
        await this.mailService.send({
          path: 'send_password',
          to: data.email,
          subject: 'We Social - Sua senha',
          variables,
        });
      }
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return {
          message: 'Já existe uma conta com esse email.',
          success: false,
        };
      }

      return {
        message: 'Não foi possível criar usuário, tente novamente',
        success: false,
      };
    }

    return {
      message: 'Foi enviado e-mail para o usuário com a senha',
      success: true,
    };
  }

  async updateUser(
    currentUser: User,
    updateOneUserArgs: UserUpdateInput,
  ): Promise<User> {
    return this.prismaService.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        firstName: updateOneUserArgs.firstName,
        lastName: updateOneUserArgs.lastName,
        nickname: updateOneUserArgs.nickname,
        email: updateOneUserArgs.email,
        profilePicture: updateOneUserArgs.profilePicture,
        public: updateOneUserArgs.public,
        about: updateOneUserArgs.about,
        linkedinUrl: updateOneUserArgs.linkedinUrl,
        twitterUrl: updateOneUserArgs.twitterUrl,
        githubUrl: updateOneUserArgs.githubUrl,
      },
    });
  }

  async search(
    currentUser: User,
    pagination?: PaginationArgs,
    text?: string,
    id?: number,
  ): Promise<SearchDto> {
    const defaultWhereCondition = {
      public: true,
    };

    const fields: Prisma.UserFindManyArgs['select'] = {
      id: true,
      firstName: true,
      lastName: true,
      nickname: true,
      about: true,
      following: true,
      followers: true,
      linkedinUrl: true,
      githubUrl: true,
      twitterUrl: true,
      profilePicture: true,
      email: true,
      role: true,
      _count: true,
    };

    let results: Partial<Partial<UsersToMap>[]> = [];

    if (!text && !id) {
      results = await this.prismaService.user.findMany({
        select: fields,
        where: defaultWhereCondition,
        ...pagination,
      });
    }

    if (id && !text) {
      results = await this.prismaService.user.findMany({
        where: {
          ...defaultWhereCondition,
          id: {
            equals: id,
          },
        },
        select: fields,
      });
    }

    console.log(text);

    if (text && !id) {
      results = await this.prismaService.user.findMany({
        where: {
          ...defaultWhereCondition,
          OR: [
            {
              firstName: {
                contains: text,
                mode: 'insensitive',
              },
            },
            {
              lastName: {
                contains: text,
                mode: 'insensitive',
              },
            },
            {
              nickname: {
                contains: text,
                mode: 'insensitive',
              },
            },
          ],
        },
        ...pagination,
      });
    }

    console.log(results);

    return {
      users: await this.mapUsersForSearch(
        currentUser,
        results as Partial<UsersToMap[]>,
      ),
      count: results.length,
      ...(pagination
        ? { ...pagination }
        : {
            take: 10,
            skip: 0,
          }),
    };
  }

  async followUser(userId: number, currentUserId: number): Promise<boolean> {
    const relationExist = await this.prismaService.follows.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    if (relationExist) {
      return false;
    }

    const updated = await this.prismaService.follows.create({
      data: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    return !!updated;
  }

  async unfollowUser(userId: number, currentUserId: number): Promise<boolean> {
    const updated = await this.prismaService.follows.deleteMany({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    return !!updated;
  }

  private async isFollowing(
    followerId: number,
    followingId: number,
  ): Promise<boolean> {
    const following = await this.prismaService.follows.findFirst({
      where: {
        followerId: followerId,
        followingId: followingId,
      },
    });

    return !!following;
  }

  //TODO - remove type any in the future
  private async mapUsersForSearch(
    currentUser: User,
    users: Partial<UsersToMap[]>,
  ): Promise<any> {
    return users
      .filter((user) => user?.id !== currentUser.id)
      .map(async (user) => {
        const isFollowing: boolean | undefined = await this.isFollowing(
          currentUser.id,
          user!.id,
        );

        return {
          id: user?.id,
          name: `${user?.firstName} ${user?.lastName}`,
          nickname: user?.nickname,
          profilePicture: user?.profilePicture,
          about: user?.about,
          peopleImFollowingCount: user?.following?.length,
          peopleFollowingMeCount: user?.followers?.length,
          githubUrl: user?.githubUrl,
          linkedinUrl: user?.linkedinUrl,
          twitterUrl: user?.twitterUrl,
          isFollowing: isFollowing,
        };
      });
  }

  async suggestedUsers(currentUser: User) {
    const myUser = await this.prismaService.user.findUnique({
      where: {
        id: currentUser.id,
      },
      select: {
        following: {
          include: {
            following: {
              include: {
                following: {
                  include: {
                    following: true,
                  },
                },
              },
            },
          },
          take: 30,
        },
      },
    });

    return this.findFollowingUsers(myUser);
  }

  private findFollowingUsers(myUser: MyUserFollowings) {
    const myFollowingUsers: User[] = [];
    const followingFromMyFollowingUsers: User[] = [];

    myUser?.following.map((item) => {
      myFollowingUsers.push(item.following);

      item.following.following.map(({ following }) => {
        if (!myFollowingUsers.includes(following))
          followingFromMyFollowingUsers.push(following);
      });
    });

    const myFollowingUsersId = myFollowingUsers.map((item) => item.id);

    const mySuggestedUsers = followingFromMyFollowingUsers.filter(
      ({ id }) => !myFollowingUsersId.includes(id),
    );

    return mySuggestedUsers;
  }
}
