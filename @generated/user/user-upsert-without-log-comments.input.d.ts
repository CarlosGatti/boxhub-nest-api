import { UserUpdateWithoutLogCommentsInput } from './user-update-without-log-comments.input';
import { UserCreateWithoutLogCommentsInput } from './user-create-without-log-comments.input';
import { UserWhereInput } from './user-where.input';
export declare class UserUpsertWithoutLogCommentsInput {
    update: UserUpdateWithoutLogCommentsInput;
    create: UserCreateWithoutLogCommentsInput;
    where?: UserWhereInput;
}
