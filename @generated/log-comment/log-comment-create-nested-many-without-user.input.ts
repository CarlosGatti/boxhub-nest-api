import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentCreateWithoutUserInput } from './log-comment-create-without-user.input';
import { Type } from 'class-transformer';
import { LogCommentCreateOrConnectWithoutUserInput } from './log-comment-create-or-connect-without-user.input';
import { LogCommentCreateManyUserInputEnvelope } from './log-comment-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';

@InputType()
export class LogCommentCreateNestedManyWithoutUserInput {

    @Field(() => [LogCommentCreateWithoutUserInput], {nullable:true})
    @Type(() => LogCommentCreateWithoutUserInput)
    create?: Array<LogCommentCreateWithoutUserInput>;

    @Field(() => [LogCommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LogCommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LogCommentCreateOrConnectWithoutUserInput>;

    @Field(() => LogCommentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LogCommentCreateManyUserInputEnvelope)
    createMany?: LogCommentCreateManyUserInputEnvelope;

    @Field(() => [LogCommentWhereUniqueInput], {nullable:true})
    @Type(() => LogCommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;
}
