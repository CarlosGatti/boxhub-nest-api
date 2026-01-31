import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedItemType } from '../prisma/feed-item-type.enum';
import { FeedItemStatus } from '../prisma/feed-item-status.enum';

@ObjectType()
export class FeedItemMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    sourceId?: number;

    @Field(() => FeedItemType, {nullable:true})
    type?: keyof typeof FeedItemType;

    @Field(() => FeedItemStatus, {nullable:true})
    status?: keyof typeof FeedItemStatus;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    canonicalUrl?: string;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => String, {nullable:true})
    contentText?: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    contentHash?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
