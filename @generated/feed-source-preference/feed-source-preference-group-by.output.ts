import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedSourcePreferenceCountAggregate } from './feed-source-preference-count-aggregate.output';
import { FeedSourcePreferenceAvgAggregate } from './feed-source-preference-avg-aggregate.output';
import { FeedSourcePreferenceSumAggregate } from './feed-source-preference-sum-aggregate.output';
import { FeedSourcePreferenceMinAggregate } from './feed-source-preference-min-aggregate.output';
import { FeedSourcePreferenceMaxAggregate } from './feed-source-preference-max-aggregate.output';

@ObjectType()
export class FeedSourcePreferenceGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    sourceId!: number;

    @Field(() => Boolean, {nullable:false})
    notifyOnNew!: boolean;

    @Field(() => Boolean, {nullable:false})
    isMuted!: boolean;

    @Field(() => Date, {nullable:true})
    mutedUntil?: Date | string;

    @Field(() => Int, {nullable:false})
    consecutiveSkips!: number;

    @Field(() => Date, {nullable:true})
    lastInteractedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
