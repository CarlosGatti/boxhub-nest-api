import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketGoalType } from '../prisma/bucket-goal-type.enum';
import { BucketGoalStatus } from '../prisma/bucket-goal-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketGoalCountAggregate } from './bucket-goal-count-aggregate.output';
import { BucketGoalAvgAggregate } from './bucket-goal-avg-aggregate.output';
import { BucketGoalSumAggregate } from './bucket-goal-sum-aggregate.output';
import { BucketGoalMinAggregate } from './bucket-goal-min-aggregate.output';
import { BucketGoalMaxAggregate } from './bucket-goal-max-aggregate.output';

@ObjectType()
export class BucketGoalGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => BucketGoalType, {nullable:false})
    type!: keyof typeof BucketGoalType;

    @Field(() => BucketGoalStatus, {nullable:false})
    status!: keyof typeof BucketGoalStatus;

    @Field(() => Int, {nullable:false})
    priority!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    details?: any;

    @Field(() => Int, {nullable:false})
    detailsSchemaVersion!: number;

    @Field(() => String, {nullable:true})
    coverUrl?: string;

    @Field(() => [String], {nullable:true})
    tags?: Array<string>;

    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
