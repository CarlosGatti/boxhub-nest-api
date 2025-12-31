import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CashflowEntryWhereUniqueInput } from './cashflow-entry-where-unique.input';
import { Type } from 'class-transformer';
import { CashflowEntryCreateInput } from './cashflow-entry-create.input';
import { CashflowEntryUpdateInput } from './cashflow-entry-update.input';

@ArgsType()
export class UpsertOneCashflowEntryArgs {

    @Field(() => CashflowEntryWhereUniqueInput, {nullable:false})
    @Type(() => CashflowEntryWhereUniqueInput)
    where!: Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>;

    @Field(() => CashflowEntryCreateInput, {nullable:false})
    @Type(() => CashflowEntryCreateInput)
    create!: CashflowEntryCreateInput;

    @Field(() => CashflowEntryUpdateInput, {nullable:false})
    @Type(() => CashflowEntryUpdateInput)
    update!: CashflowEntryUpdateInput;
}
