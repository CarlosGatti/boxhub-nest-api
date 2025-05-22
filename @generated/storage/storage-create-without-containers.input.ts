import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageMemberCreateNestedManyWithoutStorageInput } from '../storage-member/storage-member-create-nested-many-without-storage.input';

@InputType()
export class StorageCreateWithoutContainersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => StorageMemberCreateNestedManyWithoutStorageInput, {nullable:true})
    members?: StorageMemberCreateNestedManyWithoutStorageInput;
}
