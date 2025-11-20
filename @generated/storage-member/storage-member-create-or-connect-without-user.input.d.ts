import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';
import { StorageMemberCreateWithoutUserInput } from './storage-member-create-without-user.input';
export declare class StorageMemberCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>;
    create: StorageMemberCreateWithoutUserInput;
}
