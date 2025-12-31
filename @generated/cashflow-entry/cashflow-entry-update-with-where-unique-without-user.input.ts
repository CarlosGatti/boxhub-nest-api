import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CashflowEntryWhereUniqueInput } from './cashflow-entry-where-unique.input';
import { Type } from 'class-transformer';
import { CashflowEntryUpdateWithoutUserInput } from './cashflow-entry-update-without-user.input';

@InputType()
export class CashflowEntryUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CashflowEntryWhereUniqueInput, {nullable:false})
    @Type(() => CashflowEntryWhereUniqueInput)
    where!: Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>;

    @Field(() => CashflowEntryUpdateWithoutUserInput, {nullable:false})
    @Type(() => CashflowEntryUpdateWithoutUserInput)
    data!: CashflowEntryUpdateWithoutUserInput;
}
