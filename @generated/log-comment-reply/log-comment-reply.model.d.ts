import { LogComment } from '../log-comment/log-comment.model';
import { User } from '../user/user.model';
export declare class LogCommentReply {
    id: number;
    commentId: number;
    userId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    comment?: LogComment;
    user?: User;
}
