import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentReplyCreateWithoutUserInput } from './log-comment-reply-create-without-user.input';
import { Type } from 'class-transformer';
import { LogCommentReplyCreateOrConnectWithoutUserInput } from './log-comment-reply-create-or-connect-without-user.input';
import { LogCommentReplyUpsertWithWhereUniqueWithoutUserInput } from './log-comment-reply-upsert-with-where-unique-without-user.input';
import { LogCommentReplyCreateManyUserInputEnvelope } from './log-comment-reply-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { LogCommentReplyUpdateWithWhereUniqueWithoutUserInput } from './log-comment-reply-update-with-where-unique-without-user.input';
import { LogCommentReplyUpdateManyWithWhereWithoutUserInput } from './log-comment-reply-update-many-with-where-without-user.input';
import { LogCommentReplyScalarWhereInput } from './log-comment-reply-scalar-where.input';

@InputType()
export class LogCommentReplyUpdateManyWithoutUserNestedInput {

    @Field(() => [LogCommentReplyCreateWithoutUserInput], {nullable:true})
    @Type(() => LogCommentReplyCreateWithoutUserInput)
    create?: Array<LogCommentReplyCreateWithoutUserInput>;

    @Field(() => [LogCommentReplyCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LogCommentReplyCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LogCommentReplyCreateOrConnectWithoutUserInput>;

    @Field(() => [LogCommentReplyUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LogCommentReplyUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<LogCommentReplyUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => LogCommentReplyCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LogCommentReplyCreateManyUserInputEnvelope)
    createMany?: LogCommentReplyCreateManyUserInputEnvelope;

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

    @Field(() => [LogCommentReplyUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LogCommentReplyUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<LogCommentReplyUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [LogCommentReplyUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => LogCommentReplyUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<LogCommentReplyUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [LogCommentReplyScalarWhereInput], {nullable:true})
    @Type(() => LogCommentReplyScalarWhereInput)
    deleteMany?: Array<LogCommentReplyScalarWhereInput>;
}
