import { StorageRole } from '../prisma/storage-role.enum';
import { StorageCreateNestedOneWithoutMembersInput } from '../storage/storage-create-nested-one-without-members.input';
export declare class StorageMemberCreateWithoutUserInput {
    role?: keyof typeof StorageRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    storage: StorageCreateNestedOneWithoutMembersInput;
}
