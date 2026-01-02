import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CashflowCategoryCountOrderByAggregateInput } from './cashflow-category-count-order-by-aggregate.input';
import { CashflowCategoryAvgOrderByAggregateInput } from './cashflow-category-avg-order-by-aggregate.input';
import { CashflowCategoryMaxOrderByAggregateInput } from './cashflow-category-max-order-by-aggregate.input';
import { CashflowCategoryMinOrderByAggregateInput } from './cashflow-category-min-order-by-aggregate.input';
import { CashflowCategorySumOrderByAggregateInput } from './cashflow-category-sum-order-by-aggregate.input';

@InputType()
export class CashflowCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    color?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    icon?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CashflowCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: CashflowCategoryCountOrderByAggregateInput;

    @Field(() => CashflowCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: CashflowCategoryAvgOrderByAggregateInput;

    @Field(() => CashflowCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: CashflowCategoryMaxOrderByAggregateInput;

    @Field(() => CashflowCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: CashflowCategoryMinOrderByAggregateInput;

    @Field(() => CashflowCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: CashflowCategorySumOrderByAggregateInput;
}
