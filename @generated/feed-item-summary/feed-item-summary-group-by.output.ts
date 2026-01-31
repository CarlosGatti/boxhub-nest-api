import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { FeedItemSummaryCountAggregate } from './feed-item-summary-count-aggregate.output';
import { FeedItemSummaryAvgAggregate } from './feed-item-summary-avg-aggregate.output';
import { FeedItemSummarySumAggregate } from './feed-item-summary-sum-aggregate.output';
import { FeedItemSummaryMinAggregate } from './feed-item-summary-min-aggregate.output';
import { FeedItemSummaryMaxAggregate } from './feed-item-summary-max-aggregate.output';

@ObjectType()
export class FeedItemSummaryGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    itemId!: number;

    @Field(() => String, {nullable:true})
    summary?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FeedItemSummaryCountAggregate, {nullable:true})
    _count?: FeedItemSummaryCountAggregate;

    @Field(() => FeedItemSummaryAvgAggregate, {nullable:true})
    _avg?: FeedItemSummaryAvgAggregate;

    @Field(() => FeedItemSummarySumAggregate, {nullable:true})
    _sum?: FeedItemSummarySumAggregate;

    @Field(() => FeedItemSummaryMinAggregate, {nullable:true})
    _min?: FeedItemSummaryMinAggregate;

    @Field(() => FeedItemSummaryMaxAggregate, {nullable:true})
    _max?: FeedItemSummaryMaxAggregate;
}
