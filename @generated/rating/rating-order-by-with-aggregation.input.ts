import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RatingCountOrderByAggregateInput } from './rating-count-order-by-aggregate.input';
import { RatingAvgOrderByAggregateInput } from './rating-avg-order-by-aggregate.input';
import { RatingMaxOrderByAggregateInput } from './rating-max-order-by-aggregate.input';
import { RatingMinOrderByAggregateInput } from './rating-min-order-by-aggregate.input';
import { RatingSumOrderByAggregateInput } from './rating-sum-order-by-aggregate.input';

@InputType()
export class RatingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sellerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    buyerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stars?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    comment?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => RatingCountOrderByAggregateInput, {nullable:true})
    _count?: RatingCountOrderByAggregateInput;

    @Field(() => RatingAvgOrderByAggregateInput, {nullable:true})
    _avg?: RatingAvgOrderByAggregateInput;

    @Field(() => RatingMaxOrderByAggregateInput, {nullable:true})
    _max?: RatingMaxOrderByAggregateInput;

    @Field(() => RatingMinOrderByAggregateInput, {nullable:true})
    _min?: RatingMinOrderByAggregateInput;

    @Field(() => RatingSumOrderByAggregateInput, {nullable:true})
    _sum?: RatingSumOrderByAggregateInput;
}
