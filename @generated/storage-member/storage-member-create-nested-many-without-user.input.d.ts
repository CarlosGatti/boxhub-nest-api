import { StorageMemberCreateWithoutUserInput } from './storage-member-create-without-user.input';
import { StorageMemberCreateOrConnectWithoutUserInput } from './storage-member-create-or-connect-without-user.input';
import { StorageMemberCreateManyUserInputEnvelope } from './storage-member-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';
export declare class StorageMemberCreateNestedManyWithoutUserInput {
    create?: Array<StorageMemberCreateWithoutUserInput>;
    connectOrCreate?: Array<StorageMemberCreateOrConnectWithoutUserInput>;
    createMany?: StorageMemberCreateManyUserInputEnvelope;
    connect?: Array<Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>>;
}
