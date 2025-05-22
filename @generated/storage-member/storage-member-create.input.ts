import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageRole } from '../prisma/storage-role.enum';
import { UserCreateNestedOneWithoutStorageMembershipsInput } from '../user/user-create-nested-one-without-storage-memberships.input';
import { StorageCreateNestedOneWithoutMembersInput } from '../storage/storage-create-nested-one-without-members.input';

@InputType()
export class StorageMemberCreateInput {

    @Field(() => StorageRole, {nullable:true})
    role?: keyof typeof StorageRole;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutStorageMembershipsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutStorageMembershipsInput;

    @Field(() => StorageCreateNestedOneWithoutMembersInput, {nullable:false})
    storage!: StorageCreateNestedOneWithoutMembersInput;
}
