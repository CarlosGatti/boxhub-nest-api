import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FeedCollectionCountAggregate } from './feed-collection-count-aggregate.output';
import { FeedCollectionAvgAggregate } from './feed-collection-avg-aggregate.output';
import { FeedCollectionSumAggregate } from './feed-collection-sum-aggregate.output';
import { FeedCollectionMinAggregate } from './feed-collection-min-aggregate.output';
import { FeedCollectionMaxAggregate } from './feed-collection-max-aggregate.output';

@ObjectType()
export class AggregateFeedCollection {

    @Field(() => FeedCollectionCountAggregate, {nullable:true})
    _count?: FeedCollectionCountAggregate;

    @Field(() => FeedCollectionAvgAggregate, {nullable:true})
    _avg?: FeedCollectionAvgAggregate;

    @Field(() => FeedCollectionSumAggregate, {nullable:true})
    _sum?: FeedCollectionSumAggregate;

    @Field(() => FeedCollectionMinAggregate, {nullable:true})
    _min?: FeedCollectionMinAggregate;

    @Field(() => FeedCollectionMaxAggregate, {nullable:true})
    _max?: FeedCollectionMaxAggregate;
}
