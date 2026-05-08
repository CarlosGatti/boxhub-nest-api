import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoicePaymentStatus } from './defined-invoice-payment-status.enum';

@InputType()
export class EnumDefinedInvoicePaymentStatusFieldUpdateOperationsInput {

    @Field(() => DefinedInvoicePaymentStatus, {nullable:true})
    set?: keyof typeof DefinedInvoicePaymentStatus;
}
