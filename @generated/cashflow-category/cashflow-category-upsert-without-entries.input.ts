import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowCategoryUpdateWithoutEntriesInput } from './cashflow-category-update-without-entries.input';
import { Type } from 'class-transformer';
import { CashflowCategoryCreateWithoutEntriesInput } from './cashflow-category-create-without-entries.input';
import { CashflowCategoryWhereInput } from './cashflow-category-where.input';

@InputType()
export class CashflowCategoryUpsertWithoutEntriesInput {

    @Field(() => CashflowCategoryUpdateWithoutEntriesInput, {nullable:false})
    @Type(() => CashflowCategoryUpdateWithoutEntriesInput)
    update!: CashflowCategoryUpdateWithoutEntriesInput;

    @Field(() => CashflowCategoryCreateWithoutEntriesInput, {nullable:false})
    @Type(() => CashflowCategoryCreateWithoutEntriesInput)
    create!: CashflowCategoryCreateWithoutEntriesInput;

    @Field(() => CashflowCategoryWhereInput, {nullable:true})
    @Type(() => CashflowCategoryWhereInput)
    where?: CashflowCategoryWhereInput;
}
