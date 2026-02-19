import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketVisionCheckinCountAggregate } from './bucket-vision-checkin-count-aggregate.output';
import { BucketVisionCheckinAvgAggregate } from './bucket-vision-checkin-avg-aggregate.output';
import { BucketVisionCheckinSumAggregate } from './bucket-vision-checkin-sum-aggregate.output';
import { BucketVisionCheckinMinAggregate } from './bucket-vision-checkin-min-aggregate.output';
import { BucketVisionCheckinMaxAggregate } from './bucket-vision-checkin-max-aggregate.output';

@ObjectType()
export class BucketVisionCheckinGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    boardId!: number;

    @Field(() => String, {nullable:true})
    kind?: string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    mood?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    snapshot?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => BucketVisionCheckinCountAggregate, {nullable:true})
    _count?: BucketVisionCheckinCountAggregate;

    @Field(() => BucketVisionCheckinAvgAggregate, {nullable:true})
    _avg?: BucketVisionCheckinAvgAggregate;

    @Field(() => BucketVisionCheckinSumAggregate, {nullable:true})
    _sum?: BucketVisionCheckinSumAggregate;

    @Field(() => BucketVisionCheckinMinAggregate, {nullable:true})
    _min?: BucketVisionCheckinMinAggregate;

    @Field(() => BucketVisionCheckinMaxAggregate, {nullable:true})
    _max?: BucketVisionCheckinMaxAggregate;
}
