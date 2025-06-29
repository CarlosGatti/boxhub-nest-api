import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCommentReplyWhereInput } from './log-comment-reply-where.input';
import { Type } from 'class-transformer';
import { LogCommentReplyOrderByWithRelationInput } from './log-comment-reply-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LogCommentReplyCountAggregateInput } from './log-comment-reply-count-aggregate.input';
import { LogCommentReplyAvgAggregateInput } from './log-comment-reply-avg-aggregate.input';
import { LogCommentReplySumAggregateInput } from './log-comment-reply-sum-aggregate.input';
import { LogCommentReplyMinAggregateInput } from './log-comment-reply-min-aggregate.input';
import { LogCommentReplyMaxAggregateInput } from './log-comment-reply-max-aggregate.input';

@ArgsType()
export class LogCommentReplyAggregateArgs {

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

    @Field(() => LogCommentReplyCountAggregateInput, {nullable:true})
    _count?: LogCommentReplyCountAggregateInput;

    @Field(() => LogCommentReplyAvgAggregateInput, {nullable:true})
    _avg?: LogCommentReplyAvgAggregateInput;

    @Field(() => LogCommentReplySumAggregateInput, {nullable:true})
    _sum?: LogCommentReplySumAggregateInput;

    @Field(() => LogCommentReplyMinAggregateInput, {nullable:true})
    _min?: LogCommentReplyMinAggregateInput;

    @Field(() => LogCommentReplyMaxAggregateInput, {nullable:true})
    _max?: LogCommentReplyMaxAggregateInput;
}
