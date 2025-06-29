import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCommentReplyCreateInput } from './log-comment-reply-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLogCommentReplyArgs {

    @Field(() => LogCommentReplyCreateInput, {nullable:false})
    @Type(() => LogCommentReplyCreateInput)
    data!: LogCommentReplyCreateInput;
}
