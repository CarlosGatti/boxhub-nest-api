import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CashflowCategoryUpdateInput } from './cashflow-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CashflowCategoryWhereUniqueInput } from './cashflow-category-where-unique.input';

@ArgsType()
export class UpdateOneCashflowCategoryArgs {

    @Field(() => CashflowCategoryUpdateInput, {nullable:false})
    @Type(() => CashflowCategoryUpdateInput)
    data!: CashflowCategoryUpdateInput;

    @Field(() => CashflowCategoryWhereUniqueInput, {nullable:false})
    @Type(() => CashflowCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name_type'>;
}
