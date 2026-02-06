import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ReviewCardBusinessCountOrderByAggregateInput } from './review-card-business-count-order-by-aggregate.input';
import { ReviewCardBusinessAvgOrderByAggregateInput } from './review-card-business-avg-order-by-aggregate.input';
import { ReviewCardBusinessMaxOrderByAggregateInput } from './review-card-business-max-order-by-aggregate.input';
import { ReviewCardBusinessMinOrderByAggregateInput } from './review-card-business-min-order-by-aggregate.input';
import { ReviewCardBusinessSumOrderByAggregateInput } from './review-card-business-sum-order-by-aggregate.input';

@InputType()
export class ReviewCardBusinessOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    placeId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    googleReviewUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    website?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ReviewCardBusinessCountOrderByAggregateInput, {nullable:true})
    _count?: ReviewCardBusinessCountOrderByAggregateInput;

    @Field(() => ReviewCardBusinessAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReviewCardBusinessAvgOrderByAggregateInput;

    @Field(() => ReviewCardBusinessMaxOrderByAggregateInput, {nullable:true})
    _max?: ReviewCardBusinessMaxOrderByAggregateInput;

    @Field(() => ReviewCardBusinessMinOrderByAggregateInput, {nullable:true})
    _min?: ReviewCardBusinessMinOrderByAggregateInput;

    @Field(() => ReviewCardBusinessSumOrderByAggregateInput, {nullable:true})
    _sum?: ReviewCardBusinessSumOrderByAggregateInput;
}
