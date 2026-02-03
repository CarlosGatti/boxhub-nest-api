import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { HomeOpsHouseholdCountOrderByAggregateInput } from './home-ops-household-count-order-by-aggregate.input';
import { HomeOpsHouseholdAvgOrderByAggregateInput } from './home-ops-household-avg-order-by-aggregate.input';
import { HomeOpsHouseholdMaxOrderByAggregateInput } from './home-ops-household-max-order-by-aggregate.input';
import { HomeOpsHouseholdMinOrderByAggregateInput } from './home-ops-household-min-order-by-aggregate.input';
import { HomeOpsHouseholdSumOrderByAggregateInput } from './home-ops-household-sum-order-by-aggregate.input';

@InputType()
export class HomeOpsHouseholdOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    appId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HomeOpsHouseholdCountOrderByAggregateInput, {nullable:true})
    _count?: HomeOpsHouseholdCountOrderByAggregateInput;

    @Field(() => HomeOpsHouseholdAvgOrderByAggregateInput, {nullable:true})
    _avg?: HomeOpsHouseholdAvgOrderByAggregateInput;

    @Field(() => HomeOpsHouseholdMaxOrderByAggregateInput, {nullable:true})
    _max?: HomeOpsHouseholdMaxOrderByAggregateInput;

    @Field(() => HomeOpsHouseholdMinOrderByAggregateInput, {nullable:true})
    _min?: HomeOpsHouseholdMinOrderByAggregateInput;

    @Field(() => HomeOpsHouseholdSumOrderByAggregateInput, {nullable:true})
    _sum?: HomeOpsHouseholdSumOrderByAggregateInput;
}
