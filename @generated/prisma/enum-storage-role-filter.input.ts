import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageRole } from './storage-role.enum';
import { NestedEnumStorageRoleFilter } from './nested-enum-storage-role-filter.input';

@InputType()
export class EnumStorageRoleFilter {

    @Field(() => StorageRole, {nullable:true})
    equals?: keyof typeof StorageRole;

    @Field(() => [StorageRole], {nullable:true})
    in?: Array<keyof typeof StorageRole>;

    @Field(() => [StorageRole], {nullable:true})
    notIn?: Array<keyof typeof StorageRole>;

    @Field(() => NestedEnumStorageRoleFilter, {nullable:true})
    not?: NestedEnumStorageRoleFilter;
}
