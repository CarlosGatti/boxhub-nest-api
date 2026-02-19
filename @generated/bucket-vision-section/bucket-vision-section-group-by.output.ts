import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketVisionSectionType } from '../prisma/bucket-vision-section-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketVisionSectionCountAggregate } from './bucket-vision-section-count-aggregate.output';
import { BucketVisionSectionAvgAggregate } from './bucket-vision-section-avg-aggregate.output';
import { BucketVisionSectionSumAggregate } from './bucket-vision-section-sum-aggregate.output';
import { BucketVisionSectionMinAggregate } from './bucket-vision-section-min-aggregate.output';
import { BucketVisionSectionMaxAggregate } from './bucket-vision-section-max-aggregate.output';

@ObjectType()
export class BucketVisionSectionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    boardId!: number;

    @Field(() => BucketVisionSectionType, {nullable:false})
    type!: keyof typeof BucketVisionSectionType;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    content?: any;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => BucketVisionSectionCountAggregate, {nullable:true})
    _count?: BucketVisionSectionCountAggregate;

    @Field(() => BucketVisionSectionAvgAggregate, {nullable:true})
    _avg?: BucketVisionSectionAvgAggregate;

    @Field(() => BucketVisionSectionSumAggregate, {nullable:true})
    _sum?: BucketVisionSectionSumAggregate;

    @Field(() => BucketVisionSectionMinAggregate, {nullable:true})
    _min?: BucketVisionSectionMinAggregate;

    @Field(() => BucketVisionSectionMaxAggregate, {nullable:true})
    _max?: BucketVisionSectionMaxAggregate;
}
