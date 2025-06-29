import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentReplyCreateWithoutUserInput } from './log-comment-reply-create-without-user.input';
import { Type } from 'class-transformer';
import { LogCommentReplyCreateOrConnectWithoutUserInput } from './log-comment-reply-create-or-connect-without-user.input';
import { LogCommentReplyCreateManyUserInputEnvelope } from './log-comment-reply-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';

@InputType()
export class LogCommentReplyUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [LogCommentReplyCreateWithoutUserInput], {nullable:true})
    @Type(() => LogCommentReplyCreateWithoutUserInput)
    create?: Array<LogCommentReplyCreateWithoutUserInput>;

    @Field(() => [LogCommentReplyCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LogCommentReplyCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LogCommentReplyCreateOrConnectWithoutUserInput>;

    @Field(() => LogCommentReplyCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LogCommentReplyCreateManyUserInputEnvelope)
    createMany?: LogCommentReplyCreateManyUserInputEnvelope;

    @Field(() => [LogCommentReplyWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentReplyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;
}
