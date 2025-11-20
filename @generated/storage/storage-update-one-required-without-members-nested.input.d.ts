import { StorageCreateWithoutMembersInput } from './storage-create-without-members.input';
import { StorageCreateOrConnectWithoutMembersInput } from './storage-create-or-connect-without-members.input';
import { StorageUpsertWithoutMembersInput } from './storage-upsert-without-members.input';
import { Prisma } from '@prisma/client';
import { StorageWhereUniqueInput } from './storage-where-unique.input';
import { StorageUpdateToOneWithWhereWithoutMembersInput } from './storage-update-to-one-with-where-without-members.input';
export declare class StorageUpdateOneRequiredWithoutMembersNestedInput {
    create?: StorageCreateWithoutMembersInput;
    connectOrCreate?: StorageCreateOrConnectWithoutMembersInput;
    upsert?: StorageUpsertWithoutMembersInput;
    connect?: Prisma.AtLeast<StorageWhereUniqueInput, 'id'>;
    update?: StorageUpdateToOneWithWhereWithoutMembersInput;
}
