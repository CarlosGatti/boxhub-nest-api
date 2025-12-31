import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CashflowEntryWhereUniqueInput } from './cashflow-entry-where-unique.input';
import { Type } from 'class-transformer';
import { CashflowEntryUpdateWithoutCategoryInput } from './cashflow-entry-update-without-category.input';
import { CashflowEntryCreateWithoutCategoryInput } from './cashflow-entry-create-without-category.input';

@InputType()
export class CashflowEntryUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => CashflowEntryWhereUniqueInput, {nullable:false})
    @Type(() => CashflowEntryWhereUniqueInput)
    where!: Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>;

    @Field(() => CashflowEntryUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => CashflowEntryUpdateWithoutCategoryInput)
    update!: CashflowEntryUpdateWithoutCategoryInput;

    @Field(() => CashflowEntryCreateWithoutCategoryInput, {nullable:false})
    @Type(() => CashflowEntryCreateWithoutCategoryInput)
    create!: CashflowEntryCreateWithoutCategoryInput;
}
