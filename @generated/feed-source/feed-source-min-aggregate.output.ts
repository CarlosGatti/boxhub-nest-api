import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedSourceType } from '../prisma/feed-source-type.enum';

@ObjectType()
export class FeedSourceMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    collectionId?: number;

    @Field(() => FeedSourceType, {nullable:true})
    type?: keyof typeof FeedSourceType;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Int, {nullable:true})
    fetchEveryMin?: number;

    @Field(() => Date, {nullable:true})
    lastFetchedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    failureCount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
