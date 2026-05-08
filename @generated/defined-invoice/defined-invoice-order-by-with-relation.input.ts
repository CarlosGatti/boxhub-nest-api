import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedProjectOrderByWithRelationInput } from '../defined-project/defined-project-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { DefinedClientOrderByWithRelationInput } from '../defined-client/defined-client-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { DefinedInvoiceItemOrderByRelationAggregateInput } from '../defined-invoice-item/defined-invoice-item-order-by-relation-aggregate.input';

@InputType()
export class DefinedInvoiceOrderByWithRelationInput {

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

    @Field(() => DefinedProjectOrderByWithRelationInput, {nullable:true})
    @Type(() => DefinedProjectOrderByWithRelationInput)
    project?: DefinedProjectOrderByWithRelationInput;

    @Field(() => DefinedClientOrderByWithRelationInput, {nullable:true})
    @Type(() => DefinedClientOrderByWithRelationInput)
    client?: DefinedClientOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    createdBy?: UserOrderByWithRelationInput;

    @Field(() => DefinedInvoiceItemOrderByRelationAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceItemOrderByRelationAggregateInput)
    items?: DefinedInvoiceItemOrderByRelationAggregateInput;
}
