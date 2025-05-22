import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageRole } from './storage-role.enum';

@InputType()
export class NestedEnumStorageRoleFilter {

    @Field(() => StorageRole, {nullable:true})
    equals?: keyof typeof StorageRole;

    @Field(() => [StorageRole], {nullable:true})
    in?: Array<keyof typeof StorageRole>;

    @Field(() => [StorageRole], {nullable:true})
    notIn?: Array<keyof typeof StorageRole>;

    @Field(() => NestedEnumStorageRoleFilter, {nullable:true})
    not?: NestedEnumStorageRoleFilter;
}
