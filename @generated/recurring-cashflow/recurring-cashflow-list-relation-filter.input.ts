import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecurringCashflowWhereInput } from './recurring-cashflow-where.input';
import { Type } from 'class-transformer';

@InputType()
export class RecurringCashflowListRelationFilter {

    @Field(() => RecurringCashflowWhereInput, {nullable:true})
    @Type(() => RecurringCashflowWhereInput)
    every?: RecurringCashflowWhereInput;

    @Field(() => RecurringCashflowWhereInput, {nullable:true})
    @Type(() => RecurringCashflowWhereInput)
    some?: RecurringCashflowWhereInput;

    @Field(() => RecurringCashflowWhereInput, {nullable:true})
    @Type(() => RecurringCashflowWhereInput)
    none?: RecurringCashflowWhereInput;
}
