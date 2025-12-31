import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CashflowCategoryWhereInput } from './cashflow-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCashflowCategoryArgs {

    @Field(() => CashflowCategoryWhereInput, {nullable:true})
    @Type(() => CashflowCategoryWhereInput)
    where?: CashflowCategoryWhereInput;
}
