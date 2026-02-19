import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionItemWhereInput } from './bucket-vision-item-where.input';
import { Type } from 'class-transformer';
import { BucketVisionItemOrderByWithAggregationInput } from './bucket-vision-item-order-by-with-aggregation.input';
import { BucketVisionItemScalarFieldEnum } from './bucket-vision-item-scalar-field.enum';
import { BucketVisionItemScalarWhereWithAggregatesInput } from './bucket-vision-item-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BucketVisionItemCountAggregateInput } from './bucket-vision-item-count-aggregate.input';
import { BucketVisionItemAvgAggregateInput } from './bucket-vision-item-avg-aggregate.input';
import { BucketVisionItemSumAggregateInput } from './bucket-vision-item-sum-aggregate.input';
import { BucketVisionItemMinAggregateInput } from './bucket-vision-item-min-aggregate.input';
import { BucketVisionItemMaxAggregateInput } from './bucket-vision-item-max-aggregate.input';

@ArgsType()
export class BucketVisionItemGroupByArgs {

    @Field(() => BucketVisionItemWhereInput, {nullable:true})
    @Type(() => BucketVisionItemWhereInput)
    where?: BucketVisionItemWhereInput;

    @Field(() => [BucketVisionItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BucketVisionItemOrderByWithAggregationInput>;

    @Field(() => [BucketVisionItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BucketVisionItemScalarFieldEnum>;

    @Field(() => BucketVisionItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: BucketVisionItemScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BucketVisionItemCountAggregateInput, {nullable:true})
    _count?: BucketVisionItemCountAggregateInput;

    @Field(() => BucketVisionItemAvgAggregateInput, {nullable:true})
    _avg?: BucketVisionItemAvgAggregateInput;

    @Field(() => BucketVisionItemSumAggregateInput, {nullable:true})
    _sum?: BucketVisionItemSumAggregateInput;

    @Field(() => BucketVisionItemMinAggregateInput, {nullable:true})
    _min?: BucketVisionItemMinAggregateInput;

    @Field(() => BucketVisionItemMaxAggregateInput, {nullable:true})
    _max?: BucketVisionItemMaxAggregateInput;
}
