import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RecurringCashflowCountOrderByAggregateInput } from './recurring-cashflow-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { RecurringCashflowAvgOrderByAggregateInput } from './recurring-cashflow-avg-order-by-aggregate.input';
import { RecurringCashflowMaxOrderByAggregateInput } from './recurring-cashflow-max-order-by-aggregate.input';
import { RecurringCashflowMinOrderByAggregateInput } from './recurring-cashflow-min-order-by-aggregate.input';
import { RecurringCashflowSumOrderByAggregateInput } from './recurring-cashflow-sum-order-by-aggregate.input';

@InputType()
export class RecurringCashflowOrderByWithAggregationInput {

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
    frequency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    endDate?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    nextDueDate?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => RecurringCashflowCountOrderByAggregateInput, {nullable:true})
    @Type(() => RecurringCashflowCountOrderByAggregateInput)
    _count?: RecurringCashflowCountOrderByAggregateInput;

    @Field(() => RecurringCashflowAvgOrderByAggregateInput, {nullable:true})
    @Type(() => RecurringCashflowAvgOrderByAggregateInput)
    _avg?: RecurringCashflowAvgOrderByAggregateInput;

    @Field(() => RecurringCashflowMaxOrderByAggregateInput, {nullable:true})
    @Type(() => RecurringCashflowMaxOrderByAggregateInput)
    _max?: RecurringCashflowMaxOrderByAggregateInput;

    @Field(() => RecurringCashflowMinOrderByAggregateInput, {nullable:true})
    @Type(() => RecurringCashflowMinOrderByAggregateInput)
    _min?: RecurringCashflowMinOrderByAggregateInput;

    @Field(() => RecurringCashflowSumOrderByAggregateInput, {nullable:true})
    @Type(() => RecurringCashflowSumOrderByAggregateInput)
    _sum?: RecurringCashflowSumOrderByAggregateInput;
}
