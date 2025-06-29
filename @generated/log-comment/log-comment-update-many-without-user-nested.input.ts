import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentCreateWithoutUserInput } from './log-comment-create-without-user.input';
import { Type } from 'class-transformer';
import { LogCommentCreateOrConnectWithoutUserInput } from './log-comment-create-or-connect-without-user.input';
import { LogCommentUpsertWithWhereUniqueWithoutUserInput } from './log-comment-upsert-with-where-unique-without-user.input';
import { LogCommentCreateManyUserInputEnvelope } from './log-comment-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { LogCommentUpdateWithWhereUniqueWithoutUserInput } from './log-comment-update-with-where-unique-without-user.input';
import { LogCommentUpdateManyWithWhereWithoutUserInput } from './log-comment-update-many-with-where-without-user.input';
import { LogCommentScalarWhereInput } from './log-comment-scalar-where.input';

@InputType()
export class LogCommentUpdateManyWithoutUserNestedInput {

    @Field(() => [LogCommentCreateWithoutUserInput], {nullable:true})
    @Type(() => LogCommentCreateWithoutUserInput)
    create?: Array<LogCommentCreateWithoutUserInput>;

    @Field(() => [LogCommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LogCommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LogCommentCreateOrConnectWithoutUserInput>;

    @Field(() => [LogCommentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LogCommentUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<LogCommentUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => LogCommentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LogCommentCreateManyUserInputEnvelope)
    createMany?: LogCommentCreateManyUserInputEnvelope;

    @Field(() => [LogCommentWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;

    @Field(() => [LogCommentWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;

    @Field(() => [LogCommentWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;

    @Field(() => [LogCommentWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;

    @Field(() => [LogCommentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LogCommentUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<LogCommentUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [LogCommentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => LogCommentUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<LogCommentUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [LogCommentScalarWhereInput], {nullable:true})
    @Type(() => LogCommentScalarWhereInput)
    deleteMany?: Array<LogCommentScalarWhereInput>;
}
