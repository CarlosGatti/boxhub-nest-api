import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedInvoiceCountOrderByAggregateInput } from './defined-invoice-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceAvgOrderByAggregateInput } from './defined-invoice-avg-order-by-aggregate.input';
import { DefinedInvoiceMaxOrderByAggregateInput } from './defined-invoice-max-order-by-aggregate.input';
import { DefinedInvoiceMinOrderByAggregateInput } from './defined-invoice-min-order-by-aggregate.input';
import { DefinedInvoiceSumOrderByAggregateInput } from './defined-invoice-sum-order-by-aggregate.input';

@InputType()
export class DefinedInvoiceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    invoiceNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paymentStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    issueDate?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    dueDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    sentAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    paidAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    subtotal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discountAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taxAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    paymentInstructions?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    terms?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    publicToken?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    pdfUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    createdById?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedInvoiceCountOrderByAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceCountOrderByAggregateInput)
    _count?: DefinedInvoiceCountOrderByAggregateInput;

    @Field(() => DefinedInvoiceAvgOrderByAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceAvgOrderByAggregateInput)
    _avg?: DefinedInvoiceAvgOrderByAggregateInput;

    @Field(() => DefinedInvoiceMaxOrderByAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceMaxOrderByAggregateInput)
    _max?: DefinedInvoiceMaxOrderByAggregateInput;

    @Field(() => DefinedInvoiceMinOrderByAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceMinOrderByAggregateInput)
    _min?: DefinedInvoiceMinOrderByAggregateInput;

    @Field(() => DefinedInvoiceSumOrderByAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceSumOrderByAggregateInput)
    _sum?: DefinedInvoiceSumOrderByAggregateInput;
}
