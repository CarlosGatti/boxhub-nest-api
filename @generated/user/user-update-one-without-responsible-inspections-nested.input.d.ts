import { UserCreateWithoutResponsibleInspectionsInput } from './user-create-without-responsible-inspections.input';
import { UserCreateOrConnectWithoutResponsibleInspectionsInput } from './user-create-or-connect-without-responsible-inspections.input';
import { UserUpsertWithoutResponsibleInspectionsInput } from './user-upsert-without-responsible-inspections.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutResponsibleInspectionsInput } from './user-update-to-one-with-where-without-responsible-inspections.input';
export declare class UserUpdateOneWithoutResponsibleInspectionsNestedInput {
    create?: UserCreateWithoutResponsibleInspectionsInput;
    connectOrCreate?: UserCreateOrConnectWithoutResponsibleInspectionsInput;
    upsert?: UserUpsertWithoutResponsibleInspectionsInput;
    disconnect?: UserWhereInput;
    delete?: UserWhereInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: UserUpdateToOneWithWhereWithoutResponsibleInspectionsInput;
}
