import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowEntryScalarWhereInput } from './cashflow-entry-scalar-where.input';
import { Type } from 'class-transformer';
import { CashflowEntryUpdateManyMutationInput } from './cashflow-entry-update-many-mutation.input';

@InputType()
export class CashflowEntryUpdateManyWithWhereWithoutUserInput {

    @Field(() => CashflowEntryScalarWhereInput, {nullable:false})
    @Type(() => CashflowEntryScalarWhereInput)
    where!: CashflowEntryScalarWhereInput;

    @Field(() => CashflowEntryUpdateManyMutationInput, {nullable:false})
    @Type(() => CashflowEntryUpdateManyMutationInput)
    data!: CashflowEntryUpdateManyMutationInput;
}
