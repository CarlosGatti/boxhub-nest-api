import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CashflowType } from '../prisma/cashflow-type.enum';
import { CashflowEntryUncheckedCreateNestedManyWithoutCategoryInput } from '../cashflow-entry/cashflow-entry-unchecked-create-nested-many-without-category.input';
import { Type } from 'class-transformer';
import { RecurringCashflowUncheckedCreateNestedManyWithoutCategoryInput } from '../recurring-cashflow/recurring-cashflow-unchecked-create-nested-many-without-category.input';

@InputType()
export class CashflowCategoryUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => CashflowEntryUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    @Type(() => CashflowEntryUncheckedCreateNestedManyWithoutCategoryInput)
    entries?: CashflowEntryUncheckedCreateNestedManyWithoutCategoryInput;

    @Field(() => RecurringCashflowUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    @Type(() => RecurringCashflowUncheckedCreateNestedManyWithoutCategoryInput)
    recurring?: RecurringCashflowUncheckedCreateNestedManyWithoutCategoryInput;
}
