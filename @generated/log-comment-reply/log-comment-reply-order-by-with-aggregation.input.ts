import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LogCommentReplyCountOrderByAggregateInput } from './log-comment-reply-count-order-by-aggregate.input';
import { LogCommentReplyAvgOrderByAggregateInput } from './log-comment-reply-avg-order-by-aggregate.input';
import { LogCommentReplyMaxOrderByAggregateInput } from './log-comment-reply-max-order-by-aggregate.input';
import { LogCommentReplyMinOrderByAggregateInput } from './log-comment-reply-min-order-by-aggregate.input';
import { LogCommentReplySumOrderByAggregateInput } from './log-comment-reply-sum-order-by-aggregate.input';

@InputType()
export class LogCommentReplyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => LogCommentReplyCountOrderByAggregateInput, {nullable:true})
    _count?: LogCommentReplyCountOrderByAggregateInput;

    @Field(() => LogCommentReplyAvgOrderByAggregateInput, {nullable:true})
    _avg?: LogCommentReplyAvgOrderByAggregateInput;

    @Field(() => LogCommentReplyMaxOrderByAggregateInput, {nullable:true})
    _max?: LogCommentReplyMaxOrderByAggregateInput;

    @Field(() => LogCommentReplyMinOrderByAggregateInput, {nullable:true})
    _min?: LogCommentReplyMinOrderByAggregateInput;

    @Field(() => LogCommentReplySumOrderByAggregateInput, {nullable:true})
    _sum?: LogCommentReplySumOrderByAggregateInput;
}
