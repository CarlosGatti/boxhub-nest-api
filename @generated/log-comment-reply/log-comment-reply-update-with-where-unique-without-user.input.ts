import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { Type } from 'class-transformer';
import { LogCommentReplyUpdateWithoutUserInput } from './log-comment-reply-update-without-user.input';

@InputType()
export class LogCommentReplyUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => LogCommentReplyWhereUniqueInput, {nullable:false})
    @Type(() => LogCommentReplyWhereUniqueInput)
    where!: Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>;

    @Field(() => LogCommentReplyUpdateWithoutUserInput, {nullable:false})
    @Type(() => LogCommentReplyUpdateWithoutUserInput)
    data!: LogCommentReplyUpdateWithoutUserInput;
}
