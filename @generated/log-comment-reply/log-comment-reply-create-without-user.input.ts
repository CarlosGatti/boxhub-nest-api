import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentCreateNestedOneWithoutRepliesInput } from '../log-comment/log-comment-create-nested-one-without-replies.input';

@InputType()
export class LogCommentReplyCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => LogCommentCreateNestedOneWithoutRepliesInput, {nullable:false})
    comment!: LogCommentCreateNestedOneWithoutRepliesInput;
}
