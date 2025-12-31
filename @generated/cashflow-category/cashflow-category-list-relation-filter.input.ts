import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowCategoryWhereInput } from './cashflow-category-where.input';

@InputType()
export class CashflowCategoryListRelationFilter {

    @Field(() => CashflowCategoryWhereInput, {nullable:true})
    every?: CashflowCategoryWhereInput;

    @Field(() => CashflowCategoryWhereInput, {nullable:true})
    some?: CashflowCategoryWhereInput;

    @Field(() => CashflowCategoryWhereInput, {nullable:true})
    none?: CashflowCategoryWhereInput;
}
