import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConstructionLogCreateNestedOneWithoutCommentsInput } from '../construction-log/construction-log-create-nested-one-without-comments.input';
import { UserCreateNestedOneWithoutLogCommentsInput } from '../user/user-create-nested-one-without-log-comments.input';
import { LogCommentReplyCreateNestedManyWithoutCommentInput } from '../log-comment-reply/log-comment-reply-create-nested-many-without-comment.input';

@InputType()
export class LogCommentCreateInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ConstructionLogCreateNestedOneWithoutCommentsInput, {nullable:false})
    log!: ConstructionLogCreateNestedOneWithoutCommentsInput;

    @Field(() => UserCreateNestedOneWithoutLogCommentsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutLogCommentsInput;

    @Field(() => LogCommentReplyCreateNestedManyWithoutCommentInput, {nullable:true})
    replies?: LogCommentReplyCreateNestedManyWithoutCommentInput;
}
