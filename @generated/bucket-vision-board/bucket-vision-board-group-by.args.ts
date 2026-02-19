import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardOrderByWithAggregationInput } from './bucket-vision-board-order-by-with-aggregation.input';
import { BucketVisionBoardScalarFieldEnum } from './bucket-vision-board-scalar-field.enum';
import { BucketVisionBoardScalarWhereWithAggregatesInput } from './bucket-vision-board-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BucketVisionBoardCountAggregateInput } from './bucket-vision-board-count-aggregate.input';
import { BucketVisionBoardAvgAggregateInput } from './bucket-vision-board-avg-aggregate.input';
import { BucketVisionBoardSumAggregateInput } from './bucket-vision-board-sum-aggregate.input';
import { BucketVisionBoardMinAggregateInput } from './bucket-vision-board-min-aggregate.input';
import { BucketVisionBoardMaxAggregateInput } from './bucket-vision-board-max-aggregate.input';

@ArgsType()
export class BucketVisionBoardGroupByArgs {

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereInput)
    where?: BucketVisionBoardWhereInput;

    @Field(() => [BucketVisionBoardOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BucketVisionBoardOrderByWithAggregationInput>;

    @Field(() => [BucketVisionBoardScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BucketVisionBoardScalarFieldEnum>;

    @Field(() => BucketVisionBoardScalarWhereWithAggregatesInput, {nullable:true})
    having?: BucketVisionBoardScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BucketVisionBoardCountAggregateInput, {nullable:true})
    _count?: BucketVisionBoardCountAggregateInput;

    @Field(() => BucketVisionBoardAvgAggregateInput, {nullable:true})
    _avg?: BucketVisionBoardAvgAggregateInput;

    @Field(() => BucketVisionBoardSumAggregateInput, {nullable:true})
    _sum?: BucketVisionBoardSumAggregateInput;

    @Field(() => BucketVisionBoardMinAggregateInput, {nullable:true})
    _min?: BucketVisionBoardMinAggregateInput;

    @Field(() => BucketVisionBoardMaxAggregateInput, {nullable:true})
    _max?: BucketVisionBoardMaxAggregateInput;
}
