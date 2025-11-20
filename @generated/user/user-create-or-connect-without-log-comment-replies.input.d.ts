import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutLogCommentRepliesInput } from './user-create-without-log-comment-replies.input';
export declare class UserCreateOrConnectWithoutLogCommentRepliesInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    create: UserCreateWithoutLogCommentRepliesInput;
}
