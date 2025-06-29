import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { Type } from 'class-transformer';
import { LogCommentCreateWithoutUserInput } from './log-comment-create-without-user.input';

@InputType()
export class LogCommentCreateOrConnectWithoutUserInput {

    @Field(() => LogCommentWhereUniqueInput, {nullable:false})
    @Type(() => LogCommentWhereUniqueInput)
    where!: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;

    @Field(() => LogCommentCreateWithoutUserInput, {nullable:false})
    @Type(() => LogCommentCreateWithoutUserInput)
    create!: LogCommentCreateWithoutUserInput;
}
