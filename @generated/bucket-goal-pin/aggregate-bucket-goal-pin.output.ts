import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BucketGoalPinCountAggregate } from './bucket-goal-pin-count-aggregate.output';
import { BucketGoalPinAvgAggregate } from './bucket-goal-pin-avg-aggregate.output';
import { BucketGoalPinSumAggregate } from './bucket-goal-pin-sum-aggregate.output';
import { BucketGoalPinMinAggregate } from './bucket-goal-pin-min-aggregate.output';
import { BucketGoalPinMaxAggregate } from './bucket-goal-pin-max-aggregate.output';

@ObjectType()
export class AggregateBucketGoalPin {

    @Field(() => BucketGoalPinCountAggregate, {nullable:true})
    _count?: BucketGoalPinCountAggregate;

    @Field(() => BucketGoalPinAvgAggregate, {nullable:true})
    _avg?: BucketGoalPinAvgAggregate;

    @Field(() => BucketGoalPinSumAggregate, {nullable:true})
    _sum?: BucketGoalPinSumAggregate;

    @Field(() => BucketGoalPinMinAggregate, {nullable:true})
    _min?: BucketGoalPinMinAggregate;

    @Field(() => BucketGoalPinMaxAggregate, {nullable:true})
    _max?: BucketGoalPinMaxAggregate;
}
