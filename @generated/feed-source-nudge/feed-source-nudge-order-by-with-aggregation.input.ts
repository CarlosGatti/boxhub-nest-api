import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FeedSourceNudgeCountOrderByAggregateInput } from './feed-source-nudge-count-order-by-aggregate.input';
import { FeedSourceNudgeAvgOrderByAggregateInput } from './feed-source-nudge-avg-order-by-aggregate.input';
import { FeedSourceNudgeMaxOrderByAggregateInput } from './feed-source-nudge-max-order-by-aggregate.input';
import { FeedSourceNudgeMinOrderByAggregateInput } from './feed-source-nudge-min-order-by-aggregate.input';
import { FeedSourceNudgeSumOrderByAggregateInput } from './feed-source-nudge-sum-order-by-aggregate.input';

@InputType()
export class FeedSourceNudgeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reason?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FeedSourceNudgeCountOrderByAggregateInput, {nullable:true})
    _count?: FeedSourceNudgeCountOrderByAggregateInput;

    @Field(() => FeedSourceNudgeAvgOrderByAggregateInput, {nullable:true})
    _avg?: FeedSourceNudgeAvgOrderByAggregateInput;

    @Field(() => FeedSourceNudgeMaxOrderByAggregateInput, {nullable:true})
    _max?: FeedSourceNudgeMaxOrderByAggregateInput;

    @Field(() => FeedSourceNudgeMinOrderByAggregateInput, {nullable:true})
    _min?: FeedSourceNudgeMinOrderByAggregateInput;

    @Field(() => FeedSourceNudgeSumOrderByAggregateInput, {nullable:true})
    _sum?: FeedSourceNudgeSumOrderByAggregateInput;
}
