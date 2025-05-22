import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageMemberCreateWithoutStorageInput } from './storage-member-create-without-storage.input';
import { Type } from 'class-transformer';
import { StorageMemberCreateOrConnectWithoutStorageInput } from './storage-member-create-or-connect-without-storage.input';
import { StorageMemberCreateManyStorageInputEnvelope } from './storage-member-create-many-storage-input-envelope.input';
import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';

@InputType()
export class StorageMemberUncheckedCreateNestedManyWithoutStorageInput {

    @Field(() => [StorageMemberCreateWithoutStorageInput], {nullable:true})
    @Type(() => StorageMemberCreateWithoutStorageInput)
    create?: Array<StorageMemberCreateWithoutStorageInput>;

    @Field(() => [StorageMemberCreateOrConnectWithoutStorageInput], {nullable:true})
    @Type(() => StorageMemberCreateOrConnectWithoutStorageInput)
    connectOrCreate?: Array<StorageMemberCreateOrConnectWithoutStorageInput>;

    @Field(() => StorageMemberCreateManyStorageInputEnvelope, {nullable:true})
    @Type(() => StorageMemberCreateManyStorageInputEnvelope)
    createMany?: StorageMemberCreateManyStorageInputEnvelope;

    @Field(() => [StorageMemberWhereUniqueInput], {nullable:true})
    @Type(() => StorageMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>>;
}
