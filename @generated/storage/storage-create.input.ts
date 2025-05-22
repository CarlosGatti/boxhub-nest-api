import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageMemberCreateNestedManyWithoutStorageInput } from '../storage-member/storage-member-create-nested-many-without-storage.input';
import { ContainerCreateNestedManyWithoutStorageInput } from '../container/container-create-nested-many-without-storage.input';

@InputType()
export class StorageCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => StorageMemberCreateNestedManyWithoutStorageInput, {nullable:true})
    members?: StorageMemberCreateNestedManyWithoutStorageInput;

    @Field(() => ContainerCreateNestedManyWithoutStorageInput, {nullable:true})
    containers?: ContainerCreateNestedManyWithoutStorageInput;
}
