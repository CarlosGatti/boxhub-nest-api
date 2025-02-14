import {
  createUnionType,
  Field,
  InputType,
  Int,
  ObjectType,
} from '@nestjs/graphql';
import { BaseResult } from '../../../models/base-error.dto';

import { PublicationLike } from '../../../../@generated/publication-like/publication-like.model';

@ObjectType()
export class UserTimelineDto {
  @Field(() => Int, { nullable: true })
  id: number | null;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  nickname?: string | null;

  @Field(() => String, { nullable: true })
  profilePicture: string | null;
}

@ObjectType()
export class CommunityTimelineDto {
  @Field(() => Int, { nullable: true })
  id?: number | null;

  @Field(() => String, { nullable: true })
  name?: string;
}

@ObjectType()
export class PublicationCommentsDto {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  text: string;

  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @Field(() => UserTimelineDto)
  user: UserTimelineDto;
}

@ObjectType()
export class PublicationLikesDto {
  @Field(() => Int)
  user_id: number;
}

@ObjectType()
export class EventTimelineDto {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  description: string | null;

  @Field(() => String, { nullable: true })
  banner?: string | null;

  @Field(() => Date, { nullable: true })
  startDate?: Date;

  @Field(() => Date, { nullable: true })
  endDate?: Date;

  @Field(() => String)
  location?: string;

  @Field(() => String)
  title?: string;

  @Field(() => UserTimelineDto)
  user?: UserTimelineDto;
}

@ObjectType()
export class PostTimelineDto {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  text: string | null;

  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @Field(() => [String])
  images: string[];
}

@ObjectType()
export class Timeline {
  @Field(() => Int)
  id: number;

  @Field(() => UserTimelineDto)
  user: UserTimelineDto;

  @Field(() => CommunityTimelineDto)
  community?: CommunityTimelineDto | null;

  @Field(() => PostTimelineDto)
  post: PostTimelineDto;

  @Field(() => EventTimelineDto, { nullable: true })
  event?: EventTimelineDto | null;

  @Field(() => [PublicationCommentsDto])
  comments: PublicationCommentsDto[];

  @Field(() => [PublicationLike])
  likes: PublicationLike[];

  @Field(() => Boolean)
  liked: boolean;

  @Field(() => Int)
  likeCount: number;

  @Field(() => Int)
  commentCount: number;
}

@ObjectType()
export class TimelineDto {
  @Field(() => [Timeline], { nullable: true })
  publications?: Timeline[] | null;

  @Field(() => Int)
  count: number;

  @Field(() => Int)
  skip: number;

  @Field(() => Int)
  take: number;
}

@InputType()
export class TimelineInputArgs {
  @Field(() => Int, { defaultValue: 10 })
  take: number;

  @Field(() => Int, { defaultValue: 0 })
  skip: number;
}

@InputType()
export class TimelineFilterInput {
  @Field(() => String, { nullable: true })
  search?: string | null;

  @Field(() => Int, { nullable: true })
  communityId?: number | null;

  @Field(() => Int, { nullable: true })
  groupId?: number | null;
}

export const TimelineResult = createUnionType({
  name: 'TimelineResult',
  resolveType: (value) => {
    if ('message' in value) {
      return BaseResult;
    }
    return TimelineDto;
  },
  types: () => [TimelineDto, BaseResult] as const,
});
