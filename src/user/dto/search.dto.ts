import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Follows, User } from '@prisma/client';

import { PaginationArgs } from '../../shared/types/pagination.input';

@ObjectType()
export class SearchUserDto {
  @Field(() => Int, { nullable: false })
  id?: number;

  @Field(() => String, { nullable: false })
  name?: string;

  @Field(() => String, { nullable: true })
  nickname?: string | null;

  @Field(() => String, { nullable: true })
  profilePicture?: string | null;

  @Field(() => String, { nullable: true })
  about?: string | null;

  @Field(() => String, { nullable: true })
  linkedinUrl?: string | null;

  @Field(() => String, { nullable: true })
  twitterUrl?: string | null;

  @Field(() => String, { nullable: true })
  githubUrl?: string | null;

  @Field(() => Int, { nullable: true })
  peopleImFollowingCount?: number;

  @Field(() => Int, { nullable: true })
  peopleFollowingMeCount?: number;

  @Field(() => Boolean, { nullable: true })
  isFollowing?: boolean | undefined;
}

@ObjectType()
export class SearchDto extends PaginationArgs {
  @Field(() => [SearchUserDto], { nullable: true })
  users: SearchUserDto[];

  @Field(() => Int)
  count: number;
}

export interface UsersToMap extends User {
  following: Follows[];
  followers: Follows[];
}
