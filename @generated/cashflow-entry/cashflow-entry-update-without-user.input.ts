import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumCashflowTypeFieldUpdateOperationsInput } from '../prisma/enum-cashflow-type-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CashflowCategoryUpdateOneRequiredWithoutEntriesNestedInput } from '../cashflow-category/cashflow-category-update-one-required-without-entries-nested.input';

@InputType()
export class CashflowEntryUpdateWithoutUserInput {

    @Field(() => EnumCashflowTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumCashflowTypeFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    amount?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    source?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => CashflowCategoryUpdateOneRequiredWithoutEntriesNestedInput, {nullable:true})
    @Type(() => CashflowCategoryUpdateOneRequiredWithoutEntriesNestedInput)
    category?: CashflowCategoryUpdateOneRequiredWithoutEntriesNestedInput;
}
