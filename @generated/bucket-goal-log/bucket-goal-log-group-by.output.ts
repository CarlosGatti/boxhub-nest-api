import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketGoalLogCountAggregate } from './bucket-goal-log-count-aggregate.output';
import { BucketGoalLogAvgAggregate } from './bucket-goal-log-avg-aggregate.output';
import { BucketGoalLogSumAggregate } from './bucket-goal-log-sum-aggregate.output';
import { BucketGoalLogMinAggregate } from './bucket-goal-log-min-aggregate.output';
import { BucketGoalLogMaxAggregate } from './bucket-goal-log-max-aggregate.output';

@ObjectType()
export class BucketGoalLogGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    goalId!: number;

    @Field(() => String, {nullable:false})
    note!: string;

    @Field(() => Date, {nullable:false})
    happenedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => BucketGoalLogCountAggregate, {nullable:true})
    _count?: BucketGoalLogCountAggregate;

    @Field(() => BucketGoalLogAvgAggregate, {nullable:true})
    _avg?: BucketGoalLogAvgAggregate;

    @Field(() => BucketGoalLogSumAggregate, {nullable:true})
    _sum?: BucketGoalLogSumAggregate;

    @Field(() => BucketGoalLogMinAggregate, {nullable:true})
    _min?: BucketGoalLogMinAggregate;

    @Field(() => BucketGoalLogMaxAggregate, {nullable:true})
    _max?: BucketGoalLogMaxAggregate;
}
