import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutConstructionLogsInput } from './user-create-without-construction-logs.input';
export declare class UserCreateOrConnectWithoutConstructionLogsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: UserCreateWithoutConstructionLogsInput;
}
