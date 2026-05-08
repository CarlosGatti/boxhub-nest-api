import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDefinedInvoiceStatusFilter } from '../prisma/enum-defined-invoice-status-filter.input';
import { EnumDefinedInvoicePaymentStatusFilter } from '../prisma/enum-defined-invoice-payment-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class DefinedInvoiceScalarWhereInput {

    @Field(() => [DefinedInvoiceScalarWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceScalarWhereInput)
    AND?: Array<DefinedInvoiceScalarWhereInput>;

    @Field(() => [DefinedInvoiceScalarWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceScalarWhereInput)
    OR?: Array<DefinedInvoiceScalarWhereInput>;

    @Field(() => [DefinedInvoiceScalarWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceScalarWhereInput)
    NOT?: Array<DefinedInvoiceScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    clientId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    invoiceNumber?: StringFilter;

    @Field(() => EnumDefinedInvoiceStatusFilter, {nullable:true})
    status?: EnumDefinedInvoiceStatusFilter;

    @Field(() => EnumDefinedInvoicePaymentStatusFilter, {nullable:true})
    paymentStatus?: EnumDefinedInvoicePaymentStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    issueDate?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    dueDate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    sentAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    paidAt?: DateTimeNullableFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    subtotal?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    discountAmount?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    taxAmount?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    total?: DecimalFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    paymentInstructions?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    terms?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    publicToken?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    pdfUrl?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    createdById?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
