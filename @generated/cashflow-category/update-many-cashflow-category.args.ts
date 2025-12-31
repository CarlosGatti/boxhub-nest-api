import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CashflowCategoryUpdateManyMutationInput } from './cashflow-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CashflowCategoryWhereInput } from './cashflow-category-where.input';

@ArgsType()
export class UpdateManyCashflowCategoryArgs {

    @Field(() => CashflowCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => CashflowCategoryUpdateManyMutationInput)
    data!: CashflowCategoryUpdateManyMutationInput;

    @Field(() => CashflowCategoryWhereInput, {nullable:true})
    @Type(() => CashflowCategoryWhereInput)
    where?: CashflowCategoryWhereInput;
}
