import { LogType } from '../prisma/log-type.enum';
import { UserCreateNestedOneWithoutConstructionLogsInput } from '../user/user-create-nested-one-without-construction-logs.input';
import { LogCommentCreateNestedManyWithoutLogInput } from '../log-comment/log-comment-create-nested-many-without-log.input';
export declare class ConstructionLogCreateWithoutProjectInput {
    title: string;
    description: string;
    type: keyof typeof LogType;
    images?: any;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutConstructionLogsInput;
    comments?: LogCommentCreateNestedManyWithoutLogInput;
}
