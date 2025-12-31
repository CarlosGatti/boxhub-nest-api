import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowCategoryUpdateWithoutRecurringInput } from './cashflow-category-update-without-recurring.input';
import { Type } from 'class-transformer';
import { CashflowCategoryCreateWithoutRecurringInput } from './cashflow-category-create-without-recurring.input';
import { CashflowCategoryWhereInput } from './cashflow-category-where.input';

@InputType()
export class CashflowCategoryUpsertWithoutRecurringInput {

    @Field(() => CashflowCategoryUpdateWithoutRecurringInput, {nullable:false})
    @Type(() => CashflowCategoryUpdateWithoutRecurringInput)
    update!: CashflowCategoryUpdateWithoutRecurringInput;

    @Field(() => CashflowCategoryCreateWithoutRecurringInput, {nullable:false})
    @Type(() => CashflowCategoryCreateWithoutRecurringInput)
    create!: CashflowCategoryCreateWithoutRecurringInput;

    @Field(() => CashflowCategoryWhereInput, {nullable:true})
    @Type(() => CashflowCategoryWhereInput)
    where?: CashflowCategoryWhereInput;
}
