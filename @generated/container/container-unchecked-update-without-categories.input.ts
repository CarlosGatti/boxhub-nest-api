import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ItemUncheckedUpdateManyWithoutContainerNestedInput } from '../item/item-unchecked-update-many-without-container-nested.input';

@InputType()
export class ContainerUncheckedUpdateWithoutCategoriesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    qrCode?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    storageId?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ItemUncheckedUpdateManyWithoutContainerNestedInput, {nullable:true})
    items?: ItemUncheckedUpdateManyWithoutContainerNestedInput;
}
