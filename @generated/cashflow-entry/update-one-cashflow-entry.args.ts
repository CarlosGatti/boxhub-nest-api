import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CashflowEntryUpdateInput } from './cashflow-entry-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CashflowEntryWhereUniqueInput } from './cashflow-entry-where-unique.input';

@ArgsType()
export class UpdateOneCashflowEntryArgs {

    @Field(() => CashflowEntryUpdateInput, {nullable:false})
    @Type(() => CashflowEntryUpdateInput)
    data!: CashflowEntryUpdateInput;

    @Field(() => CashflowEntryWhereUniqueInput, {nullable:false})
    @Type(() => CashflowEntryWhereUniqueInput)
    where!: Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>;
}
