import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CashflowEntryUpdateManyWithoutCategoryNestedInput } from '../cashflow-entry/cashflow-entry-update-many-without-category-nested.input';
import { Type } from 'class-transformer';
import { RecurringCashflowUpdateManyWithoutCategoryNestedInput } from '../recurring-cashflow/recurring-cashflow-update-many-without-category-nested.input';

@InputType()
export class CashflowCategoryUpdateWithoutUserInput {

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

    @Field(() => CashflowEntryUpdateManyWithoutCategoryNestedInput, {nullable:true})
    @Type(() => CashflowEntryUpdateManyWithoutCategoryNestedInput)
    entries?: CashflowEntryUpdateManyWithoutCategoryNestedInput;

    @Field(() => RecurringCashflowUpdateManyWithoutCategoryNestedInput, {nullable:true})
    @Type(() => RecurringCashflowUpdateManyWithoutCategoryNestedInput)
    recurring?: RecurringCashflowUpdateManyWithoutCategoryNestedInput;
}
