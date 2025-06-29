import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentReplyCreateWithoutCommentInput } from './log-comment-reply-create-without-comment.input';
import { Type } from 'class-transformer';
import { LogCommentReplyCreateOrConnectWithoutCommentInput } from './log-comment-reply-create-or-connect-without-comment.input';
import { LogCommentReplyCreateManyCommentInputEnvelope } from './log-comment-reply-create-many-comment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';

@InputType()
export class LogCommentReplyUncheckedCreateNestedManyWithoutCommentInput {

    @Field(() => [LogCommentReplyCreateWithoutCommentInput], {nullable:true})
    @Type(() => LogCommentReplyCreateWithoutCommentInput)
    create?: Array<LogCommentReplyCreateWithoutCommentInput>;

    @Field(() => [LogCommentReplyCreateOrConnectWithoutCommentInput], {nullable:true})
    @Type(() => LogCommentReplyCreateOrConnectWithoutCommentInput)
    connectOrCreate?: Array<LogCommentReplyCreateOrConnectWithoutCommentInput>;

    @Field(() => LogCommentReplyCreateManyCommentInputEnvelope, {nullable:true})
    @Type(() => LogCommentReplyCreateManyCommentInputEnvelope)
    createMany?: LogCommentReplyCreateManyCommentInputEnvelope;

    @Field(() => [LogCommentReplyWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentReplyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;
}
