import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecurringCashflowCreateInput } from './recurring-cashflow-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRecurringCashflowArgs {

    @Field(() => RecurringCashflowCreateInput, {nullable:false})
    @Type(() => RecurringCashflowCreateInput)
    data!: RecurringCashflowCreateInput;
}
