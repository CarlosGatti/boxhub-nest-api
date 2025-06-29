import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogCommentReplyWhereInput } from './log-comment-reply-where.input';
import { Type } from 'class-transformer';
import { LogCommentReplyOrderByWithAggregationInput } from './log-comment-reply-order-by-with-aggregation.input';
import { LogCommentReplyScalarFieldEnum } from './log-comment-reply-scalar-field.enum';
import { LogCommentReplyScalarWhereWithAggregatesInput } from './log-comment-reply-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LogCommentReplyCountAggregateInput } from './log-comment-reply-count-aggregate.input';
import { LogCommentReplyAvgAggregateInput } from './log-comment-reply-avg-aggregate.input';
import { LogCommentReplySumAggregateInput } from './log-comment-reply-sum-aggregate.input';
import { LogCommentReplyMinAggregateInput } from './log-comment-reply-min-aggregate.input';
import { LogCommentReplyMaxAggregateInput } from './log-comment-reply-max-aggregate.input';

@ArgsType()
export class LogCommentReplyGroupByArgs {

    @Field(() => LogCommentReplyWhereInput, {nullable:true})
    @Type(() => LogCommentReplyWhereInput)
    where?: LogCommentReplyWhereInput;

    @Field(() => [LogCommentReplyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LogCommentReplyOrderByWithAggregationInput>;

    @Field(() => [LogCommentReplyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LogCommentReplyScalarFieldEnum>;

    @Field(() => LogCommentReplyScalarWhereWithAggregatesInput, {nullable:true})
    having?: LogCommentReplyScalarWhereWithAggregatesInput;

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
