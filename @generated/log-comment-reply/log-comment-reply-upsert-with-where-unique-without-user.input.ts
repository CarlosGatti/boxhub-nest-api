import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { Type } from 'class-transformer';
import { LogCommentReplyUpdateWithoutUserInput } from './log-comment-reply-update-without-user.input';
import { LogCommentReplyCreateWithoutUserInput } from './log-comment-reply-create-without-user.input';

@InputType()
export class LogCommentReplyUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => LogCommentReplyWhereUniqueInput, {nullable:false})
    @Type(() => LogCommentReplyWhereUniqueInput)
    where!: Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>;

    @Field(() => LogCommentReplyUpdateWithoutUserInput, {nullable:false})
    @Type(() => LogCommentReplyUpdateWithoutUserInput)
    update!: LogCommentReplyUpdateWithoutUserInput;

    @Field(() => LogCommentReplyCreateWithoutUserInput, {nullable:false})
    @Type(() => LogCommentReplyCreateWithoutUserInput)
    create!: LogCommentReplyCreateWithoutUserInput;
}
