import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';
import { Type } from 'class-transformer';
import { StorageMemberUpdateWithoutStorageInput } from './storage-member-update-without-storage.input';
import { StorageMemberCreateWithoutStorageInput } from './storage-member-create-without-storage.input';

@InputType()
export class StorageMemberUpsertWithWhereUniqueWithoutStorageInput {

    @Field(() => StorageMemberWhereUniqueInput, {nullable:false})
    @Type(() => StorageMemberWhereUniqueInput)
    where!: Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>;

    @Field(() => StorageMemberUpdateWithoutStorageInput, {nullable:false})
    @Type(() => StorageMemberUpdateWithoutStorageInput)
    update!: StorageMemberUpdateWithoutStorageInput;

    @Field(() => StorageMemberCreateWithoutStorageInput, {nullable:false})
    @Type(() => StorageMemberCreateWithoutStorageInput)
    create!: StorageMemberCreateWithoutStorageInput;
}
