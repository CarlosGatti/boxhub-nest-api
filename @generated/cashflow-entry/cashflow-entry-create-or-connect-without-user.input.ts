import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CashflowEntryWhereUniqueInput } from './cashflow-entry-where-unique.input';
import { Type } from 'class-transformer';
import { CashflowEntryCreateWithoutUserInput } from './cashflow-entry-create-without-user.input';

@InputType()
export class CashflowEntryCreateOrConnectWithoutUserInput {

    @Field(() => CashflowEntryWhereUniqueInput, {nullable:false})
    @Type(() => CashflowEntryWhereUniqueInput)
    where!: Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>;

    @Field(() => CashflowEntryCreateWithoutUserInput, {nullable:false})
    @Type(() => CashflowEntryCreateWithoutUserInput)
    create!: CashflowEntryCreateWithoutUserInput;
}
