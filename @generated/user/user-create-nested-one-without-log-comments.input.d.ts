import { UserCreateWithoutLogCommentsInput } from './user-create-without-log-comments.input';
import { UserCreateOrConnectWithoutLogCommentsInput } from './user-create-or-connect-without-log-comments.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutLogCommentsInput {
    create?: UserCreateWithoutLogCommentsInput;
    connectOrCreate?: UserCreateOrConnectWithoutLogCommentsInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
