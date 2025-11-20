import { StorageUpdateWithoutMembersInput } from './storage-update-without-members.input';
import { StorageCreateWithoutMembersInput } from './storage-create-without-members.input';
import { StorageWhereInput } from './storage-where.input';
export declare class StorageUpsertWithoutMembersInput {
    update: StorageUpdateWithoutMembersInput;
    create: StorageCreateWithoutMembersInput;
    where?: StorageWhereInput;
}
