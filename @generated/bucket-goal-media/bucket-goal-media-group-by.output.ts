import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketMediaType } from '../prisma/bucket-media-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketGoalMediaCountAggregate } from './bucket-goal-media-count-aggregate.output';
import { BucketGoalMediaAvgAggregate } from './bucket-goal-media-avg-aggregate.output';
import { BucketGoalMediaSumAggregate } from './bucket-goal-media-sum-aggregate.output';
import { BucketGoalMediaMinAggregate } from './bucket-goal-media-min-aggregate.output';
import { BucketGoalMediaMaxAggregate } from './bucket-goal-media-max-aggregate.output';

@ObjectType()
export class BucketGoalMediaGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    goalId?: number;

    @Field(() => Int, {nullable:true})
    logId?: number;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => BucketMediaType, {nullable:false})
    type!: keyof typeof BucketMediaType;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => BucketGoalMediaCountAggregate, {nullable:true})
    _count?: BucketGoalMediaCountAggregate;

    @Field(() => BucketGoalMediaAvgAggregate, {nullable:true})
    _avg?: BucketGoalMediaAvgAggregate;

    @Field(() => BucketGoalMediaSumAggregate, {nullable:true})
    _sum?: BucketGoalMediaSumAggregate;

    @Field(() => BucketGoalMediaMinAggregate, {nullable:true})
    _min?: BucketGoalMediaMinAggregate;

    @Field(() => BucketGoalMediaMaxAggregate, {nullable:true})
    _max?: BucketGoalMediaMaxAggregate;
}
