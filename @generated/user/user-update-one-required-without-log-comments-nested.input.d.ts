import { UserCreateWithoutLogCommentsInput } from './user-create-without-log-comments.input';
import { UserCreateOrConnectWithoutLogCommentsInput } from './user-create-or-connect-without-log-comments.input';
import { UserUpsertWithoutLogCommentsInput } from './user-upsert-without-log-comments.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutLogCommentsInput } from './user-update-to-one-with-where-without-log-comments.input';
export declare class UserUpdateOneRequiredWithoutLogCommentsNestedInput {
    create?: UserCreateWithoutLogCommentsInput;
    connectOrCreate?: UserCreateOrConnectWithoutLogCommentsInput;
    upsert?: UserUpsertWithoutLogCommentsInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: UserUpdateToOneWithWhereWithoutLogCommentsInput;
}
