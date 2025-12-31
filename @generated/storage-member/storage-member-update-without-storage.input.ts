import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumStorageRoleFieldUpdateOperationsInput } from '../prisma/enum-storage-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutStorageMembershipsNestedInput } from '../user/user-update-one-required-without-storage-memberships-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class StorageMemberUpdateWithoutStorageInput {

    @Field(() => EnumStorageRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumStorageRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutStorageMembershipsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutStorageMembershipsNestedInput)
    user?: UserUpdateOneRequiredWithoutStorageMembershipsNestedInput;
}
