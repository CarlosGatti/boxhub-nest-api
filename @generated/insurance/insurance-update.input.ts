import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SubcontractorUpdateOneRequiredWithoutInsurancesNestedInput } from '../subcontractor/subcontractor-update-one-required-without-insurances-nested.input';

@InputType()
export class InsuranceUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    company?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiration?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    documentUrl?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => SubcontractorUpdateOneRequiredWithoutInsurancesNestedInput, {nullable:true})
    subcontractor?: SubcontractorUpdateOneRequiredWithoutInsurancesNestedInput;
}
