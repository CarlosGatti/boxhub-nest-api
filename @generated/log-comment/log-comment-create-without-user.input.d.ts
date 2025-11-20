import { ConstructionLogCreateNestedOneWithoutCommentsInput } from '../construction-log/construction-log-create-nested-one-without-comments.input';
import { LogCommentReplyCreateNestedManyWithoutCommentInput } from '../log-comment-reply/log-comment-reply-create-nested-many-without-comment.input';
export declare class LogCommentCreateWithoutUserInput {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    log: ConstructionLogCreateNestedOneWithoutCommentsInput;
    replies?: LogCommentReplyCreateNestedManyWithoutCommentInput;
}
