import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CashflowEntryUpdateManyMutationInput } from './cashflow-entry-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CashflowEntryWhereInput } from './cashflow-entry-where.input';

@ArgsType()
export class UpdateManyCashflowEntryArgs {

    @Field(() => CashflowEntryUpdateManyMutationInput, {nullable:false})
    @Type(() => CashflowEntryUpdateManyMutationInput)
    data!: CashflowEntryUpdateManyMutationInput;

    @Field(() => CashflowEntryWhereInput, {nullable:true})
    @Type(() => CashflowEntryWhereInput)
    where?: CashflowEntryWhereInput;
}
