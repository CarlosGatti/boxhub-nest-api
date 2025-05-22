import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageCreateWithoutContainersInput } from './storage-create-without-containers.input';
import { Type } from 'class-transformer';
import { StorageCreateOrConnectWithoutContainersInput } from './storage-create-or-connect-without-containers.input';
import { Prisma } from '@prisma/client';
import { StorageWhereUniqueInput } from './storage-where-unique.input';

@InputType()
export class StorageCreateNestedOneWithoutContainersInput {

    @Field(() => StorageCreateWithoutContainersInput, {nullable:true})
    @Type(() => StorageCreateWithoutContainersInput)
    create?: StorageCreateWithoutContainersInput;

    @Field(() => StorageCreateOrConnectWithoutContainersInput, {nullable:true})
    @Type(() => StorageCreateOrConnectWithoutContainersInput)
    connectOrCreate?: StorageCreateOrConnectWithoutContainersInput;

    @Field(() => StorageWhereUniqueInput, {nullable:true})
    @Type(() => StorageWhereUniqueInput)
    connect?: Prisma.AtLeast<StorageWhereUniqueInput, 'id'>;
}
