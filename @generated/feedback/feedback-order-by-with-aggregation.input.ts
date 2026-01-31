import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FeedbackCountOrderByAggregateInput } from './feedback-count-order-by-aggregate.input';
import { FeedbackAvgOrderByAggregateInput } from './feedback-avg-order-by-aggregate.input';
import { FeedbackMaxOrderByAggregateInput } from './feedback-max-order-by-aggregate.input';
import { FeedbackMinOrderByAggregateInput } from './feedback-min-order-by-aggregate.input';
import { FeedbackSumOrderByAggregateInput } from './feedback-sum-order-by-aggregate.input';

@InputType()
export class FeedbackOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    targetAppId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    anonymousId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contactEmail?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    rating?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tags?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    contextPath?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FeedbackCountOrderByAggregateInput, {nullable:true})
    _count?: FeedbackCountOrderByAggregateInput;

    @Field(() => FeedbackAvgOrderByAggregateInput, {nullable:true})
    _avg?: FeedbackAvgOrderByAggregateInput;

    @Field(() => FeedbackMaxOrderByAggregateInput, {nullable:true})
    _max?: FeedbackMaxOrderByAggregateInput;

    @Field(() => FeedbackMinOrderByAggregateInput, {nullable:true})
    _min?: FeedbackMinOrderByAggregateInput;

    @Field(() => FeedbackSumOrderByAggregateInput, {nullable:true})
    _sum?: FeedbackSumOrderByAggregateInput;
}
