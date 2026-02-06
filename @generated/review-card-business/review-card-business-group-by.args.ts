import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardBusinessWhereInput } from './review-card-business-where.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessOrderByWithAggregationInput } from './review-card-business-order-by-with-aggregation.input';
import { ReviewCardBusinessScalarFieldEnum } from './review-card-business-scalar-field.enum';
import { ReviewCardBusinessScalarWhereWithAggregatesInput } from './review-card-business-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardBusinessCountAggregateInput } from './review-card-business-count-aggregate.input';
import { ReviewCardBusinessAvgAggregateInput } from './review-card-business-avg-aggregate.input';
import { ReviewCardBusinessSumAggregateInput } from './review-card-business-sum-aggregate.input';
import { ReviewCardBusinessMinAggregateInput } from './review-card-business-min-aggregate.input';
import { ReviewCardBusinessMaxAggregateInput } from './review-card-business-max-aggregate.input';

@ArgsType()
export class ReviewCardBusinessGroupByArgs {

    @Field(() => ReviewCardBusinessWhereInput, {nullable:true})
    @Type(() => ReviewCardBusinessWhereInput)
    where?: ReviewCardBusinessWhereInput;

    @Field(() => [ReviewCardBusinessOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReviewCardBusinessOrderByWithAggregationInput>;

    @Field(() => [ReviewCardBusinessScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReviewCardBusinessScalarFieldEnum>;

    @Field(() => ReviewCardBusinessScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReviewCardBusinessScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewCardBusinessCountAggregateInput, {nullable:true})
    _count?: ReviewCardBusinessCountAggregateInput;

    @Field(() => ReviewCardBusinessAvgAggregateInput, {nullable:true})
    _avg?: ReviewCardBusinessAvgAggregateInput;

    @Field(() => ReviewCardBusinessSumAggregateInput, {nullable:true})
    _sum?: ReviewCardBusinessSumAggregateInput;

    @Field(() => ReviewCardBusinessMinAggregateInput, {nullable:true})
    _min?: ReviewCardBusinessMinAggregateInput;

    @Field(() => ReviewCardBusinessMaxAggregateInput, {nullable:true})
    _max?: ReviewCardBusinessMaxAggregateInput;
}
