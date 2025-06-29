import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCommentCreateWithoutRepliesInput } from './log-comment-create-without-replies.input';
import { Type } from 'class-transformer';
import { LogCommentCreateOrConnectWithoutRepliesInput } from './log-comment-create-or-connect-without-replies.input';
import { LogCommentUpsertWithoutRepliesInput } from './log-comment-upsert-without-replies.input';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { LogCommentUpdateToOneWithWhereWithoutRepliesInput } from './log-comment-update-to-one-with-where-without-replies.input';

@InputType()
export class LogCommentUpdateOneRequiredWithoutRepliesNestedInput {

    @Field(() => LogCommentCreateWithoutRepliesInput, {nullable:true})
    @Type(() => LogCommentCreateWithoutRepliesInput)
    create?: LogCommentCreateWithoutRepliesInput;

    @Field(() => LogCommentCreateOrConnectWithoutRepliesInput, {nullable:true})
    @Type(() => LogCommentCreateOrConnectWithoutRepliesInput)
    connectOrCreate?: LogCommentCreateOrConnectWithoutRepliesInput;

    @Field(() => LogCommentUpsertWithoutRepliesInput, {nullable:true})
    @Type(() => LogCommentUpsertWithoutRepliesInput)
    upsert?: LogCommentUpsertWithoutRepliesInput;

    @Field(() => LogCommentWhereUniqueInput, {nullable:true})
    @Type(() => LogCommentWhereUniqueInput)
    connect?: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;

    @Field(() => LogCommentUpdateToOneWithWhereWithoutRepliesInput, {nullable:true})
    @Type(() => LogCommentUpdateToOneWithWhereWithoutRepliesInput)
    update?: LogCommentUpdateToOneWithWhereWithoutRepliesInput;
}
