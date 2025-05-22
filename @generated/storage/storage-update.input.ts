import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StorageMemberUpdateManyWithoutStorageNestedInput } from '../storage-member/storage-member-update-many-without-storage-nested.input';
import { ContainerUpdateManyWithoutStorageNestedInput } from '../container/container-update-many-without-storage-nested.input';

@InputType()
export class StorageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StorageMemberUpdateManyWithoutStorageNestedInput, {nullable:true})
    members?: StorageMemberUpdateManyWithoutStorageNestedInput;

    @Field(() => ContainerUpdateManyWithoutStorageNestedInput, {nullable:true})
    containers?: ContainerUpdateManyWithoutStorageNestedInput;
}
