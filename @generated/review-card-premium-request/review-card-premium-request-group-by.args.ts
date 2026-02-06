import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestWhereInput } from './review-card-premium-request-where.input';
import { Type } from 'class-transformer';
import { ReviewCardPremiumRequestOrderByWithAggregationInput } from './review-card-premium-request-order-by-with-aggregation.input';
import { ReviewCardPremiumRequestScalarFieldEnum } from './review-card-premium-request-scalar-field.enum';
import { ReviewCardPremiumRequestScalarWhereWithAggregatesInput } from './review-card-premium-request-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardPremiumRequestCountAggregateInput } from './review-card-premium-request-count-aggregate.input';
import { ReviewCardPremiumRequestAvgAggregateInput } from './review-card-premium-request-avg-aggregate.input';
import { ReviewCardPremiumRequestSumAggregateInput } from './review-card-premium-request-sum-aggregate.input';
import { ReviewCardPremiumRequestMinAggregateInput } from './review-card-premium-request-min-aggregate.input';
import { ReviewCardPremiumRequestMaxAggregateInput } from './review-card-premium-request-max-aggregate.input';

@ArgsType()
export class ReviewCardPremiumRequestGroupByArgs {

    @Field(() => ReviewCardPremiumRequestWhereInput, {nullable:true})
    @Type(() => ReviewCardPremiumRequestWhereInput)
    where?: ReviewCardPremiumRequestWhereInput;

    @Field(() => [ReviewCardPremiumRequestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReviewCardPremiumRequestOrderByWithAggregationInput>;

    @Field(() => [ReviewCardPremiumRequestScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReviewCardPremiumRequestScalarFieldEnum>;

    @Field(() => ReviewCardPremiumRequestScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReviewCardPremiumRequestScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewCardPremiumRequestCountAggregateInput, {nullable:true})
    _count?: ReviewCardPremiumRequestCountAggregateInput;

    @Field(() => ReviewCardPremiumRequestAvgAggregateInput, {nullable:true})
    _avg?: ReviewCardPremiumRequestAvgAggregateInput;

    @Field(() => ReviewCardPremiumRequestSumAggregateInput, {nullable:true})
    _sum?: ReviewCardPremiumRequestSumAggregateInput;

    @Field(() => ReviewCardPremiumRequestMinAggregateInput, {nullable:true})
    _min?: ReviewCardPremiumRequestMinAggregateInput;

    @Field(() => ReviewCardPremiumRequestMaxAggregateInput, {nullable:true})
    _max?: ReviewCardPremiumRequestMaxAggregateInput;
}
