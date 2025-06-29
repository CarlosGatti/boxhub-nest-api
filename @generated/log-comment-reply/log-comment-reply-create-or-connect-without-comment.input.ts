import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { Type } from 'class-transformer';
import { LogCommentReplyCreateWithoutCommentInput } from './log-comment-reply-create-without-comment.input';

@InputType()
export class LogCommentReplyCreateOrConnectWithoutCommentInput {

    @Field(() => LogCommentReplyWhereUniqueInput, {nullable:false})
    @Type(() => LogCommentReplyWhereUniqueInput)
    where!: Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>;

    @Field(() => LogCommentReplyCreateWithoutCommentInput, {nullable:false})
    @Type(() => LogCommentReplyCreateWithoutCommentInput)
    create!: LogCommentReplyCreateWithoutCommentInput;
}
