import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutProjectResponsibleInput } from './user-create-without-project-responsible.input';
export declare class UserCreateOrConnectWithoutProjectResponsibleInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: UserCreateWithoutProjectResponsibleInput;
}
