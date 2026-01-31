import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FeedItemSummaryCountAggregate } from './feed-item-summary-count-aggregate.output';
import { FeedItemSummaryAvgAggregate } from './feed-item-summary-avg-aggregate.output';
import { FeedItemSummarySumAggregate } from './feed-item-summary-sum-aggregate.output';
import { FeedItemSummaryMinAggregate } from './feed-item-summary-min-aggregate.output';
import { FeedItemSummaryMaxAggregate } from './feed-item-summary-max-aggregate.output';

@ObjectType()
export class AggregateFeedItemSummary {

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
