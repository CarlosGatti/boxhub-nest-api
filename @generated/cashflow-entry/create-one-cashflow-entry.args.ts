import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CashflowEntryCreateInput } from './cashflow-entry-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCashflowEntryArgs {

    @Field(() => CashflowEntryCreateInput, {nullable:false})
    @Type(() => CashflowEntryCreateInput)
    data!: CashflowEntryCreateInput;
}
