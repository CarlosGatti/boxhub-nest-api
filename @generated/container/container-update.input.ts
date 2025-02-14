import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FamilyUpdateOneRequiredWithoutContainersNestedInput } from '../family/family-update-one-required-without-containers-nested.input';
import { CategoryUpdateManyWithoutContainersNestedInput } from '../category/category-update-many-without-containers-nested.input';
import { ItemUpdateManyWithoutContainerNestedInput } from '../item/item-update-many-without-container-nested.input';

@InputType()
export class ContainerUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    qrCode?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FamilyUpdateOneRequiredWithoutContainersNestedInput, {nullable:true})
    family?: FamilyUpdateOneRequiredWithoutContainersNestedInput;

    @Field(() => CategoryUpdateManyWithoutContainersNestedInput, {nullable:true})
    categories?: CategoryUpdateManyWithoutContainersNestedInput;

    @Field(() => ItemUpdateManyWithoutContainerNestedInput, {nullable:true})
    items?: ItemUpdateManyWithoutContainerNestedInput;
}
