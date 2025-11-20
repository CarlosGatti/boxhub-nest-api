import { UserCreateWithoutConstructionLogsInput } from './user-create-without-construction-logs.input';
import { UserCreateOrConnectWithoutConstructionLogsInput } from './user-create-or-connect-without-construction-logs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutConstructionLogsInput {
    create?: UserCreateWithoutConstructionLogsInput;
    connectOrCreate?: UserCreateOrConnectWithoutConstructionLogsInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
