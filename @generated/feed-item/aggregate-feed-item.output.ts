import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FeedItemCountAggregate } from './feed-item-count-aggregate.output';
import { FeedItemAvgAggregate } from './feed-item-avg-aggregate.output';
import { FeedItemSumAggregate } from './feed-item-sum-aggregate.output';
import { FeedItemMinAggregate } from './feed-item-min-aggregate.output';
import { FeedItemMaxAggregate } from './feed-item-max-aggregate.output';

@ObjectType()
export class AggregateFeedItem {

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
