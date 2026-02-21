import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketShareWhereInput } from './bucket-share-where.input';
import { Type } from 'class-transformer';
import { BucketShareOrderByWithAggregationInput } from './bucket-share-order-by-with-aggregation.input';
import { BucketShareScalarFieldEnum } from './bucket-share-scalar-field.enum';
import { BucketShareScalarWhereWithAggregatesInput } from './bucket-share-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BucketShareCountAggregateInput } from './bucket-share-count-aggregate.input';
import { BucketShareAvgAggregateInput } from './bucket-share-avg-aggregate.input';
import { BucketShareSumAggregateInput } from './bucket-share-sum-aggregate.input';
import { BucketShareMinAggregateInput } from './bucket-share-min-aggregate.input';
import { BucketShareMaxAggregateInput } from './bucket-share-max-aggregate.input';

@ArgsType()
export class BucketShareGroupByArgs {

    @Field(() => BucketShareWhereInput, {nullable:true})
    @Type(() => BucketShareWhereInput)
    where?: BucketShareWhereInput;

    @Field(() => [BucketShareOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BucketShareOrderByWithAggregationInput>;

    @Field(() => [BucketShareScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BucketShareScalarFieldEnum>;

    @Field(() => BucketShareScalarWhereWithAggregatesInput, {nullable:true})
    having?: BucketShareScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BucketShareCountAggregateInput, {nullable:true})
    _count?: BucketShareCountAggregateInput;

    @Field(() => BucketShareAvgAggregateInput, {nullable:true})
    _avg?: BucketShareAvgAggregateInput;

    @Field(() => BucketShareSumAggregateInput, {nullable:true})
    _sum?: BucketShareSumAggregateInput;

    @Field(() => BucketShareMinAggregateInput, {nullable:true})
    _min?: BucketShareMinAggregateInput;

    @Field(() => BucketShareMaxAggregateInput, {nullable:true})
    _max?: BucketShareMaxAggregateInput;
}
