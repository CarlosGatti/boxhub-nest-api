import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CashflowEntryWhereUniqueInput } from './cashflow-entry-where-unique.input';
import { Type } from 'class-transformer';
import { CashflowEntryCreateWithoutCategoryInput } from './cashflow-entry-create-without-category.input';

@InputType()
export class CashflowEntryCreateOrConnectWithoutCategoryInput {

    @Field(() => CashflowEntryWhereUniqueInput, {nullable:false})
    @Type(() => CashflowEntryWhereUniqueInput)
    where!: Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>;

    @Field(() => CashflowEntryCreateWithoutCategoryInput, {nullable:false})
    @Type(() => CashflowEntryCreateWithoutCategoryInput)
    create!: CashflowEntryCreateWithoutCategoryInput;
}
