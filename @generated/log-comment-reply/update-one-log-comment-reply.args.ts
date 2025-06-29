import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCommentReplyUpdateInput } from './log-comment-reply-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';

@ArgsType()
export class UpdateOneLogCommentReplyArgs {

    @Field(() => LogCommentReplyUpdateInput, {nullable:false})
    @Type(() => LogCommentReplyUpdateInput)
    data!: LogCommentReplyUpdateInput;

    @Field(() => LogCommentReplyWhereUniqueInput, {nullable:false})
    @Type(() => LogCommentReplyWhereUniqueInput)
    where!: Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>;
}
