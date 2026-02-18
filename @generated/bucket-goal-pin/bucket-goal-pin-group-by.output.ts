import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { BucketPinSource } from '../prisma/bucket-pin-source.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketGoalPinCountAggregate } from './bucket-goal-pin-count-aggregate.output';
import { BucketGoalPinAvgAggregate } from './bucket-goal-pin-avg-aggregate.output';
import { BucketGoalPinSumAggregate } from './bucket-goal-pin-sum-aggregate.output';
import { BucketGoalPinMinAggregate } from './bucket-goal-pin-min-aggregate.output';
import { BucketGoalPinMaxAggregate } from './bucket-goal-pin-max-aggregate.output';

@ObjectType()
export class BucketGoalPinGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    goalId!: number;

    @Field(() => Float, {nullable:false})
    lat!: number;

    @Field(() => Float, {nullable:false})
    lng!: number;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => BucketPinSource, {nullable:false})
    source!: keyof typeof BucketPinSource;

    @Field(() => String, {nullable:true})
    placeId?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    raw?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
