import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { Type } from 'class-transformer';
import { LogCommentUpdateWithoutUserInput } from './log-comment-update-without-user.input';
import { LogCommentCreateWithoutUserInput } from './log-comment-create-without-user.input';

@InputType()
export class LogCommentUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => LogCommentWhereUniqueInput, {nullable:false})
    @Type(() => LogCommentWhereUniqueInput)
    where!: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;

    @Field(() => LogCommentUpdateWithoutUserInput, {nullable:false})
    @Type(() => LogCommentUpdateWithoutUserInput)
    update!: LogCommentUpdateWithoutUserInput;

    @Field(() => LogCommentCreateWithoutUserInput, {nullable:false})
    @Type(() => LogCommentCreateWithoutUserInput)
    create!: LogCommentCreateWithoutUserInput;
}
