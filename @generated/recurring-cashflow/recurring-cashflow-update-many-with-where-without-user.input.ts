import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecurringCashflowScalarWhereInput } from './recurring-cashflow-scalar-where.input';
import { Type } from 'class-transformer';
import { RecurringCashflowUpdateManyMutationInput } from './recurring-cashflow-update-many-mutation.input';

@InputType()
export class RecurringCashflowUpdateManyWithWhereWithoutUserInput {

    @Field(() => RecurringCashflowScalarWhereInput, {nullable:false})
    @Type(() => RecurringCashflowScalarWhereInput)
    where!: RecurringCashflowScalarWhereInput;

    @Field(() => RecurringCashflowUpdateManyMutationInput, {nullable:false})
    @Type(() => RecurringCashflowUpdateManyMutationInput)
    data!: RecurringCashflowUpdateManyMutationInput;
}
