import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumCashflowTypeFieldUpdateOperationsInput } from '../prisma/enum-cashflow-type-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumRecurrenceFrequencyFieldUpdateOperationsInput } from '../prisma/enum-recurrence-frequency-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class RecurringCashflowUncheckedUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    categoryId?: IntFieldUpdateOperationsInput;

    @Field(() => EnumCashflowTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumCashflowTypeFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    amount?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    source?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumRecurrenceFrequencyFieldUpdateOperationsInput, {nullable:true})
    frequency?: EnumRecurrenceFrequencyFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    endDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    nextDueDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
