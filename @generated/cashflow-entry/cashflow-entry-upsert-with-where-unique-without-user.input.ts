import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CashflowEntryWhereUniqueInput } from './cashflow-entry-where-unique.input';
import { Type } from 'class-transformer';
import { CashflowEntryUpdateWithoutUserInput } from './cashflow-entry-update-without-user.input';
import { CashflowEntryCreateWithoutUserInput } from './cashflow-entry-create-without-user.input';

@InputType()
export class CashflowEntryUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CashflowEntryWhereUniqueInput, {nullable:false})
    @Type(() => CashflowEntryWhereUniqueInput)
    where!: Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>;

    @Field(() => CashflowEntryUpdateWithoutUserInput, {nullable:false})
    @Type(() => CashflowEntryUpdateWithoutUserInput)
    update!: CashflowEntryUpdateWithoutUserInput;

    @Field(() => CashflowEntryCreateWithoutUserInput, {nullable:false})
    @Type(() => CashflowEntryCreateWithoutUserInput)
    create!: CashflowEntryCreateWithoutUserInput;
}
