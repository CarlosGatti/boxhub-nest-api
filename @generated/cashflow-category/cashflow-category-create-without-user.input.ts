import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CashflowEntryCreateNestedManyWithoutCategoryInput } from '../cashflow-entry/cashflow-entry-create-nested-many-without-category.input';
import { Type } from 'class-transformer';
import { RecurringCashflowCreateNestedManyWithoutCategoryInput } from '../recurring-cashflow/recurring-cashflow-create-nested-many-without-category.input';

@InputType()
export class CashflowCategoryCreateWithoutUserInput {

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

    @Field(() => CashflowEntryCreateNestedManyWithoutCategoryInput, {nullable:true})
    @Type(() => CashflowEntryCreateNestedManyWithoutCategoryInput)
    entries?: CashflowEntryCreateNestedManyWithoutCategoryInput;

    @Field(() => RecurringCashflowCreateNestedManyWithoutCategoryInput, {nullable:true})
    @Type(() => RecurringCashflowCreateNestedManyWithoutCategoryInput)
    recurring?: RecurringCashflowCreateNestedManyWithoutCategoryInput;
}
