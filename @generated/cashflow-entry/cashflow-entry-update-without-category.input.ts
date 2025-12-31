import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumCashflowTypeFieldUpdateOperationsInput } from '../prisma/enum-cashflow-type-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCashflowEntriesNestedInput } from '../user/user-update-one-required-without-cashflow-entries-nested.input';

@InputType()
export class CashflowEntryUpdateWithoutCategoryInput {

    @Field(() => EnumCashflowTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumCashflowTypeFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    amount?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCashflowEntriesNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutCashflowEntriesNestedInput)
    user?: UserUpdateOneRequiredWithoutCashflowEntriesNestedInput;
}
