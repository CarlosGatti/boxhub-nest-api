import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StorageWhereUniqueInput } from './storage-where-unique.input';
import { Type } from 'class-transformer';
import { StorageCreateWithoutContainersInput } from './storage-create-without-containers.input';

@InputType()
export class StorageCreateOrConnectWithoutContainersInput {

    @Field(() => StorageWhereUniqueInput, {nullable:false})
    @Type(() => StorageWhereUniqueInput)
    where!: Prisma.AtLeast<StorageWhereUniqueInput, 'id'>;

    @Field(() => StorageCreateWithoutContainersInput, {nullable:false})
    @Type(() => StorageCreateWithoutContainersInput)
    create!: StorageCreateWithoutContainersInput;
}
