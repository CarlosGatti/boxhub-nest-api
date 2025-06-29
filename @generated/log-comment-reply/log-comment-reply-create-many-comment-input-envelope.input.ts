import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentReplyCreateManyCommentInput } from './log-comment-reply-create-many-comment.input';
import { Type } from 'class-transformer';

@InputType()
export class LogCommentReplyCreateManyCommentInputEnvelope {

    @Field(() => [LogCommentReplyCreateManyCommentInput], {nullable:false})
    @Type(() => LogCommentReplyCreateManyCommentInput)
    data!: Array<LogCommentReplyCreateManyCommentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
