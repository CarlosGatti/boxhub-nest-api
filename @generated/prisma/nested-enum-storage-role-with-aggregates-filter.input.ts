import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageRole } from './storage-role.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumStorageRoleFilter } from './nested-enum-storage-role-filter.input';

@InputType()
export class NestedEnumStorageRoleWithAggregatesFilter {

    @Field(() => StorageRole, {nullable:true})
    equals?: keyof typeof StorageRole;

    @Field(() => [StorageRole], {nullable:true})
    in?: Array<keyof typeof StorageRole>;

    @Field(() => [StorageRole], {nullable:true})
    notIn?: Array<keyof typeof StorageRole>;

    @Field(() => NestedEnumStorageRoleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumStorageRoleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumStorageRoleFilter, {nullable:true})
    _min?: NestedEnumStorageRoleFilter;

    @Field(() => NestedEnumStorageRoleFilter, {nullable:true})
    _max?: NestedEnumStorageRoleFilter;
}
