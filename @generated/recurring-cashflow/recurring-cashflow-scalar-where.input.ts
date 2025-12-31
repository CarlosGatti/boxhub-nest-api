import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumCashflowTypeFilter } from '../prisma/enum-cashflow-type-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumRecurrenceFrequencyFilter } from '../prisma/enum-recurrence-frequency-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class RecurringCashflowScalarWhereInput {

    @Field(() => [RecurringCashflowScalarWhereInput], {nullable:true})
    @Type(() => RecurringCashflowScalarWhereInput)
    AND?: Array<RecurringCashflowScalarWhereInput>;

    @Field(() => [RecurringCashflowScalarWhereInput], {nullable:true})
    @Type(() => RecurringCashflowScalarWhereInput)
    OR?: Array<RecurringCashflowScalarWhereInput>;

    @Field(() => [RecurringCashflowScalarWhereInput], {nullable:true})
    @Type(() => RecurringCashflowScalarWhereInput)
    NOT?: Array<RecurringCashflowScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    categoryId?: IntFilter;

    @Field(() => EnumCashflowTypeFilter, {nullable:true})
    type?: EnumCashflowTypeFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    amount?: DecimalFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumRecurrenceFrequencyFilter, {nullable:true})
    frequency?: EnumRecurrenceFrequencyFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endDate?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    nextDueDate?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
