import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerCreateNestedManyWithoutStorageInput } from '../container/container-create-nested-many-without-storage.input';

@InputType()
export class StorageCreateWithoutMembersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ContainerCreateNestedManyWithoutStorageInput, {nullable:true})
    containers?: ContainerCreateNestedManyWithoutStorageInput;
}
