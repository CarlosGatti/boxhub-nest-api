import { UserCreateWithoutReceivedMaterialsInput } from './user-create-without-received-materials.input';
import { UserCreateOrConnectWithoutReceivedMaterialsInput } from './user-create-or-connect-without-received-materials.input';
import { UserUpsertWithoutReceivedMaterialsInput } from './user-upsert-without-received-materials.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReceivedMaterialsInput } from './user-update-to-one-with-where-without-received-materials.input';
export declare class UserUpdateOneWithoutReceivedMaterialsNestedInput {
    create?: UserCreateWithoutReceivedMaterialsInput;
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMaterialsInput;
    upsert?: UserUpsertWithoutReceivedMaterialsInput;
    disconnect?: UserWhereInput;
    delete?: UserWhereInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: UserUpdateToOneWithWhereWithoutReceivedMaterialsInput;
}
