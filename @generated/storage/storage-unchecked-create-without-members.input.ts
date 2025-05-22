import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ContainerUncheckedCreateNestedManyWithoutStorageInput } from '../container/container-unchecked-create-nested-many-without-storage.input';

@InputType()
export class StorageUncheckedCreateWithoutMembersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ContainerUncheckedCreateNestedManyWithoutStorageInput, {nullable:true})
    containers?: ContainerUncheckedCreateNestedManyWithoutStorageInput;
}
