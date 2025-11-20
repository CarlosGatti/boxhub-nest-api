import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutResponsibleInspectionsInput } from './user-create-without-responsible-inspections.input';
export declare class UserCreateOrConnectWithoutResponsibleInspectionsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: UserCreateWithoutResponsibleInspectionsInput;
}
