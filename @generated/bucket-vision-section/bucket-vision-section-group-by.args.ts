import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionSectionWhereInput } from './bucket-vision-section-where.input';
import { Type } from 'class-transformer';
import { BucketVisionSectionOrderByWithAggregationInput } from './bucket-vision-section-order-by-with-aggregation.input';
import { BucketVisionSectionScalarFieldEnum } from './bucket-vision-section-scalar-field.enum';
import { BucketVisionSectionScalarWhereWithAggregatesInput } from './bucket-vision-section-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BucketVisionSectionCountAggregateInput } from './bucket-vision-section-count-aggregate.input';
import { BucketVisionSectionAvgAggregateInput } from './bucket-vision-section-avg-aggregate.input';
import { BucketVisionSectionSumAggregateInput } from './bucket-vision-section-sum-aggregate.input';
import { BucketVisionSectionMinAggregateInput } from './bucket-vision-section-min-aggregate.input';
import { BucketVisionSectionMaxAggregateInput } from './bucket-vision-section-max-aggregate.input';

@ArgsType()
export class BucketVisionSectionGroupByArgs {

    @Field(() => BucketVisionSectionWhereInput, {nullable:true})
    @Type(() => BucketVisionSectionWhereInput)
    where?: BucketVisionSectionWhereInput;

    @Field(() => [BucketVisionSectionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BucketVisionSectionOrderByWithAggregationInput>;

    @Field(() => [BucketVisionSectionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BucketVisionSectionScalarFieldEnum>;

    @Field(() => BucketVisionSectionScalarWhereWithAggregatesInput, {nullable:true})
    having?: BucketVisionSectionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BucketVisionSectionCountAggregateInput, {nullable:true})
    _count?: BucketVisionSectionCountAggregateInput;

    @Field(() => BucketVisionSectionAvgAggregateInput, {nullable:true})
    _avg?: BucketVisionSectionAvgAggregateInput;

    @Field(() => BucketVisionSectionSumAggregateInput, {nullable:true})
    _sum?: BucketVisionSectionSumAggregateInput;

    @Field(() => BucketVisionSectionMinAggregateInput, {nullable:true})
    _min?: BucketVisionSectionMinAggregateInput;

    @Field(() => BucketVisionSectionMaxAggregateInput, {nullable:true})
    _max?: BucketVisionSectionMaxAggregateInput;
}
