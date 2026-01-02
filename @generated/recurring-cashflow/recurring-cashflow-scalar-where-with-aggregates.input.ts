import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumCashflowTypeWithAggregatesFilter } from '../prisma/enum-cashflow-type-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumRecurrenceFrequencyWithAggregatesFilter } from '../prisma/enum-recurrence-frequency-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class RecurringCashflowScalarWhereWithAggregatesInput {

    @Field(() => [RecurringCashflowScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => RecurringCashflowScalarWhereWithAggregatesInput)
    AND?: Array<RecurringCashflowScalarWhereWithAggregatesInput>;

    @Field(() => [RecurringCashflowScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => RecurringCashflowScalarWhereWithAggregatesInput)
    OR?: Array<RecurringCashflowScalarWhereWithAggregatesInput>;

    @Field(() => [RecurringCashflowScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => RecurringCashflowScalarWhereWithAggregatesInput)
    NOT?: Array<RecurringCashflowScalarWhereWithAggregatesInput>;

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

    @Field(() => EnumRecurrenceFrequencyWithAggregatesFilter, {nullable:true})
    frequency?: EnumRecurrenceFrequencyWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    startDate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    endDate?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    nextDueDate?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    notes?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
