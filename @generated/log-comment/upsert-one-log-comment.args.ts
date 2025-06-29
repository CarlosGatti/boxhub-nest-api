import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { Type } from 'class-transformer';
import { LogCommentCreateInput } from './log-comment-create.input';
import { LogCommentUpdateInput } from './log-comment-update.input';

@ArgsType()
export class UpsertOneLogCommentArgs {

    @Field(() => LogCommentWhereUniqueInput, {nullable:false})
    @Type(() => LogCommentWhereUniqueInput)
    where!: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;

    @Field(() => LogCommentCreateInput, {nullable:false})
    @Type(() => LogCommentCreateInput)
    create!: LogCommentCreateInput;

    @Field(() => LogCommentUpdateInput, {nullable:false})
    @Type(() => LogCommentUpdateInput)
    update!: LogCommentUpdateInput;
}
