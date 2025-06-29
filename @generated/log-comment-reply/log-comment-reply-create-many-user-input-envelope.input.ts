import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentReplyCreateManyUserInput } from './log-comment-reply-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class LogCommentReplyCreateManyUserInputEnvelope {

    @Field(() => [LogCommentReplyCreateManyUserInput], {nullable:false})
    @Type(() => LogCommentReplyCreateManyUserInput)
    data!: Array<LogCommentReplyCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
