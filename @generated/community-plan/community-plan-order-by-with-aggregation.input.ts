import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommunityPlanCountOrderByAggregateInput } from './community-plan-count-order-by-aggregate.input';
import { CommunityPlanAvgOrderByAggregateInput } from './community-plan-avg-order-by-aggregate.input';
import { CommunityPlanMaxOrderByAggregateInput } from './community-plan-max-order-by-aggregate.input';
import { CommunityPlanMinOrderByAggregateInput } from './community-plan-min-order-by-aggregate.input';
import { CommunityPlanSumOrderByAggregateInput } from './community-plan-sum-order-by-aggregate.input';

@InputType()
export class CommunityPlanOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    communityId?: SortOrderInput;

    @Field(() => CommunityPlanCountOrderByAggregateInput, {nullable:true})
    _count?: CommunityPlanCountOrderByAggregateInput;

    @Field(() => CommunityPlanAvgOrderByAggregateInput, {nullable:true})
    _avg?: CommunityPlanAvgOrderByAggregateInput;

    @Field(() => CommunityPlanMaxOrderByAggregateInput, {nullable:true})
    _max?: CommunityPlanMaxOrderByAggregateInput;

    @Field(() => CommunityPlanMinOrderByAggregateInput, {nullable:true})
    _min?: CommunityPlanMinOrderByAggregateInput;

    @Field(() => CommunityPlanSumOrderByAggregateInput, {nullable:true})
    _sum?: CommunityPlanSumOrderByAggregateInput;
}
