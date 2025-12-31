import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowType } from '../prisma/cashflow-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { RecurrenceFrequency } from '../prisma/recurrence-frequency.enum';
import { CashflowCategoryCreateNestedOneWithoutRecurringInput } from '../cashflow-category/cashflow-category-create-nested-one-without-recurring.input';

@InputType()
export class RecurringCashflowCreateWithoutUserInput {

    @Field(() => CashflowType, {nullable:false})
    type!: keyof typeof CashflowType;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    amount!: Decimal;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => RecurrenceFrequency, {nullable:false})
    frequency!: keyof typeof RecurrenceFrequency;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => Date, {nullable:false})
    nextDueDate!: Date | string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CashflowCategoryCreateNestedOneWithoutRecurringInput, {nullable:false})
    @Type(() => CashflowCategoryCreateNestedOneWithoutRecurringInput)
    category!: CashflowCategoryCreateNestedOneWithoutRecurringInput;
}
