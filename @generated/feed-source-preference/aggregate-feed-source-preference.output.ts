import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FeedSourcePreferenceCountAggregate } from './feed-source-preference-count-aggregate.output';
import { FeedSourcePreferenceAvgAggregate } from './feed-source-preference-avg-aggregate.output';
import { FeedSourcePreferenceSumAggregate } from './feed-source-preference-sum-aggregate.output';
import { FeedSourcePreferenceMinAggregate } from './feed-source-preference-min-aggregate.output';
import { FeedSourcePreferenceMaxAggregate } from './feed-source-preference-max-aggregate.output';

@ObjectType()
export class AggregateFeedSourcePreference {

    @Field(() => FeedSourcePreferenceCountAggregate, {nullable:true})
    _count?: FeedSourcePreferenceCountAggregate;

    @Field(() => FeedSourcePreferenceAvgAggregate, {nullable:true})
    _avg?: FeedSourcePreferenceAvgAggregate;

    @Field(() => FeedSourcePreferenceSumAggregate, {nullable:true})
    _sum?: FeedSourcePreferenceSumAggregate;

    @Field(() => FeedSourcePreferenceMinAggregate, {nullable:true})
    _min?: FeedSourcePreferenceMinAggregate;

    @Field(() => FeedSourcePreferenceMaxAggregate, {nullable:true})
    _max?: FeedSourcePreferenceMaxAggregate;
}
