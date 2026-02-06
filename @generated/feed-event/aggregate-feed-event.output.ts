import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FeedEventCountAggregate } from './feed-event-count-aggregate.output';
import { FeedEventAvgAggregate } from './feed-event-avg-aggregate.output';
import { FeedEventSumAggregate } from './feed-event-sum-aggregate.output';
import { FeedEventMinAggregate } from './feed-event-min-aggregate.output';
import { FeedEventMaxAggregate } from './feed-event-max-aggregate.output';

@ObjectType()
export class AggregateFeedEvent {

    @Field(() => FeedEventCountAggregate, {nullable:true})
    _count?: FeedEventCountAggregate;

    @Field(() => FeedEventAvgAggregate, {nullable:true})
    _avg?: FeedEventAvgAggregate;

    @Field(() => FeedEventSumAggregate, {nullable:true})
    _sum?: FeedEventSumAggregate;

    @Field(() => FeedEventMinAggregate, {nullable:true})
    _min?: FeedEventMinAggregate;

    @Field(() => FeedEventMaxAggregate, {nullable:true})
    _max?: FeedEventMaxAggregate;
}
