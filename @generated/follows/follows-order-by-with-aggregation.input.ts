import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FollowsCountOrderByAggregateInput } from './follows-count-order-by-aggregate.input';
import { FollowsAvgOrderByAggregateInput } from './follows-avg-order-by-aggregate.input';
import { FollowsMaxOrderByAggregateInput } from './follows-max-order-by-aggregate.input';
import { FollowsMinOrderByAggregateInput } from './follows-min-order-by-aggregate.input';
import { FollowsSumOrderByAggregateInput } from './follows-sum-order-by-aggregate.input';

@InputType()
export class FollowsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    followerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    followingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FollowsCountOrderByAggregateInput, {nullable:true})
    _count?: FollowsCountOrderByAggregateInput;

    @Field(() => FollowsAvgOrderByAggregateInput, {nullable:true})
    _avg?: FollowsAvgOrderByAggregateInput;

    @Field(() => FollowsMaxOrderByAggregateInput, {nullable:true})
    _max?: FollowsMaxOrderByAggregateInput;

    @Field(() => FollowsMinOrderByAggregateInput, {nullable:true})
    _min?: FollowsMinOrderByAggregateInput;

    @Field(() => FollowsSumOrderByAggregateInput, {nullable:true})
    _sum?: FollowsSumOrderByAggregateInput;
}
