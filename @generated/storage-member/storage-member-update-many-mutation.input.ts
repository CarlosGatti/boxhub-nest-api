import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumStorageRoleFieldUpdateOperationsInput } from '../prisma/enum-storage-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class StorageMemberUpdateManyMutationInput {

    @Field(() => EnumStorageRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumStorageRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
