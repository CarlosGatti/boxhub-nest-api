import { Prisma } from '@prisma/client';
import { StorageWhereUniqueInput } from './storage-where-unique.input';
import { StorageCreateWithoutMembersInput } from './storage-create-without-members.input';
export declare class StorageCreateOrConnectWithoutMembersInput {
    where: Prisma.AtLeast<StorageWhereUniqueInput, 'id'>;
    create: StorageCreateWithoutMembersInput;
}
