import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { FeedCollection } from '../feed-collection/feed-collection.model';
import { FeedProfileCount } from './feed-profile-count.output';

@ObjectType()
export class FeedProfile {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:true})
    timezone!: string | null;

    @Field(() => String, {nullable:true})
    language!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [FeedCollection], {nullable:true})
    collections?: Array<FeedCollection>;

    @Field(() => FeedProfileCount, {nullable:false})
    _count?: FeedProfileCount;
}
