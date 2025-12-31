import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecurringCashflowUpdateManyMutationInput } from './recurring-cashflow-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RecurringCashflowWhereInput } from './recurring-cashflow-where.input';

@ArgsType()
export class UpdateManyRecurringCashflowArgs {

    @Field(() => RecurringCashflowUpdateManyMutationInput, {nullable:false})
    @Type(() => RecurringCashflowUpdateManyMutationInput)
    data!: RecurringCashflowUpdateManyMutationInput;

    @Field(() => RecurringCashflowWhereInput, {nullable:true})
    @Type(() => RecurringCashflowWhereInput)
    where?: RecurringCashflowWhereInput;
}
