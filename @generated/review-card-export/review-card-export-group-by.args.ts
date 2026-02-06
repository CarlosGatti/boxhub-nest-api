import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardExportWhereInput } from './review-card-export-where.input';
import { Type } from 'class-transformer';
import { ReviewCardExportOrderByWithAggregationInput } from './review-card-export-order-by-with-aggregation.input';
import { ReviewCardExportScalarFieldEnum } from './review-card-export-scalar-field.enum';
import { ReviewCardExportScalarWhereWithAggregatesInput } from './review-card-export-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardExportCountAggregateInput } from './review-card-export-count-aggregate.input';
import { ReviewCardExportAvgAggregateInput } from './review-card-export-avg-aggregate.input';
import { ReviewCardExportSumAggregateInput } from './review-card-export-sum-aggregate.input';
import { ReviewCardExportMinAggregateInput } from './review-card-export-min-aggregate.input';
import { ReviewCardExportMaxAggregateInput } from './review-card-export-max-aggregate.input';

@ArgsType()
export class ReviewCardExportGroupByArgs {

    @Field(() => ReviewCardExportWhereInput, {nullable:true})
    @Type(() => ReviewCardExportWhereInput)
    where?: ReviewCardExportWhereInput;

    @Field(() => [ReviewCardExportOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReviewCardExportOrderByWithAggregationInput>;

    @Field(() => [ReviewCardExportScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReviewCardExportScalarFieldEnum>;

    @Field(() => ReviewCardExportScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReviewCardExportScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewCardExportCountAggregateInput, {nullable:true})
    _count?: ReviewCardExportCountAggregateInput;

    @Field(() => ReviewCardExportAvgAggregateInput, {nullable:true})
    _avg?: ReviewCardExportAvgAggregateInput;

    @Field(() => ReviewCardExportSumAggregateInput, {nullable:true})
    _sum?: ReviewCardExportSumAggregateInput;

    @Field(() => ReviewCardExportMinAggregateInput, {nullable:true})
    _min?: ReviewCardExportMinAggregateInput;

    @Field(() => ReviewCardExportMaxAggregateInput, {nullable:true})
    _max?: ReviewCardExportMaxAggregateInput;
}
