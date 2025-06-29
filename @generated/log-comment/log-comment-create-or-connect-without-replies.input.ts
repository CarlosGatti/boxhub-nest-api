import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { Type } from 'class-transformer';
import { LogCommentCreateWithoutRepliesInput } from './log-comment-create-without-replies.input';

@InputType()
export class LogCommentCreateOrConnectWithoutRepliesInput {

    @Field(() => LogCommentWhereUniqueInput, {nullable:false})
    @Type(() => LogCommentWhereUniqueInput)
    where!: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;

    @Field(() => LogCommentCreateWithoutRepliesInput, {nullable:false})
    @Type(() => LogCommentCreateWithoutRepliesInput)
    create!: LogCommentCreateWithoutRepliesInput;
}
