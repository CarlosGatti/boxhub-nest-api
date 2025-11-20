import { LogType } from '../prisma/log-type.enum';
import { Project } from '../project/project.model';
import { User } from '../user/user.model';
import { LogComment } from '../log-comment/log-comment.model';
import { ConstructionLogCount } from './construction-log-count.output';
export declare class ConstructionLog {
    id: number;
    projectId: number;
    userId: number;
    title: string;
    description: string;
    type: keyof typeof LogType;
    images: any | null;
    createdAt: Date;
    project?: Project;
    user?: User;
    comments?: Array<LogComment>;
    _count?: ConstructionLogCount;
}
