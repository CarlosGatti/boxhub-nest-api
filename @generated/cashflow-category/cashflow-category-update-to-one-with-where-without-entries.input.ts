import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowCategoryWhereInput } from './cashflow-category-where.input';
import { Type } from 'class-transformer';
import { CashflowCategoryUpdateWithoutEntriesInput } from './cashflow-category-update-without-entries.input';

@InputType()
export class CashflowCategoryUpdateToOneWithWhereWithoutEntriesInput {

    @Field(() => CashflowCategoryWhereInput, {nullable:true})
    @Type(() => CashflowCategoryWhereInput)
    where?: CashflowCategoryWhereInput;

    @Field(() => CashflowCategoryUpdateWithoutEntriesInput, {nullable:false})
    @Type(() => CashflowCategoryUpdateWithoutEntriesInput)
    data!: CashflowCategoryUpdateWithoutEntriesInput;
}
