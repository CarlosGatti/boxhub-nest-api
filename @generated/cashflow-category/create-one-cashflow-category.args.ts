import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CashflowCategoryCreateInput } from './cashflow-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCashflowCategoryArgs {

    @Field(() => CashflowCategoryCreateInput, {nullable:false})
    @Type(() => CashflowCategoryCreateInput)
    data!: CashflowCategoryCreateInput;
}
