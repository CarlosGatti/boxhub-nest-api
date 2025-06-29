import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCommentReplyWhereInput } from './log-comment-reply-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyLogCommentReplyArgs {

    @Field(() => LogCommentReplyWhereInput, {nullable:true})
    @Type(() => LogCommentReplyWhereInput)
    where?: LogCommentReplyWhereInput;
}
