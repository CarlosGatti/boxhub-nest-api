import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketVisionGoalLinkCountAggregate } from './bucket-vision-goal-link-count-aggregate.output';
import { BucketVisionGoalLinkAvgAggregate } from './bucket-vision-goal-link-avg-aggregate.output';
import { BucketVisionGoalLinkSumAggregate } from './bucket-vision-goal-link-sum-aggregate.output';
import { BucketVisionGoalLinkMinAggregate } from './bucket-vision-goal-link-min-aggregate.output';
import { BucketVisionGoalLinkMaxAggregate } from './bucket-vision-goal-link-max-aggregate.output';

@ObjectType()
export class BucketVisionGoalLinkGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    boardId!: number;

    @Field(() => Int, {nullable:false})
    goalId!: number;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => BucketVisionGoalLinkCountAggregate, {nullable:true})
    _count?: BucketVisionGoalLinkCountAggregate;

    @Field(() => BucketVisionGoalLinkAvgAggregate, {nullable:true})
    _avg?: BucketVisionGoalLinkAvgAggregate;

    @Field(() => BucketVisionGoalLinkSumAggregate, {nullable:true})
    _sum?: BucketVisionGoalLinkSumAggregate;

    @Field(() => BucketVisionGoalLinkMinAggregate, {nullable:true})
    _min?: BucketVisionGoalLinkMinAggregate;

    @Field(() => BucketVisionGoalLinkMaxAggregate, {nullable:true})
    _max?: BucketVisionGoalLinkMaxAggregate;
}
