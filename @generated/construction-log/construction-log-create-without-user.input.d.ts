import { LogType } from '../prisma/log-type.enum';
import { ProjectCreateNestedOneWithoutLogsInput } from '../project/project-create-nested-one-without-logs.input';
import { LogCommentCreateNestedManyWithoutLogInput } from '../log-comment/log-comment-create-nested-many-without-log.input';
export declare class ConstructionLogCreateWithoutUserInput {
    title: string;
    description: string;
    type: keyof typeof LogType;
    images?: any;
    createdAt?: Date | string;
    project: ProjectCreateNestedOneWithoutLogsInput;
    comments?: LogCommentCreateNestedManyWithoutLogInput;
}
