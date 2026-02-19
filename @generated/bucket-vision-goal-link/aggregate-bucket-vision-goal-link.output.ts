import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BucketVisionGoalLinkCountAggregate } from './bucket-vision-goal-link-count-aggregate.output';
import { BucketVisionGoalLinkAvgAggregate } from './bucket-vision-goal-link-avg-aggregate.output';
import { BucketVisionGoalLinkSumAggregate } from './bucket-vision-goal-link-sum-aggregate.output';
import { BucketVisionGoalLinkMinAggregate } from './bucket-vision-goal-link-min-aggregate.output';
import { BucketVisionGoalLinkMaxAggregate } from './bucket-vision-goal-link-max-aggregate.output';

@ObjectType()
export class AggregateBucketVisionGoalLink {

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
