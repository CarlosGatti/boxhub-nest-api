import { StorageMemberCreateWithoutUserInput } from './storage-member-create-without-user.input';
import { StorageMemberCreateOrConnectWithoutUserInput } from './storage-member-create-or-connect-without-user.input';
import { StorageMemberUpsertWithWhereUniqueWithoutUserInput } from './storage-member-upsert-with-where-unique-without-user.input';
import { StorageMemberCreateManyUserInputEnvelope } from './storage-member-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';
import { StorageMemberUpdateWithWhereUniqueWithoutUserInput } from './storage-member-update-with-where-unique-without-user.input';
import { StorageMemberUpdateManyWithWhereWithoutUserInput } from './storage-member-update-many-with-where-without-user.input';
import { StorageMemberScalarWhereInput } from './storage-member-scalar-where.input';
export declare class StorageMemberUpdateManyWithoutUserNestedInput {
    create?: Array<StorageMemberCreateWithoutUserInput>;
    connectOrCreate?: Array<StorageMemberCreateOrConnectWithoutUserInput>;
    upsert?: Array<StorageMemberUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: StorageMemberCreateManyUserInputEnvelope;
    set?: Array<Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>>;
    disconnect?: Array<Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>>;
    delete?: Array<Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>>;
    connect?: Array<Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>>;
    update?: Array<StorageMemberUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<StorageMemberUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<StorageMemberScalarWhereInput>;
}
