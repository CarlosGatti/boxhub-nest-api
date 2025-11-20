import { LogCommentCreateNestedOneWithoutRepliesInput } from '../log-comment/log-comment-create-nested-one-without-replies.input';
export declare class LogCommentReplyCreateWithoutUserInput {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    comment: LogCommentCreateNestedOneWithoutRepliesInput;
}
