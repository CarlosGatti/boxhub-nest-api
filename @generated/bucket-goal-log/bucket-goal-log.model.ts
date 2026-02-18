import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketGoal } from '../bucket-goal/bucket-goal.model';
import { BucketGoalMedia } from '../bucket-goal-media/bucket-goal-media.model';
import { BucketGoalLogCount } from './bucket-goal-log-count.output';

@ObjectType()
export class BucketGoalLog {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    goalId!: number;

    @Field(() => String, {nullable:false})
    note!: string;

    @Field(() => Date, {nullable:false})
    happenedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => BucketGoal, {nullable:false})
    goal?: BucketGoal;

    @Field(() => [BucketGoalMedia], {nullable:true})
    media?: Array<BucketGoalMedia>;

    @Field(() => BucketGoalLogCount, {nullable:false})
    _count?: BucketGoalLogCount;
}
