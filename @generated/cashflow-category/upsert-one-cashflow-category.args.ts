import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CashflowCategoryWhereUniqueInput } from './cashflow-category-where-unique.input';
import { Type } from 'class-transformer';
import { CashflowCategoryCreateInput } from './cashflow-category-create.input';
import { CashflowCategoryUpdateInput } from './cashflow-category-update.input';

@ArgsType()
export class UpsertOneCashflowCategoryArgs {

    @Field(() => CashflowCategoryWhereUniqueInput, {nullable:false})
    @Type(() => CashflowCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name'>;

    @Field(() => CashflowCategoryCreateInput, {nullable:false})
    @Type(() => CashflowCategoryCreateInput)
    create!: CashflowCategoryCreateInput;

    @Field(() => CashflowCategoryUpdateInput, {nullable:false})
    @Type(() => CashflowCategoryUpdateInput)
    update!: CashflowCategoryUpdateInput;
}
