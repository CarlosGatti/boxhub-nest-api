import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CashflowType } from '../prisma/cashflow-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { RecurrenceFrequency } from '../prisma/recurrence-frequency.enum';

@InputType()
export class RecurringCashflowCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => CashflowType, {nullable:false})
    type!: keyof typeof CashflowType;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    amount!: Decimal;

    @Field(() => String, {nullable:true})
    source?: string;

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
}
