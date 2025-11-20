import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutLogCommentsInput } from './user-create-without-log-comments.input';
export declare class UserCreateOrConnectWithoutLogCommentsInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: UserCreateWithoutLogCommentsInput;
}
