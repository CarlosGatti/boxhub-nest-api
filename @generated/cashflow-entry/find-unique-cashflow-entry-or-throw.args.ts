import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CashflowEntryWhereUniqueInput } from './cashflow-entry-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCashflowEntryOrThrowArgs {

    @Field(() => CashflowEntryWhereUniqueInput, {nullable:false})
    @Type(() => CashflowEntryWhereUniqueInput)
    where!: Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>;
}
