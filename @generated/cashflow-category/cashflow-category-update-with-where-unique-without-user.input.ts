import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CashflowCategoryWhereUniqueInput } from './cashflow-category-where-unique.input';
import { Type } from 'class-transformer';
import { CashflowCategoryUpdateWithoutUserInput } from './cashflow-category-update-without-user.input';

@InputType()
export class CashflowCategoryUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CashflowCategoryWhereUniqueInput, {nullable:false})
    @Type(() => CashflowCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name_type'>;

    @Field(() => CashflowCategoryUpdateWithoutUserInput, {nullable:false})
    @Type(() => CashflowCategoryUpdateWithoutUserInput)
    data!: CashflowCategoryUpdateWithoutUserInput;
}
