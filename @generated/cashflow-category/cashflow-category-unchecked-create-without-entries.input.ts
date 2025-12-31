import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecurringCashflowUncheckedCreateNestedManyWithoutCategoryInput } from '../recurring-cashflow/recurring-cashflow-unchecked-create-nested-many-without-category.input';
import { Type } from 'class-transformer';

@InputType()
export class CashflowCategoryUncheckedCreateWithoutEntriesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

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

    @Field(() => RecurringCashflowUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    @Type(() => RecurringCashflowUncheckedCreateNestedManyWithoutCategoryInput)
    recurring?: RecurringCashflowUncheckedCreateNestedManyWithoutCategoryInput;
}
