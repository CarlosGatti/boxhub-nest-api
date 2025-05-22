import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumStorageRoleFieldUpdateOperationsInput } from '../prisma/enum-storage-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StorageUpdateOneRequiredWithoutMembersNestedInput } from '../storage/storage-update-one-required-without-members-nested.input';

@InputType()
export class StorageMemberUpdateWithoutUserInput {

    @Field(() => EnumStorageRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumStorageRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StorageUpdateOneRequiredWithoutMembersNestedInput, {nullable:true})
    storage?: StorageUpdateOneRequiredWithoutMembersNestedInput;
}
