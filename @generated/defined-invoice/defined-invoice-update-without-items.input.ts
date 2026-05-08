import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDefinedInvoiceStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-invoice-status-field-update-operations.input';
import { EnumDefinedInvoicePaymentStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-invoice-payment-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DefinedProjectUpdateOneRequiredWithoutInvoicesNestedInput } from '../defined-project/defined-project-update-one-required-without-invoices-nested.input';
import { DefinedClientUpdateOneRequiredWithoutInvoicesNestedInput } from '../defined-client/defined-client-update-one-required-without-invoices-nested.input';
import { UserUpdateOneWithoutDefinedInvoicesCreatedNestedInput } from '../user/user-update-one-without-defined-invoices-created-nested.input';

@InputType()
export class DefinedInvoiceUpdateWithoutItemsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    invoiceNumber?: StringFieldUpdateOperationsInput;

    @Field(() => EnumDefinedInvoiceStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedInvoiceStatusFieldUpdateOperationsInput;

    @Field(() => EnumDefinedInvoicePaymentStatusFieldUpdateOperationsInput, {nullable:true})
    paymentStatus?: EnumDefinedInvoicePaymentStatusFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    currency?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    issueDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    dueDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    sentAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    paidAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    subtotal?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    discountAmount?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    taxAmount?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    total?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    paymentInstructions?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    terms?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    publicToken?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    pdfUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedProjectUpdateOneRequiredWithoutInvoicesNestedInput, {nullable:true})
    @Type(() => DefinedProjectUpdateOneRequiredWithoutInvoicesNestedInput)
    project?: DefinedProjectUpdateOneRequiredWithoutInvoicesNestedInput;

    @Field(() => DefinedClientUpdateOneRequiredWithoutInvoicesNestedInput, {nullable:true})
    @Type(() => DefinedClientUpdateOneRequiredWithoutInvoicesNestedInput)
    client?: DefinedClientUpdateOneRequiredWithoutInvoicesNestedInput;

    @Field(() => UserUpdateOneWithoutDefinedInvoicesCreatedNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutDefinedInvoicesCreatedNestedInput)
    createdBy?: UserUpdateOneWithoutDefinedInvoicesCreatedNestedInput;
}
