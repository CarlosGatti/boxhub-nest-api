import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { Community } from '../community/community.model';
import { Event } from '../event/event.model';
import { Post } from '../post/post.model';
import { User } from '../user/user.model';
import { PublicationComment } from '../publication-comment/publication-comment.model';
import { PublicationLike } from '../publication-like/publication-like.model';
import { PublicationCount } from './publication-count.output';

@ObjectType()
export class Publication {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    published!: boolean;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => Int, {nullable:false})
    postId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Visibility, {nullable:false,defaultValue:'PUBLIC'})
    visibility!: keyof typeof Visibility;

    @Field(() => Int, {nullable:true})
    eventId!: number | null;

    @Field(() => Int, {nullable:true})
    communityId!: number | null;

    @Field(() => Community, {nullable:true})
    community?: Community | null;

    @Field(() => Event, {nullable:true})
    event?: Event | null;

    @Field(() => Post, {nullable:false})
    post?: Post;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => [PublicationComment], {nullable:true})
    comments?: Array<PublicationComment>;

    @Field(() => [PublicationLike], {nullable:true})
    likes?: Array<PublicationLike>;

    @Field(() => PublicationCount, {nullable:false})
    _count?: PublicationCount;
}
