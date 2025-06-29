import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutLogCommentRepliesInput } from '../user/user-create-nested-one-without-log-comment-replies.input';

@InputType()
export class LogCommentReplyCreateWithoutCommentInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutLogCommentRepliesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutLogCommentRepliesInput;
}
