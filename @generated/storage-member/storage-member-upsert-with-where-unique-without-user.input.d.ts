import { Prisma } from '@prisma/client';
import { StorageMemberWhereUniqueInput } from './storage-member-where-unique.input';
import { StorageMemberUpdateWithoutUserInput } from './storage-member-update-without-user.input';
import { StorageMemberCreateWithoutUserInput } from './storage-member-create-without-user.input';
export declare class StorageMemberUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<StorageMemberWhereUniqueInput, 'id' | 'userId_storageId'>;
    update: StorageMemberUpdateWithoutUserInput;
    create: StorageMemberCreateWithoutUserInput;
}
