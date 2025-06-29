import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentCreateWithoutRepliesInput } from './log-comment-create-without-replies.input';
import { Type } from 'class-transformer';
import { LogCommentCreateOrConnectWithoutRepliesInput } from './log-comment-create-or-connect-without-replies.input';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';

@InputType()
export class LogCommentCreateNestedOneWithoutRepliesInput {

    @Field(() => LogCommentCreateWithoutRepliesInput, {nullable:true})
    @Type(() => LogCommentCreateWithoutRepliesInput)
    create?: LogCommentCreateWithoutRepliesInput;

    @Field(() => LogCommentCreateOrConnectWithoutRepliesInput, {nullable:true})
    @Type(() => LogCommentCreateOrConnectWithoutRepliesInput)
    connectOrCreate?: LogCommentCreateOrConnectWithoutRepliesInput;

    @Field(() => LogCommentWhereUniqueInput, {nullable:true})
    @Type(() => LogCommentWhereUniqueInput)
    connect?: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;
}
