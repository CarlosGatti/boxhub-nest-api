import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FeedProfileCountAggregate } from './feed-profile-count-aggregate.output';
import { FeedProfileAvgAggregate } from './feed-profile-avg-aggregate.output';
import { FeedProfileSumAggregate } from './feed-profile-sum-aggregate.output';
import { FeedProfileMinAggregate } from './feed-profile-min-aggregate.output';
import { FeedProfileMaxAggregate } from './feed-profile-max-aggregate.output';

@ObjectType()
export class AggregateFeedProfile {

    @Field(() => FeedProfileCountAggregate, {nullable:true})
    _count?: FeedProfileCountAggregate;

    @Field(() => FeedProfileAvgAggregate, {nullable:true})
    _avg?: FeedProfileAvgAggregate;

    @Field(() => FeedProfileSumAggregate, {nullable:true})
    _sum?: FeedProfileSumAggregate;

    @Field(() => FeedProfileMinAggregate, {nullable:true})
    _min?: FeedProfileMinAggregate;

    @Field(() => FeedProfileMaxAggregate, {nullable:true})
    _max?: FeedProfileMaxAggregate;
}
