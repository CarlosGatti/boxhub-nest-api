import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { Type } from 'class-transformer';
import { LogCommentReplyUpdateWithoutCommentInput } from './log-comment-reply-update-without-comment.input';

@InputType()
export class LogCommentReplyUpdateWithWhereUniqueWithoutCommentInput {

    @Field(() => LogCommentReplyWhereUniqueInput, {nullable:false})
    @Type(() => LogCommentReplyWhereUniqueInput)
    where!: Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>;

    @Field(() => LogCommentReplyUpdateWithoutCommentInput, {nullable:false})
    @Type(() => LogCommentReplyUpdateWithoutCommentInput)
    data!: LogCommentReplyUpdateWithoutCommentInput;
}
