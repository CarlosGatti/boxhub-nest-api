import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StorageUpdateOneRequiredWithoutContainersNestedInput } from '../storage/storage-update-one-required-without-containers-nested.input';
import { CategoryUpdateManyWithoutContainersNestedInput } from '../category/category-update-many-without-containers-nested.input';

@InputType()
export class ContainerUpdateWithoutItemsInput {

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

    @Field(() => StorageUpdateOneRequiredWithoutContainersNestedInput, {nullable:true})
    storage?: StorageUpdateOneRequiredWithoutContainersNestedInput;

    @Field(() => CategoryUpdateManyWithoutContainersNestedInput, {nullable:true})
    categories?: CategoryUpdateManyWithoutContainersNestedInput;
}
