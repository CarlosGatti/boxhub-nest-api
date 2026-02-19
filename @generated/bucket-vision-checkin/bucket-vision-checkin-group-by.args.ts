import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionCheckinWhereInput } from './bucket-vision-checkin-where.input';
import { Type } from 'class-transformer';
import { BucketVisionCheckinOrderByWithAggregationInput } from './bucket-vision-checkin-order-by-with-aggregation.input';
import { BucketVisionCheckinScalarFieldEnum } from './bucket-vision-checkin-scalar-field.enum';
import { BucketVisionCheckinScalarWhereWithAggregatesInput } from './bucket-vision-checkin-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BucketVisionCheckinCountAggregateInput } from './bucket-vision-checkin-count-aggregate.input';
import { BucketVisionCheckinAvgAggregateInput } from './bucket-vision-checkin-avg-aggregate.input';
import { BucketVisionCheckinSumAggregateInput } from './bucket-vision-checkin-sum-aggregate.input';
import { BucketVisionCheckinMinAggregateInput } from './bucket-vision-checkin-min-aggregate.input';
import { BucketVisionCheckinMaxAggregateInput } from './bucket-vision-checkin-max-aggregate.input';

@ArgsType()
export class BucketVisionCheckinGroupByArgs {

    @Field(() => BucketVisionCheckinWhereInput, {nullable:true})
    @Type(() => BucketVisionCheckinWhereInput)
    where?: BucketVisionCheckinWhereInput;

    @Field(() => [BucketVisionCheckinOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BucketVisionCheckinOrderByWithAggregationInput>;

    @Field(() => [BucketVisionCheckinScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BucketVisionCheckinScalarFieldEnum>;

    @Field(() => BucketVisionCheckinScalarWhereWithAggregatesInput, {nullable:true})
    having?: BucketVisionCheckinScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BucketVisionCheckinCountAggregateInput, {nullable:true})
    _count?: BucketVisionCheckinCountAggregateInput;

    @Field(() => BucketVisionCheckinAvgAggregateInput, {nullable:true})
    _avg?: BucketVisionCheckinAvgAggregateInput;

    @Field(() => BucketVisionCheckinSumAggregateInput, {nullable:true})
    _sum?: BucketVisionCheckinSumAggregateInput;

    @Field(() => BucketVisionCheckinMinAggregateInput, {nullable:true})
    _min?: BucketVisionCheckinMinAggregateInput;

    @Field(() => BucketVisionCheckinMaxAggregateInput, {nullable:true})
    _max?: BucketVisionCheckinMaxAggregateInput;
}
