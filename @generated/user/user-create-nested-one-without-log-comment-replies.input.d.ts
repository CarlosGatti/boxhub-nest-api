import { UserCreateWithoutLogCommentRepliesInput } from './user-create-without-log-comment-replies.input';
import { UserCreateOrConnectWithoutLogCommentRepliesInput } from './user-create-or-connect-without-log-comment-replies.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutLogCommentRepliesInput {
    create?: UserCreateWithoutLogCommentRepliesInput;
    connectOrCreate?: UserCreateOrConnectWithoutLogCommentRepliesInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
