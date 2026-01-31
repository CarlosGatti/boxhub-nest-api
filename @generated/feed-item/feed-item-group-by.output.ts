import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedItemType } from '../prisma/feed-item-type.enum';
import { FeedItemStatus } from '../prisma/feed-item-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { FeedItemCountAggregate } from './feed-item-count-aggregate.output';
import { FeedItemAvgAggregate } from './feed-item-avg-aggregate.output';
import { FeedItemSumAggregate } from './feed-item-sum-aggregate.output';
import { FeedItemMinAggregate } from './feed-item-min-aggregate.output';
import { FeedItemMaxAggregate } from './feed-item-max-aggregate.output';

@ObjectType()
export class FeedItemGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    sourceId!: number;

    @Field(() => FeedItemType, {nullable:false})
    type!: keyof typeof FeedItemType;

    @Field(() => FeedItemStatus, {nullable:false})
    status!: keyof typeof FeedItemStatus;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    canonicalUrl?: string;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => String, {nullable:true})
    contentText?: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metrics?: any;

    @Field(() => String, {nullable:false})
    contentHash!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FeedItemCountAggregate, {nullable:true})
    _count?: FeedItemCountAggregate;

    @Field(() => FeedItemAvgAggregate, {nullable:true})
    _avg?: FeedItemAvgAggregate;

    @Field(() => FeedItemSumAggregate, {nullable:true})
    _sum?: FeedItemSumAggregate;

    @Field(() => FeedItemMinAggregate, {nullable:true})
    _min?: FeedItemMinAggregate;

    @Field(() => FeedItemMaxAggregate, {nullable:true})
    _max?: FeedItemMaxAggregate;
}
