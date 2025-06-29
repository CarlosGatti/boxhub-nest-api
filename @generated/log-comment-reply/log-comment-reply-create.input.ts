import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentCreateNestedOneWithoutRepliesInput } from '../log-comment/log-comment-create-nested-one-without-replies.input';
import { UserCreateNestedOneWithoutLogCommentRepliesInput } from '../user/user-create-nested-one-without-log-comment-replies.input';

@InputType()
export class LogCommentReplyCreateInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => LogCommentCreateNestedOneWithoutRepliesInput, {nullable:false})
    comment!: LogCommentCreateNestedOneWithoutRepliesInput;

    @Field(() => UserCreateNestedOneWithoutLogCommentRepliesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutLogCommentRepliesInput;
}
