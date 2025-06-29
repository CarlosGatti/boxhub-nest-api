import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCommentReplyWhereInput } from './log-comment-reply-where.input';
import { Type } from 'class-transformer';
import { LogCommentReplyOrderByWithRelationInput } from './log-comment-reply-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LogCommentReplyScalarFieldEnum } from './log-comment-reply-scalar-field.enum';

@ArgsType()
export class FindManyLogCommentReplyArgs {

    @Field(() => LogCommentReplyWhereInput, {nullable:true})
    @Type(() => LogCommentReplyWhereInput)
    where?: LogCommentReplyWhereInput;

    @Field(() => [LogCommentReplyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LogCommentReplyOrderByWithRelationInput>;

    @Field(() => LogCommentReplyWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LogCommentReplyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LogCommentReplyScalarFieldEnum>;
}
