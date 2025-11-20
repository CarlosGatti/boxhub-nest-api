import { ConstructionLog } from '../construction-log/construction-log.model';
import { User } from '../user/user.model';
import { LogCommentReply } from '../log-comment-reply/log-comment-reply.model';
import { LogCommentCount } from './log-comment-count.output';
export declare class LogComment {
    id: number;
    logId: number;
    userId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    log?: ConstructionLog;
    user?: User;
    replies?: Array<LogCommentReply>;
    _count?: LogCommentCount;
}
