import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { Type } from 'class-transformer';
import { LogCommentCreateWithoutLogInput } from './log-comment-create-without-log.input';

@InputType()
export class LogCommentCreateOrConnectWithoutLogInput {

    @Field(() => LogCommentWhereUniqueInput, {nullable:false})
    @Type(() => LogCommentWhereUniqueInput)
    where!: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;

    @Field(() => LogCommentCreateWithoutLogInput, {nullable:false})
    @Type(() => LogCommentCreateWithoutLogInput)
    create!: LogCommentCreateWithoutLogInput;
}
