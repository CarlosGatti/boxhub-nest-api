import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedInvoiceMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    projectId?: true;

    @Field(() => Boolean, {nullable:true})
    clientId?: true;

    @Field(() => Boolean, {nullable:true})
    invoiceNumber?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    paymentStatus?: true;

    @Field(() => Boolean, {nullable:true})
    currency?: true;

    @Field(() => Boolean, {nullable:true})
    issueDate?: true;

    @Field(() => Boolean, {nullable:true})
    dueDate?: true;

    @Field(() => Boolean, {nullable:true})
    sentAt?: true;

    @Field(() => Boolean, {nullable:true})
    paidAt?: true;

    @Field(() => Boolean, {nullable:true})
    subtotal?: true;

    @Field(() => Boolean, {nullable:true})
    discountAmount?: true;

    @Field(() => Boolean, {nullable:true})
    taxAmount?: true;

    @Field(() => Boolean, {nullable:true})
    total?: true;

    @Field(() => Boolean, {nullable:true})
    paymentInstructions?: true;

    @Field(() => Boolean, {nullable:true})
    notes?: true;

    @Field(() => Boolean, {nullable:true})
    terms?: true;

    @Field(() => Boolean, {nullable:true})
    publicToken?: true;

    @Field(() => Boolean, {nullable:true})
    pdfUrl?: true;

    @Field(() => Boolean, {nullable:true})
    createdById?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
