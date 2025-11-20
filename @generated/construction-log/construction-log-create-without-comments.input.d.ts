import { LogType } from '../prisma/log-type.enum';
import { ProjectCreateNestedOneWithoutLogsInput } from '../project/project-create-nested-one-without-logs.input';
import { UserCreateNestedOneWithoutConstructionLogsInput } from '../user/user-create-nested-one-without-construction-logs.input';
export declare class ConstructionLogCreateWithoutCommentsInput {
    title: string;
    description: string;
    type: keyof typeof LogType;
    images?: any;
    createdAt?: Date | string;
    project: ProjectCreateNestedOneWithoutLogsInput;
    user: UserCreateNestedOneWithoutConstructionLogsInput;
}
