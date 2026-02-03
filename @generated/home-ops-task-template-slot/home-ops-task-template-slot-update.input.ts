import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { HomeOpsTaskTemplateUpdateOneRequiredWithoutSlotsNestedInput } from '../home-ops-task-template/home-ops-task-template-update-one-required-without-slots-nested.input';

@InputType()
export class HomeOpsTaskTemplateSlotUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    label?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    windowStart?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    windowEnd?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    order?: IntFieldUpdateOperationsInput;

    @Field(() => HomeOpsTaskTemplateUpdateOneRequiredWithoutSlotsNestedInput, {nullable:true})
    template?: HomeOpsTaskTemplateUpdateOneRequiredWithoutSlotsNestedInput;
}
