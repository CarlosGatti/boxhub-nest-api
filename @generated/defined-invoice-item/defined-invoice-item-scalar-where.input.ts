import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedInvoiceItemScalarWhereInput {

    @Field(() => [DefinedInvoiceItemScalarWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceItemScalarWhereInput)
    AND?: Array<DefinedInvoiceItemScalarWhereInput>;

    @Field(() => [DefinedInvoiceItemScalarWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceItemScalarWhereInput)
    OR?: Array<DefinedInvoiceItemScalarWhereInput>;

    @Field(() => [DefinedInvoiceItemScalarWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceItemScalarWhereInput)
    NOT?: Array<DefinedInvoiceItemScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}
