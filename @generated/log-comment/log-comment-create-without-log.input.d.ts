import { UserCreateNestedOneWithoutLogCommentsInput } from '../user/user-create-nested-one-without-log-comments.input';
import { LogCommentReplyCreateNestedManyWithoutCommentInput } from '../log-comment-reply/log-comment-reply-create-nested-many-without-comment.input';
export declare class LogCommentCreateWithoutLogInput {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutLogCommentsInput;
    replies?: LogCommentReplyCreateNestedManyWithoutCommentInput;
}
