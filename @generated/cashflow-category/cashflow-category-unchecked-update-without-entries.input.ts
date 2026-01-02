import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumCashflowTypeFieldUpdateOperationsInput } from '../prisma/enum-cashflow-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RecurringCashflowUncheckedUpdateManyWithoutCategoryNestedInput } from '../recurring-cashflow/recurring-cashflow-unchecked-update-many-without-category-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class CashflowCategoryUncheckedUpdateWithoutEntriesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    userId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumCashflowTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumCashflowTypeFieldUpdateOperationsInput;

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

    @Field(() => RecurringCashflowUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    @Type(() => RecurringCashflowUncheckedUpdateManyWithoutCategoryNestedInput)
    recurring?: RecurringCashflowUncheckedUpdateManyWithoutCategoryNestedInput;
}
