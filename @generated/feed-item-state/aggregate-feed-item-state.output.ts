import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FeedItemStateCountAggregate } from './feed-item-state-count-aggregate.output';
import { FeedItemStateAvgAggregate } from './feed-item-state-avg-aggregate.output';
import { FeedItemStateSumAggregate } from './feed-item-state-sum-aggregate.output';
import { FeedItemStateMinAggregate } from './feed-item-state-min-aggregate.output';
import { FeedItemStateMaxAggregate } from './feed-item-state-max-aggregate.output';

@ObjectType()
export class AggregateFeedItemState {

    @Field(() => FeedItemStateCountAggregate, {nullable:true})
    _count?: FeedItemStateCountAggregate;

    @Field(() => FeedItemStateAvgAggregate, {nullable:true})
    _avg?: FeedItemStateAvgAggregate;

    @Field(() => FeedItemStateSumAggregate, {nullable:true})
    _sum?: FeedItemStateSumAggregate;

    @Field(() => FeedItemStateMinAggregate, {nullable:true})
    _min?: FeedItemStateMinAggregate;

    @Field(() => FeedItemStateMaxAggregate, {nullable:true})
    _max?: FeedItemStateMaxAggregate;
}
