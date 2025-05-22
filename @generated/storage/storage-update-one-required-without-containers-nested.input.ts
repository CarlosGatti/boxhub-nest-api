import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageCreateWithoutContainersInput } from './storage-create-without-containers.input';
import { Type } from 'class-transformer';
import { StorageCreateOrConnectWithoutContainersInput } from './storage-create-or-connect-without-containers.input';
import { StorageUpsertWithoutContainersInput } from './storage-upsert-without-containers.input';
import { Prisma } from '@prisma/client';
import { StorageWhereUniqueInput } from './storage-where-unique.input';
import { StorageUpdateToOneWithWhereWithoutContainersInput } from './storage-update-to-one-with-where-without-containers.input';

@InputType()
export class StorageUpdateOneRequiredWithoutContainersNestedInput {

    @Field(() => StorageCreateWithoutContainersInput, {nullable:true})
    @Type(() => StorageCreateWithoutContainersInput)
    create?: StorageCreateWithoutContainersInput;

    @Field(() => StorageCreateOrConnectWithoutContainersInput, {nullable:true})
    @Type(() => StorageCreateOrConnectWithoutContainersInput)
    connectOrCreate?: StorageCreateOrConnectWithoutContainersInput;

    @Field(() => StorageUpsertWithoutContainersInput, {nullable:true})
    @Type(() => StorageUpsertWithoutContainersInput)
    upsert?: StorageUpsertWithoutContainersInput;

    @Field(() => StorageWhereUniqueInput, {nullable:true})
    @Type(() => StorageWhereUniqueInput)
    connect?: Prisma.AtLeast<StorageWhereUniqueInput, 'id'>;

    @Field(() => StorageUpdateToOneWithWhereWithoutContainersInput, {nullable:true})
    @Type(() => StorageUpdateToOneWithWhereWithoutContainersInput)
    update?: StorageUpdateToOneWithWhereWithoutContainersInput;
}
