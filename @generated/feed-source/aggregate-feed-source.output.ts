import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FeedSourceCountAggregate } from './feed-source-count-aggregate.output';
import { FeedSourceAvgAggregate } from './feed-source-avg-aggregate.output';
import { FeedSourceSumAggregate } from './feed-source-sum-aggregate.output';
import { FeedSourceMinAggregate } from './feed-source-min-aggregate.output';
import { FeedSourceMaxAggregate } from './feed-source-max-aggregate.output';

@ObjectType()
export class AggregateFeedSource {

    @Field(() => FeedSourceCountAggregate, {nullable:true})
    _count?: FeedSourceCountAggregate;

    @Field(() => FeedSourceAvgAggregate, {nullable:true})
    _avg?: FeedSourceAvgAggregate;

    @Field(() => FeedSourceSumAggregate, {nullable:true})
    _sum?: FeedSourceSumAggregate;

    @Field(() => FeedSourceMinAggregate, {nullable:true})
    _min?: FeedSourceMinAggregate;

    @Field(() => FeedSourceMaxAggregate, {nullable:true})
    _max?: FeedSourceMaxAggregate;
}
