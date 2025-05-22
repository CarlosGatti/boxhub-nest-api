import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StorageMemberUncheckedCreateNestedManyWithoutStorageInput } from '../storage-member/storage-member-unchecked-create-nested-many-without-storage.input';

@InputType()
export class StorageUncheckedCreateWithoutContainersInput {

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
}
