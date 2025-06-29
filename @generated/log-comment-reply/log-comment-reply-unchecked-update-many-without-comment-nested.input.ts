import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentReplyCreateWithoutCommentInput } from './log-comment-reply-create-without-comment.input';
import { Type } from 'class-transformer';
import { LogCommentReplyCreateOrConnectWithoutCommentInput } from './log-comment-reply-create-or-connect-without-comment.input';
import { LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput } from './log-comment-reply-upsert-with-where-unique-without-comment.input';
import { LogCommentReplyCreateManyCommentInputEnvelope } from './log-comment-reply-create-many-comment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { LogCommentReplyUpdateWithWhereUniqueWithoutCommentInput } from './log-comment-reply-update-with-where-unique-without-comment.input';
import { LogCommentReplyUpdateManyWithWhereWithoutCommentInput } from './log-comment-reply-update-many-with-where-without-comment.input';
import { LogCommentReplyScalarWhereInput } from './log-comment-reply-scalar-where.input';

@InputType()
export class LogCommentReplyUncheckedUpdateManyWithoutCommentNestedInput {

    @Field(() => [LogCommentReplyCreateWithoutCommentInput], {nullable:true})
    @Type(() => LogCommentReplyCreateWithoutCommentInput)
    create?: Array<LogCommentReplyCreateWithoutCommentInput>;

    @Field(() => [LogCommentReplyCreateOrConnectWithoutCommentInput], {nullable:true})
    @Type(() => LogCommentReplyCreateOrConnectWithoutCommentInput)
    connectOrCreate?: Array<LogCommentReplyCreateOrConnectWithoutCommentInput>;

    @Field(() => [LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput], {nullable:true})
    @Type(() => LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput)
    upsert?: Array<LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput>;

    @Field(() => LogCommentReplyCreateManyCommentInputEnvelope, {nullable:true})
    @Type(() => LogCommentReplyCreateManyCommentInputEnvelope)
    createMany?: LogCommentReplyCreateManyCommentInputEnvelope;

    @Field(() => [LogCommentReplyWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentReplyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;

    @Field(() => [LogCommentReplyWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentReplyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;

    @Field(() => [LogCommentReplyWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentReplyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;

    @Field(() => [LogCommentReplyWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentReplyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;

    @Field(() => [LogCommentReplyUpdateWithWhereUniqueWithoutCommentInput], {nullable:true})
    @Type(() => LogCommentReplyUpdateWithWhereUniqueWithoutCommentInput)
    update?: Array<LogCommentReplyUpdateWithWhereUniqueWithoutCommentInput>;

    @Field(() => [LogCommentReplyUpdateManyWithWhereWithoutCommentInput], {nullable:true})
    @Type(() => LogCommentReplyUpdateManyWithWhereWithoutCommentInput)
    updateMany?: Array<LogCommentReplyUpdateManyWithWhereWithoutCommentInput>;

    @Field(() => [LogCommentReplyScalarWhereInput], {nullable:true})
    @Type(() => LogCommentReplyScalarWhereInput)
    deleteMany?: Array<LogCommentReplyScalarWhereInput>;
}
