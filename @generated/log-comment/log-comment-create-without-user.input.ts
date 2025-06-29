import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConstructionLogCreateNestedOneWithoutCommentsInput } from '../construction-log/construction-log-create-nested-one-without-comments.input';
import { LogCommentReplyCreateNestedManyWithoutCommentInput } from '../log-comment-reply/log-comment-reply-create-nested-many-without-comment.input';

@InputType()
export class LogCommentCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ConstructionLogCreateNestedOneWithoutCommentsInput, {nullable:false})
    log!: ConstructionLogCreateNestedOneWithoutCommentsInput;

    @Field(() => LogCommentReplyCreateNestedManyWithoutCommentInput, {nullable:true})
    replies?: LogCommentReplyCreateNestedManyWithoutCommentInput;
}
