import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutReceivedMaterialsInput } from './user-create-without-received-materials.input';
export declare class UserCreateOrConnectWithoutReceivedMaterialsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: UserCreateWithoutReceivedMaterialsInput;
}
