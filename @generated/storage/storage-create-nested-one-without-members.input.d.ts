import { StorageCreateWithoutMembersInput } from './storage-create-without-members.input';
import { StorageCreateOrConnectWithoutMembersInput } from './storage-create-or-connect-without-members.input';
import { Prisma } from '@prisma/client';
import { StorageWhereUniqueInput } from './storage-where-unique.input';
export declare class StorageCreateNestedOneWithoutMembersInput {
    create?: StorageCreateWithoutMembersInput;
    connectOrCreate?: StorageCreateOrConnectWithoutMembersInput;
    connect?: Prisma.AtLeast<StorageWhereUniqueInput, 'id'>;
}
