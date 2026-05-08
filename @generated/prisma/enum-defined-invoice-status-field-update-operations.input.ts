import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceStatus } from './defined-invoice-status.enum';

@InputType()
export class EnumDefinedInvoiceStatusFieldUpdateOperationsInput {

    @Field(() => DefinedInvoiceStatus, {nullable:true})
    set?: keyof typeof DefinedInvoiceStatus;
}
