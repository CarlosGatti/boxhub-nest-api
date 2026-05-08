import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumDefinedInvoiceStatusWithAggregatesFilter } from '../prisma/enum-defined-invoice-status-with-aggregates-filter.input';
import { EnumDefinedInvoicePaymentStatusWithAggregatesFilter } from '../prisma/enum-defined-invoice-payment-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class DefinedInvoiceScalarWhereWithAggregatesInput {

    @Field(() => [DefinedInvoiceScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => DefinedInvoiceScalarWhereWithAggregatesInput)
    AND?: Array<DefinedInvoiceScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedInvoiceScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => DefinedInvoiceScalarWhereWithAggregatesInput)
    OR?: Array<DefinedInvoiceScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedInvoiceScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => DefinedInvoiceScalarWhereWithAggregatesInput)
    NOT?: Array<DefinedInvoiceScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    projectId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    clientId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    invoiceNumber?: StringWithAggregatesFilter;

    @Field(() => EnumDefinedInvoiceStatusWithAggregatesFilter, {nullable:true})
    status?: EnumDefinedInvoiceStatusWithAggregatesFilter;

    @Field(() => EnumDefinedInvoicePaymentStatusWithAggregatesFilter, {nullable:true})
    paymentStatus?: EnumDefinedInvoicePaymentStatusWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    currency?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    issueDate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    dueDate?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    sentAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    paidAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    subtotal?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    discountAmount?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    taxAmount?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    total?: DecimalWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    paymentInstructions?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    notes?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    terms?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    publicToken?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    pdfUrl?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    createdById?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
