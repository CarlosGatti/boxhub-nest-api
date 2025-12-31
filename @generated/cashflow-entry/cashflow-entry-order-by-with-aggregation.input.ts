import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CashflowEntryCountOrderByAggregateInput } from './cashflow-entry-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { CashflowEntryAvgOrderByAggregateInput } from './cashflow-entry-avg-order-by-aggregate.input';
import { CashflowEntryMaxOrderByAggregateInput } from './cashflow-entry-max-order-by-aggregate.input';
import { CashflowEntryMinOrderByAggregateInput } from './cashflow-entry-min-order-by-aggregate.input';
import { CashflowEntrySumOrderByAggregateInput } from './cashflow-entry-sum-order-by-aggregate.input';

@InputType()
export class CashflowEntryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CashflowEntryCountOrderByAggregateInput, {nullable:true})
    @Type(() => CashflowEntryCountOrderByAggregateInput)
    _count?: CashflowEntryCountOrderByAggregateInput;

    @Field(() => CashflowEntryAvgOrderByAggregateInput, {nullable:true})
    @Type(() => CashflowEntryAvgOrderByAggregateInput)
    _avg?: CashflowEntryAvgOrderByAggregateInput;

    @Field(() => CashflowEntryMaxOrderByAggregateInput, {nullable:true})
    @Type(() => CashflowEntryMaxOrderByAggregateInput)
    _max?: CashflowEntryMaxOrderByAggregateInput;

    @Field(() => CashflowEntryMinOrderByAggregateInput, {nullable:true})
    @Type(() => CashflowEntryMinOrderByAggregateInput)
    _min?: CashflowEntryMinOrderByAggregateInput;

    @Field(() => CashflowEntrySumOrderByAggregateInput, {nullable:true})
    @Type(() => CashflowEntrySumOrderByAggregateInput)
    _sum?: CashflowEntrySumOrderByAggregateInput;
}
