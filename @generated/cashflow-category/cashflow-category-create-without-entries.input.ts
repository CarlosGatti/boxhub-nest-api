import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowType } from '../prisma/cashflow-type.enum';
import { UserCreateNestedOneWithoutCashflowCategoriesInput } from '../user/user-create-nested-one-without-cashflow-categories.input';
import { Type } from 'class-transformer';
import { RecurringCashflowCreateNestedManyWithoutCategoryInput } from '../recurring-cashflow/recurring-cashflow-create-nested-many-without-category.input';

@InputType()
export class CashflowCategoryCreateWithoutEntriesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CashflowType, {nullable:false})
    type!: keyof typeof CashflowType;

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

    @Field(() => RecurringCashflowCreateNestedManyWithoutCategoryInput, {nullable:true})
    @Type(() => RecurringCashflowCreateNestedManyWithoutCategoryInput)
    recurring?: RecurringCashflowCreateNestedManyWithoutCategoryInput;
}
