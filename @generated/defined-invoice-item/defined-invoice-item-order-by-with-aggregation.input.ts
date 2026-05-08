import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DefinedInvoiceItemCountOrderByAggregateInput } from './defined-invoice-item-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceItemAvgOrderByAggregateInput } from './defined-invoice-item-avg-order-by-aggregate.input';
import { DefinedInvoiceItemMaxOrderByAggregateInput } from './defined-invoice-item-max-order-by-aggregate.input';
import { DefinedInvoiceItemMinOrderByAggregateInput } from './defined-invoice-item-min-order-by-aggregate.input';
import { DefinedInvoiceItemSumOrderByAggregateInput } from './defined-invoice-item-sum-order-by-aggregate.input';

@InputType()
export class DefinedInvoiceItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    invoiceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unitPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedInvoiceItemCountOrderByAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceItemCountOrderByAggregateInput)
    _count?: DefinedInvoiceItemCountOrderByAggregateInput;

    @Field(() => DefinedInvoiceItemAvgOrderByAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceItemAvgOrderByAggregateInput)
    _avg?: DefinedInvoiceItemAvgOrderByAggregateInput;

    @Field(() => DefinedInvoiceItemMaxOrderByAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceItemMaxOrderByAggregateInput)
    _max?: DefinedInvoiceItemMaxOrderByAggregateInput;

    @Field(() => DefinedInvoiceItemMinOrderByAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceItemMinOrderByAggregateInput)
    _min?: DefinedInvoiceItemMinOrderByAggregateInput;

    @Field(() => DefinedInvoiceItemSumOrderByAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceItemSumOrderByAggregateInput)
    _sum?: DefinedInvoiceItemSumOrderByAggregateInput;
}
