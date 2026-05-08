import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedInvoiceItemScalarWhereWithAggregatesInput {

    @Field(() => [DefinedInvoiceItemScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => DefinedInvoiceItemScalarWhereWithAggregatesInput)
    AND?: Array<DefinedInvoiceItemScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedInvoiceItemScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => DefinedInvoiceItemScalarWhereWithAggregatesInput)
    OR?: Array<DefinedInvoiceItemScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedInvoiceItemScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => DefinedInvoiceItemScalarWhereWithAggregatesInput)
    NOT?: Array<DefinedInvoiceItemScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    invoiceId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    quantity?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    unitPrice?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    total?: DecimalWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sortOrder?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
