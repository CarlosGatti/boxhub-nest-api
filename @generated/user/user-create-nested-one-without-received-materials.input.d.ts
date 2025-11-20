import { UserCreateWithoutReceivedMaterialsInput } from './user-create-without-received-materials.input';
import { UserCreateOrConnectWithoutReceivedMaterialsInput } from './user-create-or-connect-without-received-materials.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutReceivedMaterialsInput {
    create?: UserCreateWithoutReceivedMaterialsInput;
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMaterialsInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
