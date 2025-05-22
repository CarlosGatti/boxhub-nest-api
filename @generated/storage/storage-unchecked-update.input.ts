import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StorageMemberUncheckedUpdateManyWithoutStorageNestedInput } from '../storage-member/storage-member-unchecked-update-many-without-storage-nested.input';
import { ContainerUncheckedUpdateManyWithoutStorageNestedInput } from '../container/container-unchecked-update-many-without-storage-nested.input';

@InputType()
export class StorageUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StorageMemberUncheckedUpdateManyWithoutStorageNestedInput, {nullable:true})
    members?: StorageMemberUncheckedUpdateManyWithoutStorageNestedInput;

    @Field(() => ContainerUncheckedUpdateManyWithoutStorageNestedInput, {nullable:true})
    containers?: ContainerUncheckedUpdateManyWithoutStorageNestedInput;
}
