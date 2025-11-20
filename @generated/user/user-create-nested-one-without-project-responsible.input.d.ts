import { UserCreateWithoutProjectResponsibleInput } from './user-create-without-project-responsible.input';
import { UserCreateOrConnectWithoutProjectResponsibleInput } from './user-create-or-connect-without-project-responsible.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutProjectResponsibleInput {
    create?: UserCreateWithoutProjectResponsibleInput;
    connectOrCreate?: UserCreateOrConnectWithoutProjectResponsibleInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
