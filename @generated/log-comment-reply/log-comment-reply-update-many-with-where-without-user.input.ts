import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentReplyScalarWhereInput } from './log-comment-reply-scalar-where.input';
import { Type } from 'class-transformer';
import { LogCommentReplyUpdateManyMutationInput } from './log-comment-reply-update-many-mutation.input';

@InputType()
export class LogCommentReplyUpdateManyWithWhereWithoutUserInput {

    @Field(() => LogCommentReplyScalarWhereInput, {nullable:false})
    @Type(() => LogCommentReplyScalarWhereInput)
    where!: LogCommentReplyScalarWhereInput;

    @Field(() => LogCommentReplyUpdateManyMutationInput, {nullable:false})
    @Type(() => LogCommentReplyUpdateManyMutationInput)
    data!: LogCommentReplyUpdateManyMutationInput;
}
