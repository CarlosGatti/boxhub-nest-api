import { StorageRole } from '../prisma/storage-role.enum';
export declare class StorageMemberCreateManyUserInput {
    id?: number;
    storageId: number;
    role?: keyof typeof StorageRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
