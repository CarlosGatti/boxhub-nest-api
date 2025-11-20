import { UserCreateWithoutConstructionLogsInput } from './user-create-without-construction-logs.input';
import { UserCreateOrConnectWithoutConstructionLogsInput } from './user-create-or-connect-without-construction-logs.input';
import { UserUpsertWithoutConstructionLogsInput } from './user-upsert-without-construction-logs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutConstructionLogsInput } from './user-update-to-one-with-where-without-construction-logs.input';
export declare class UserUpdateOneRequiredWithoutConstructionLogsNestedInput {
    create?: UserCreateWithoutConstructionLogsInput;
    connectOrCreate?: UserCreateOrConnectWithoutConstructionLogsInput;
    upsert?: UserUpsertWithoutConstructionLogsInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: UserUpdateToOneWithWhereWithoutConstructionLogsInput;
}
