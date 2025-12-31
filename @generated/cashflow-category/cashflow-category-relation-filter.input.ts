import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowCategoryWhereInput } from './cashflow-category-where.input';

@InputType()
export class CashflowCategoryRelationFilter {

    @Field(() => CashflowCategoryWhereInput, {nullable:true})
    is?: CashflowCategoryWhereInput;

    @Field(() => CashflowCategoryWhereInput, {nullable:true})
    isNot?: CashflowCategoryWhereInput;
}
