import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';
import { Type } from 'class-transformer';
import { StorageMemberCreateWithoutStorageInput } from './storage-member-create-without-storage.input';

@InputType()
export class StorageMemberCreateOrConnectWithoutStorageInput {

    @Field(() => StorageMemberWhereUniqueInput, {nullable:false})
    @Type(() => StorageMemberWhereUniqueInput)
    where!: Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>;

    @Field(() => StorageMemberCreateWithoutStorageInput, {nullable:false})
    @Type(() => StorageMemberCreateWithoutStorageInput)
    create!: StorageMemberCreateWithoutStorageInput;
}
