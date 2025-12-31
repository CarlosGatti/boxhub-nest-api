import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CashflowEntryWhereInput } from './cashflow-entry-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCashflowEntryArgs {

    @Field(() => CashflowEntryWhereInput, {nullable:true})
    @Type(() => CashflowEntryWhereInput)
    where?: CashflowEntryWhereInput;
}
