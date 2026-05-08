import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DefinedInvoiceCountOrderByAggregateInput {

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

    @Field(() => SortOrder, {nullable:true})
    dueDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sentAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paidAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subtotal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discountAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taxAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paymentInstructions?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terms?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    publicToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pdfUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdById?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
