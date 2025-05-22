import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StorageMemberUncheckedCreateNestedManyWithoutStorageInput } from '../storage-member/storage-member-unchecked-create-nested-many-without-storage.input';
import { ContainerUncheckedCreateNestedManyWithoutStorageInput } from '../container/container-unchecked-create-nested-many-without-storage.input';

@InputType()
export class StorageUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => StorageMemberUncheckedCreateNestedManyWithoutStorageInput, {nullable:true})
    members?: StorageMemberUncheckedCreateNestedManyWithoutStorageInput;

    @Field(() => ContainerUncheckedCreateNestedManyWithoutStorageInput, {nullable:true})
    containers?: ContainerUncheckedCreateNestedManyWithoutStorageInput;
}
