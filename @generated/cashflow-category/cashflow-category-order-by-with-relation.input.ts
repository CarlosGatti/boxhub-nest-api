import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { CashflowEntryOrderByRelationAggregateInput } from '../cashflow-entry/cashflow-entry-order-by-relation-aggregate.input';
import { RecurringCashflowOrderByRelationAggregateInput } from '../recurring-cashflow/recurring-cashflow-order-by-relation-aggregate.input';

@InputType()
export class CashflowCategoryOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => CashflowEntryOrderByRelationAggregateInput, {nullable:true})
    @Type(() => CashflowEntryOrderByRelationAggregateInput)
    entries?: CashflowEntryOrderByRelationAggregateInput;

    @Field(() => RecurringCashflowOrderByRelationAggregateInput, {nullable:true})
    @Type(() => RecurringCashflowOrderByRelationAggregateInput)
    recurring?: RecurringCashflowOrderByRelationAggregateInput;
}
