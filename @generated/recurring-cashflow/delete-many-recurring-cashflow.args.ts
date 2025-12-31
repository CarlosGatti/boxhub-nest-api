import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecurringCashflowWhereInput } from './recurring-cashflow-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRecurringCashflowArgs {

    @Field(() => RecurringCashflowWhereInput, {nullable:true})
    @Type(() => RecurringCashflowWhereInput)
    where?: RecurringCashflowWhereInput;
}
