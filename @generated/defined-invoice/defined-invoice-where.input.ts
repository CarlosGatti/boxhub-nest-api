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
import { DefinedProjectRelationFilter } from '../defined-project/defined-project-relation-filter.input';
import { DefinedClientRelationFilter } from '../defined-client/defined-client-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { DefinedInvoiceItemListRelationFilter } from '../defined-invoice-item/defined-invoice-item-list-relation-filter.input';

@InputType()
export class DefinedInvoiceWhereInput {

    @Field(() => [DefinedInvoiceWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceWhereInput)
    AND?: Array<DefinedInvoiceWhereInput>;

    @Field(() => [DefinedInvoiceWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceWhereInput)
    OR?: Array<DefinedInvoiceWhereInput>;

    @Field(() => [DefinedInvoiceWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceWhereInput)
    NOT?: Array<DefinedInvoiceWhereInput>;

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

    @Field(() => DefinedProjectRelationFilter, {nullable:true})
    @Type(() => DefinedProjectRelationFilter)
    project?: DefinedProjectRelationFilter;

    @Field(() => DefinedClientRelationFilter, {nullable:true})
    @Type(() => DefinedClientRelationFilter)
    client?: DefinedClientRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    createdBy?: UserNullableRelationFilter;

    @Field(() => DefinedInvoiceItemListRelationFilter, {nullable:true})
    @Type(() => DefinedInvoiceItemListRelationFilter)
    items?: DefinedInvoiceItemListRelationFilter;
}
