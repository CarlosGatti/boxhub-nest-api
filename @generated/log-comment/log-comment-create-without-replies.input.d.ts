import { ConstructionLogCreateNestedOneWithoutCommentsInput } from '../construction-log/construction-log-create-nested-one-without-comments.input';
import { UserCreateNestedOneWithoutLogCommentsInput } from '../user/user-create-nested-one-without-log-comments.input';
export declare class LogCommentCreateWithoutRepliesInput {
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    log: ConstructionLogCreateNestedOneWithoutCommentsInput;
    user: UserCreateNestedOneWithoutLogCommentsInput;
}
