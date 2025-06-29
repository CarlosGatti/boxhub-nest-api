import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentReplyWhereInput } from './log-comment-reply-where.input';

@InputType()
export class LogCommentReplyListRelationFilter {

    @Field(() => LogCommentReplyWhereInput, {nullable:true})
    every?: LogCommentReplyWhereInput;

    @Field(() => LogCommentReplyWhereInput, {nullable:true})
    some?: LogCommentReplyWhereInput;

    @Field(() => LogCommentReplyWhereInput, {nullable:true})
    none?: LogCommentReplyWhereInput;
}
