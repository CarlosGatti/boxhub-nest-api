import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ReviewCardPremiumRequestCountOrderByAggregateInput } from './review-card-premium-request-count-order-by-aggregate.input';
import { ReviewCardPremiumRequestAvgOrderByAggregateInput } from './review-card-premium-request-avg-order-by-aggregate.input';
import { ReviewCardPremiumRequestMaxOrderByAggregateInput } from './review-card-premium-request-max-order-by-aggregate.input';
import { ReviewCardPremiumRequestMinOrderByAggregateInput } from './review-card-premium-request-min-order-by-aggregate.input';
import { ReviewCardPremiumRequestSumOrderByAggregateInput } from './review-card-premium-request-sum-order-by-aggregate.input';

@InputType()
export class ReviewCardPremiumRequestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    projectId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    notes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ReviewCardPremiumRequestCountOrderByAggregateInput, {nullable:true})
    _count?: ReviewCardPremiumRequestCountOrderByAggregateInput;

    @Field(() => ReviewCardPremiumRequestAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReviewCardPremiumRequestAvgOrderByAggregateInput;

    @Field(() => ReviewCardPremiumRequestMaxOrderByAggregateInput, {nullable:true})
    _max?: ReviewCardPremiumRequestMaxOrderByAggregateInput;

    @Field(() => ReviewCardPremiumRequestMinOrderByAggregateInput, {nullable:true})
    _min?: ReviewCardPremiumRequestMinOrderByAggregateInput;

    @Field(() => ReviewCardPremiumRequestSumOrderByAggregateInput, {nullable:true})
    _sum?: ReviewCardPremiumRequestSumOrderByAggregateInput;
}
