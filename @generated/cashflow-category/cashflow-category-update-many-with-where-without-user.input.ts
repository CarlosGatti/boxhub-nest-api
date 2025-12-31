import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowCategoryScalarWhereInput } from './cashflow-category-scalar-where.input';
import { Type } from 'class-transformer';
import { CashflowCategoryUpdateManyMutationInput } from './cashflow-category-update-many-mutation.input';

@InputType()
export class CashflowCategoryUpdateManyWithWhereWithoutUserInput {

    @Field(() => CashflowCategoryScalarWhereInput, {nullable:false})
    @Type(() => CashflowCategoryScalarWhereInput)
    where!: CashflowCategoryScalarWhereInput;

    @Field(() => CashflowCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => CashflowCategoryUpdateManyMutationInput)
    data!: CashflowCategoryUpdateManyMutationInput;
}
