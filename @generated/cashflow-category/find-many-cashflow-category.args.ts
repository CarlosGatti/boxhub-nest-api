import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CashflowCategoryWhereInput } from './cashflow-category-where.input';
import { Type } from 'class-transformer';
import { CashflowCategoryOrderByWithRelationInput } from './cashflow-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CashflowCategoryWhereUniqueInput } from './cashflow-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CashflowCategoryScalarFieldEnum } from './cashflow-category-scalar-field.enum';

@ArgsType()
export class FindManyCashflowCategoryArgs {

    @Field(() => CashflowCategoryWhereInput, {nullable:true})
    @Type(() => CashflowCategoryWhereInput)
    where?: CashflowCategoryWhereInput;

    @Field(() => [CashflowCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CashflowCategoryOrderByWithRelationInput>;

    @Field(() => CashflowCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CashflowCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CashflowCategoryScalarFieldEnum>;
}
