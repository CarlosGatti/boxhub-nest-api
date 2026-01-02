import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumCashflowTypeWithAggregatesFilter } from '../prisma/enum-cashflow-type-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CashflowEntryScalarWhereWithAggregatesInput {

    @Field(() => [CashflowEntryScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => CashflowEntryScalarWhereWithAggregatesInput)
    AND?: Array<CashflowEntryScalarWhereWithAggregatesInput>;

    @Field(() => [CashflowEntryScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => CashflowEntryScalarWhereWithAggregatesInput)
    OR?: Array<CashflowEntryScalarWhereWithAggregatesInput>;

    @Field(() => [CashflowEntryScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => CashflowEntryScalarWhereWithAggregatesInput)
    NOT?: Array<CashflowEntryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    categoryId?: IntWithAggregatesFilter;

    @Field(() => EnumCashflowTypeWithAggregatesFilter, {nullable:true})
    type?: EnumCashflowTypeWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    amount?: DecimalWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    source?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    date?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    notes?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
