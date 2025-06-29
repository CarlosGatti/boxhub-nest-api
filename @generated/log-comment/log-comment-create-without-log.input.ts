import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutLogCommentsInput } from '../user/user-create-nested-one-without-log-comments.input';
import { LogCommentReplyCreateNestedManyWithoutCommentInput } from '../log-comment-reply/log-comment-reply-create-nested-many-without-comment.input';

@InputType()
export class LogCommentCreateWithoutLogInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutLogCommentsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutLogCommentsInput;

    @Field(() => LogCommentReplyCreateNestedManyWithoutCommentInput, {nullable:true})
    replies?: LogCommentReplyCreateNestedManyWithoutCommentInput;
}
