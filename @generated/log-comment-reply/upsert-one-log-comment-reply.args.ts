import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { Type } from 'class-transformer';
import { LogCommentReplyCreateInput } from './log-comment-reply-create.input';
import { LogCommentReplyUpdateInput } from './log-comment-reply-update.input';

@ArgsType()
export class UpsertOneLogCommentReplyArgs {

    @Field(() => LogCommentReplyWhereUniqueInput, {nullable:false})
    @Type(() => LogCommentReplyWhereUniqueInput)
    where!: Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>;

    @Field(() => LogCommentReplyCreateInput, {nullable:false})
    @Type(() => LogCommentReplyCreateInput)
    create!: LogCommentReplyCreateInput;

    @Field(() => LogCommentReplyUpdateInput, {nullable:false})
    @Type(() => LogCommentReplyUpdateInput)
    update!: LogCommentReplyUpdateInput;
}
