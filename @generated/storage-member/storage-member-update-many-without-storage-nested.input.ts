import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageMemberCreateWithoutStorageInput } from './storage-member-create-without-storage.input';
import { Type } from 'class-transformer';
import { StorageMemberCreateOrConnectWithoutStorageInput } from './storage-member-create-or-connect-without-storage.input';
import { StorageMemberUpsertWithWhereUniqueWithoutStorageInput } from './storage-member-upsert-with-where-unique-without-storage.input';
import { StorageMemberCreateManyStorageInputEnvelope } from './storage-member-create-many-storage-input-envelope.input';
import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';
import { StorageMemberUpdateWithWhereUniqueWithoutStorageInput } from './storage-member-update-with-where-unique-without-storage.input';
import { StorageMemberUpdateManyWithWhereWithoutStorageInput } from './storage-member-update-many-with-where-without-storage.input';
import { StorageMemberScalarWhereInput } from './storage-member-scalar-where.input';

@InputType()
export class StorageMemberUpdateManyWithoutStorageNestedInput {

    @Field(() => [StorageMemberCreateWithoutStorageInput], {nullable:true})
    @Type(() => StorageMemberCreateWithoutStorageInput)
    create?: Array<StorageMemberCreateWithoutStorageInput>;

    @Field(() => [StorageMemberCreateOrConnectWithoutStorageInput], {nullable:true})
    @Type(() => StorageMemberCreateOrConnectWithoutStorageInput)
    connectOrCreate?: Array<StorageMemberCreateOrConnectWithoutStorageInput>;

    @Field(() => [StorageMemberUpsertWithWhereUniqueWithoutStorageInput], {nullable:true})
    @Type(() => StorageMemberUpsertWithWhereUniqueWithoutStorageInput)
    upsert?: Array<StorageMemberUpsertWithWhereUniqueWithoutStorageInput>;

    @Field(() => StorageMemberCreateManyStorageInputEnvelope, {nullable:true})
    @Type(() => StorageMemberCreateManyStorageInputEnvelope)
    createMany?: StorageMemberCreateManyStorageInputEnvelope;

    @Field(() => [StorageMemberWhereUniqueInput], {nullable:true})
    @Type(() => StorageMemberWhereUniqueInput)
    set?: Array<Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>>;

    @Field(() => [StorageMemberWhereUniqueInput], {nullable:true})
    @Type(() => StorageMemberWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>>;

    @Field(() => [StorageMemberWhereUniqueInput], {nullable:true})
    @Type(() => StorageMemberWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>>;

    @Field(() => [StorageMemberWhereUniqueInput], {nullable:true})
    @Type(() => StorageMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>>;

    @Field(() => [StorageMemberUpdateWithWhereUniqueWithoutStorageInput], {nullable:true})
    @Type(() => StorageMemberUpdateWithWhereUniqueWithoutStorageInput)
    update?: Array<StorageMemberUpdateWithWhereUniqueWithoutStorageInput>;

    @Field(() => [StorageMemberUpdateManyWithWhereWithoutStorageInput], {nullable:true})
    @Type(() => StorageMemberUpdateManyWithWhereWithoutStorageInput)
    updateMany?: Array<StorageMemberUpdateManyWithWhereWithoutStorageInput>;

    @Field(() => [StorageMemberScalarWhereInput], {nullable:true})
    @Type(() => StorageMemberScalarWhereInput)
    deleteMany?: Array<StorageMemberScalarWhereInput>;
}
