import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCommentUpdateInput } from './log-comment-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';

@ArgsType()
export class UpdateOneLogCommentArgs {

    @Field(() => LogCommentUpdateInput, {nullable:false})
    @Type(() => LogCommentUpdateInput)
    data!: LogCommentUpdateInput;

    @Field(() => LogCommentWhereUniqueInput, {nullable:false})
    @Type(() => LogCommentWhereUniqueInput)
    where!: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;
}
