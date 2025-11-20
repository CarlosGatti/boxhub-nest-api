import { StorageRole } from '../prisma/storage-role.enum';
import { User } from '../user/user.model';
import { Storage } from '../storage/storage.model';
export declare class StorageMember {
    id: number;
    userId: number;
    storageId: number;
    role: keyof typeof StorageRole;
    createdAt: Date;
    updatedAt: Date;
    user?: User;
    storage?: Storage;
}
