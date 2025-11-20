import { UserCreateWithoutResponsibleInspectionsInput } from './user-create-without-responsible-inspections.input';
import { UserCreateOrConnectWithoutResponsibleInspectionsInput } from './user-create-or-connect-without-responsible-inspections.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutResponsibleInspectionsInput {
    create?: UserCreateWithoutResponsibleInspectionsInput;
    connectOrCreate?: UserCreateOrConnectWithoutResponsibleInspectionsInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
