import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketVisionItemType } from '../prisma/bucket-vision-item-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketVisionItemCountAggregate } from './bucket-vision-item-count-aggregate.output';
import { BucketVisionItemAvgAggregate } from './bucket-vision-item-avg-aggregate.output';
import { BucketVisionItemSumAggregate } from './bucket-vision-item-sum-aggregate.output';
import { BucketVisionItemMinAggregate } from './bucket-vision-item-min-aggregate.output';
import { BucketVisionItemMaxAggregate } from './bucket-vision-item-max-aggregate.output';

@ObjectType()
export class BucketVisionItemGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    boardId!: number;

    @Field(() => BucketVisionItemType, {nullable:false})
    type!: keyof typeof BucketVisionItemType;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    layout?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => BucketVisionItemCountAggregate, {nullable:true})
    _count?: BucketVisionItemCountAggregate;

    @Field(() => BucketVisionItemAvgAggregate, {nullable:true})
    _avg?: BucketVisionItemAvgAggregate;

    @Field(() => BucketVisionItemSumAggregate, {nullable:true})
    _sum?: BucketVisionItemSumAggregate;

    @Field(() => BucketVisionItemMinAggregate, {nullable:true})
    _min?: BucketVisionItemMinAggregate;

    @Field(() => BucketVisionItemMaxAggregate, {nullable:true})
    _max?: BucketVisionItemMaxAggregate;
}
