import { UserCreateNestedOneWithoutLogCommentRepliesInput } from '../user/user-create-nested-one-without-log-comment-replies.input';
export declare class LogCommentReplyCreateWithoutCommentInput {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutLogCommentRepliesInput;
}
