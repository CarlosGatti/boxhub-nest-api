import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCommentWhereInput } from './log-comment-where.input';
import { Type } from 'class-transformer';
import { LogCommentOrderByWithRelationInput } from './log-comment-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LogCommentScalarFieldEnum } from './log-comment-scalar-field.enum';

@ArgsType()
export class FindFirstLogCommentArgs {

    @Field(() => LogCommentWhereInput, {nullable:true})
    @Type(() => LogCommentWhereInput)
    where?: LogCommentWhereInput;

    @Field(() => [LogCommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LogCommentOrderByWithRelationInput>;

    @Field(() => LogCommentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LogCommentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LogCommentScalarFieldEnum>;
}
