import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedInvoiceItemWhereInput } from './defined-invoice-item-where.input';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedInvoiceRelationFilter } from '../defined-invoice/defined-invoice-relation-filter.input';

@InputType()
export class DefinedInvoiceItemWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DefinedInvoiceItemWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceItemWhereInput)
    AND?: Array<DefinedInvoiceItemWhereInput>;

    @Field(() => [DefinedInvoiceItemWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceItemWhereInput)
    OR?: Array<DefinedInvoiceItemWhereInput>;

    @Field(() => [DefinedInvoiceItemWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceItemWhereInput)
    NOT?: Array<DefinedInvoiceItemWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    invoiceId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    quantity?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    unitPrice?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    total?: DecimalFilter;

    @Field(() => IntFilter, {nullable:true})
    sortOrder?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedInvoiceRelationFilter, {nullable:true})
    @Type(() => DefinedInvoiceRelationFilter)
    invoice?: DefinedInvoiceRelationFilter;
}
