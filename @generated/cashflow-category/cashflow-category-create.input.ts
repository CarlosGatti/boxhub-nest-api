import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCashflowCategoriesInput } from '../user/user-create-nested-one-without-cashflow-categories.input';
import { Type } from 'class-transformer';
import { CashflowEntryCreateNestedManyWithoutCategoryInput } from '../cashflow-entry/cashflow-entry-create-nested-many-without-category.input';
import { RecurringCashflowCreateNestedManyWithoutCategoryInput } from '../recurring-cashflow/recurring-cashflow-create-nested-many-without-category.input';

@InputType()
export class CashflowCategoryCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutCashflowCategoriesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutCashflowCategoriesInput)
    user!: UserCreateNestedOneWithoutCashflowCategoriesInput;

    @Field(() => CashflowEntryCreateNestedManyWithoutCategoryInput, {nullable:true})
    @Type(() => CashflowEntryCreateNestedManyWithoutCategoryInput)
    entries?: CashflowEntryCreateNestedManyWithoutCategoryInput;

    @Field(() => RecurringCashflowCreateNestedManyWithoutCategoryInput, {nullable:true})
    @Type(() => RecurringCashflowCreateNestedManyWithoutCategoryInput)
    recurring?: RecurringCashflowCreateNestedManyWithoutCategoryInput;
}
