import { UserCreateWithoutLogCommentRepliesInput } from './user-create-without-log-comment-replies.input';
import { UserCreateOrConnectWithoutLogCommentRepliesInput } from './user-create-or-connect-without-log-comment-replies.input';
import { UserUpsertWithoutLogCommentRepliesInput } from './user-upsert-without-log-comment-replies.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutLogCommentRepliesInput } from './user-update-to-one-with-where-without-log-comment-replies.input';
export declare class UserUpdateOneRequiredWithoutLogCommentRepliesNestedInput {
    create?: UserCreateWithoutLogCommentRepliesInput;
    connectOrCreate?: UserCreateOrConnectWithoutLogCommentRepliesInput;
    upsert?: UserUpsertWithoutLogCommentRepliesInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    update?: UserUpdateToOneWithWhereWithoutLogCommentRepliesInput;
}
