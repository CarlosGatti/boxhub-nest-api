import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DiscartItemCountOrderByAggregateInput } from './discart-item-count-order-by-aggregate.input';
import { DiscartItemAvgOrderByAggregateInput } from './discart-item-avg-order-by-aggregate.input';
import { DiscartItemMaxOrderByAggregateInput } from './discart-item-max-order-by-aggregate.input';
import { DiscartItemMinOrderByAggregateInput } from './discart-item-min-order-by-aggregate.input';
import { DiscartItemSumOrderByAggregateInput } from './discart-item-sum-order-by-aggregate.input';

@InputType()
export class DiscartItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    price?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    condition?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageUrls?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    pickupAddress?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contactPhone?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdById?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DiscartItemCountOrderByAggregateInput, {nullable:true})
    _count?: DiscartItemCountOrderByAggregateInput;

    @Field(() => DiscartItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: DiscartItemAvgOrderByAggregateInput;

    @Field(() => DiscartItemMaxOrderByAggregateInput, {nullable:true})
    _max?: DiscartItemMaxOrderByAggregateInput;

    @Field(() => DiscartItemMinOrderByAggregateInput, {nullable:true})
    _min?: DiscartItemMinOrderByAggregateInput;

    @Field(() => DiscartItemSumOrderByAggregateInput, {nullable:true})
    _sum?: DiscartItemSumOrderByAggregateInput;
}
