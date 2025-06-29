import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LogCommentCountOrderByAggregateInput } from './log-comment-count-order-by-aggregate.input';
import { LogCommentAvgOrderByAggregateInput } from './log-comment-avg-order-by-aggregate.input';
import { LogCommentMaxOrderByAggregateInput } from './log-comment-max-order-by-aggregate.input';
import { LogCommentMinOrderByAggregateInput } from './log-comment-min-order-by-aggregate.input';
import { LogCommentSumOrderByAggregateInput } from './log-comment-sum-order-by-aggregate.input';

@InputType()
export class LogCommentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    logId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => LogCommentCountOrderByAggregateInput, {nullable:true})
    _count?: LogCommentCountOrderByAggregateInput;

    @Field(() => LogCommentAvgOrderByAggregateInput, {nullable:true})
    _avg?: LogCommentAvgOrderByAggregateInput;

    @Field(() => LogCommentMaxOrderByAggregateInput, {nullable:true})
    _max?: LogCommentMaxOrderByAggregateInput;

    @Field(() => LogCommentMinOrderByAggregateInput, {nullable:true})
    _min?: LogCommentMinOrderByAggregateInput;

    @Field(() => LogCommentSumOrderByAggregateInput, {nullable:true})
    _sum?: LogCommentSumOrderByAggregateInput;
}
