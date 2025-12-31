import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CashflowEntryWhereUniqueInput } from './cashflow-entry-where-unique.input';
import { Type } from 'class-transformer';
import { CashflowEntryUpdateWithoutCategoryInput } from './cashflow-entry-update-without-category.input';

@InputType()
export class CashflowEntryUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => CashflowEntryWhereUniqueInput, {nullable:false})
    @Type(() => CashflowEntryWhereUniqueInput)
    where!: Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>;

    @Field(() => CashflowEntryUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => CashflowEntryUpdateWithoutCategoryInput)
    data!: CashflowEntryUpdateWithoutCategoryInput;
}
