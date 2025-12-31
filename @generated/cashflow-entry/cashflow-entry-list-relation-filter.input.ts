import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowEntryWhereInput } from './cashflow-entry-where.input';
import { Type } from 'class-transformer';

@InputType()
export class CashflowEntryListRelationFilter {

    @Field(() => CashflowEntryWhereInput, {nullable:true})
    @Type(() => CashflowEntryWhereInput)
    every?: CashflowEntryWhereInput;

    @Field(() => CashflowEntryWhereInput, {nullable:true})
    @Type(() => CashflowEntryWhereInput)
    some?: CashflowEntryWhereInput;

    @Field(() => CashflowEntryWhereInput, {nullable:true})
    @Type(() => CashflowEntryWhereInput)
    none?: CashflowEntryWhereInput;
}
