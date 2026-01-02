import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CashflowCategoryWhereUniqueInput } from './cashflow-category-where-unique.input';
import { Type } from 'class-transformer';
import { CashflowCategoryUpdateWithoutUserInput } from './cashflow-category-update-without-user.input';
import { CashflowCategoryCreateWithoutUserInput } from './cashflow-category-create-without-user.input';

@InputType()
export class CashflowCategoryUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CashflowCategoryWhereUniqueInput, {nullable:false})
    @Type(() => CashflowCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name_type'>;

    @Field(() => CashflowCategoryUpdateWithoutUserInput, {nullable:false})
    @Type(() => CashflowCategoryUpdateWithoutUserInput)
    update!: CashflowCategoryUpdateWithoutUserInput;

    @Field(() => CashflowCategoryCreateWithoutUserInput, {nullable:false})
    @Type(() => CashflowCategoryCreateWithoutUserInput)
    create!: CashflowCategoryCreateWithoutUserInput;
}
