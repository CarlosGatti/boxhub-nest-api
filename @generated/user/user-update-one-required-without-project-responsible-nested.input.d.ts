import { UserCreateWithoutProjectResponsibleInput } from './user-create-without-project-responsible.input';
import { UserCreateOrConnectWithoutProjectResponsibleInput } from './user-create-or-connect-without-project-responsible.input';
import { UserUpsertWithoutProjectResponsibleInput } from './user-upsert-without-project-responsible.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutProjectResponsibleInput } from './user-update-to-one-with-where-without-project-responsible.input';
export declare class UserUpdateOneRequiredWithoutProjectResponsibleNestedInput {
    create?: UserCreateWithoutProjectResponsibleInput;
    connectOrCreate?: UserCreateOrConnectWithoutProjectResponsibleInput;
    upsert?: UserUpsertWithoutProjectResponsibleInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: UserUpdateToOneWithWhereWithoutProjectResponsibleInput;
}
