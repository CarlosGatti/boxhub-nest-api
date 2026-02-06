import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedSourceNudgeCountAggregate } from './feed-source-nudge-count-aggregate.output';
import { FeedSourceNudgeAvgAggregate } from './feed-source-nudge-avg-aggregate.output';
import { FeedSourceNudgeSumAggregate } from './feed-source-nudge-sum-aggregate.output';
import { FeedSourceNudgeMinAggregate } from './feed-source-nudge-min-aggregate.output';
import { FeedSourceNudgeMaxAggregate } from './feed-source-nudge-max-aggregate.output';

@ObjectType()
export class FeedSourceNudgeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    sourceId!: number;

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FeedSourceNudgeCountAggregate, {nullable:true})
    _count?: FeedSourceNudgeCountAggregate;

    @Field(() => FeedSourceNudgeAvgAggregate, {nullable:true})
    _avg?: FeedSourceNudgeAvgAggregate;

    @Field(() => FeedSourceNudgeSumAggregate, {nullable:true})
    _sum?: FeedSourceNudgeSumAggregate;

    @Field(() => FeedSourceNudgeMinAggregate, {nullable:true})
    _min?: FeedSourceNudgeMinAggregate;

    @Field(() => FeedSourceNudgeMaxAggregate, {nullable:true})
    _max?: FeedSourceNudgeMaxAggregate;
}
