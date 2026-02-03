import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HomeOpsHouseholdMemberCountOrderByAggregateInput } from './home-ops-household-member-count-order-by-aggregate.input';
import { HomeOpsHouseholdMemberAvgOrderByAggregateInput } from './home-ops-household-member-avg-order-by-aggregate.input';
import { HomeOpsHouseholdMemberMaxOrderByAggregateInput } from './home-ops-household-member-max-order-by-aggregate.input';
import { HomeOpsHouseholdMemberMinOrderByAggregateInput } from './home-ops-household-member-min-order-by-aggregate.input';
import { HomeOpsHouseholdMemberSumOrderByAggregateInput } from './home-ops-household-member-sum-order-by-aggregate.input';

@InputType()
export class HomeOpsHouseholdMemberOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    householdId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    joinedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HomeOpsHouseholdMemberCountOrderByAggregateInput, {nullable:true})
    _count?: HomeOpsHouseholdMemberCountOrderByAggregateInput;

    @Field(() => HomeOpsHouseholdMemberAvgOrderByAggregateInput, {nullable:true})
    _avg?: HomeOpsHouseholdMemberAvgOrderByAggregateInput;

    @Field(() => HomeOpsHouseholdMemberMaxOrderByAggregateInput, {nullable:true})
    _max?: HomeOpsHouseholdMemberMaxOrderByAggregateInput;

    @Field(() => HomeOpsHouseholdMemberMinOrderByAggregateInput, {nullable:true})
    _min?: HomeOpsHouseholdMemberMinOrderByAggregateInput;

    @Field(() => HomeOpsHouseholdMemberSumOrderByAggregateInput, {nullable:true})
    _sum?: HomeOpsHouseholdMemberSumOrderByAggregateInput;
}
