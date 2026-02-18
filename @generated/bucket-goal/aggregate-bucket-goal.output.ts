import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BucketGoalCountAggregate } from './bucket-goal-count-aggregate.output';
import { BucketGoalAvgAggregate } from './bucket-goal-avg-aggregate.output';
import { BucketGoalSumAggregate } from './bucket-goal-sum-aggregate.output';
import { BucketGoalMinAggregate } from './bucket-goal-min-aggregate.output';
import { BucketGoalMaxAggregate } from './bucket-goal-max-aggregate.output';

@ObjectType()
export class AggregateBucketGoal {

    @Field(() => BucketGoalCountAggregate, {nullable:true})
    _count?: BucketGoalCountAggregate;

    @Field(() => BucketGoalAvgAggregate, {nullable:true})
    _avg?: BucketGoalAvgAggregate;

    @Field(() => BucketGoalSumAggregate, {nullable:true})
    _sum?: BucketGoalSumAggregate;

    @Field(() => BucketGoalMinAggregate, {nullable:true})
    _min?: BucketGoalMinAggregate;

    @Field(() => BucketGoalMaxAggregate, {nullable:true})
    _max?: BucketGoalMaxAggregate;
}
