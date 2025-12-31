import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCashflowCategoriesNestedInput } from '../user/user-update-one-required-without-cashflow-categories-nested.input';
import { Type } from 'class-transformer';
import { CashflowEntryUpdateManyWithoutCategoryNestedInput } from '../cashflow-entry/cashflow-entry-update-many-without-category-nested.input';

@InputType()
export class CashflowCategoryUpdateWithoutRecurringInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    color?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    icon?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCashflowCategoriesNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutCashflowCategoriesNestedInput)
    user?: UserUpdateOneRequiredWithoutCashflowCategoriesNestedInput;

    @Field(() => CashflowEntryUpdateManyWithoutCategoryNestedInput, {nullable:true})
    @Type(() => CashflowEntryUpdateManyWithoutCategoryNestedInput)
    entries?: CashflowEntryUpdateManyWithoutCategoryNestedInput;
}
