import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageRole } from './storage-role.enum';

@InputType()
export class EnumStorageRoleFieldUpdateOperationsInput {

    @Field(() => StorageRole, {nullable:true})
    set?: keyof typeof StorageRole;
}
