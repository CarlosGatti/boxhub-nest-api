import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';
import { StorageMemberUpdateWithoutUserInput } from './storage-member-update-without-user.input';
export declare class StorageMemberUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>;
    data: StorageMemberUpdateWithoutUserInput;
}
