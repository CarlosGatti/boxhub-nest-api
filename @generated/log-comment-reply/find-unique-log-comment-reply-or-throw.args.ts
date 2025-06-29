import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueLogCommentReplyOrThrowArgs {

    @Field(() => LogCommentReplyWhereUniqueInput, {nullable:false})
    @Type(() => LogCommentReplyWhereUniqueInput)
    where!: Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>;
}
