import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketVisionPeriodType } from '../prisma/bucket-vision-period-type.enum';
import { BucketVisionLayoutMode } from '../prisma/bucket-vision-layout-mode.enum';
import { BucketVisionBoardCountAggregate } from './bucket-vision-board-count-aggregate.output';
import { BucketVisionBoardAvgAggregate } from './bucket-vision-board-avg-aggregate.output';
import { BucketVisionBoardSumAggregate } from './bucket-vision-board-sum-aggregate.output';
import { BucketVisionBoardMinAggregate } from './bucket-vision-board-min-aggregate.output';
import { BucketVisionBoardMaxAggregate } from './bucket-vision-board-max-aggregate.output';

@ObjectType()
export class BucketVisionBoardGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => BucketVisionPeriodType, {nullable:false})
    periodType!: keyof typeof BucketVisionPeriodType;

    @Field(() => Int, {nullable:true})
    year?: number;

    @Field(() => String, {nullable:true})
    periodKey?: string;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => String, {nullable:true})
    theme?: string;

    @Field(() => BucketVisionLayoutMode, {nullable:false})
    layoutMode!: keyof typeof BucketVisionLayoutMode;

    @Field(() => String, {nullable:true})
    coverUrl?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => BucketVisionBoardCountAggregate, {nullable:true})
    _count?: BucketVisionBoardCountAggregate;

    @Field(() => BucketVisionBoardAvgAggregate, {nullable:true})
    _avg?: BucketVisionBoardAvgAggregate;

    @Field(() => BucketVisionBoardSumAggregate, {nullable:true})
    _sum?: BucketVisionBoardSumAggregate;

    @Field(() => BucketVisionBoardMinAggregate, {nullable:true})
    _min?: BucketVisionBoardMinAggregate;

    @Field(() => BucketVisionBoardMaxAggregate, {nullable:true})
    _max?: BucketVisionBoardMaxAggregate;
}
