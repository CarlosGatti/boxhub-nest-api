import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommunityMemberCountOrderByAggregateInput } from './community-member-count-order-by-aggregate.input';
import { CommunityMemberAvgOrderByAggregateInput } from './community-member-avg-order-by-aggregate.input';
import { CommunityMemberMaxOrderByAggregateInput } from './community-member-max-order-by-aggregate.input';
import { CommunityMemberMinOrderByAggregateInput } from './community-member-min-order-by-aggregate.input';
import { CommunityMemberSumOrderByAggregateInput } from './community-member-sum-order-by-aggregate.input';

@InputType()
export class CommunityMemberOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    communityId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    joinedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    leftAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => CommunityMemberCountOrderByAggregateInput, {nullable:true})
    _count?: CommunityMemberCountOrderByAggregateInput;

    @Field(() => CommunityMemberAvgOrderByAggregateInput, {nullable:true})
    _avg?: CommunityMemberAvgOrderByAggregateInput;

    @Field(() => CommunityMemberMaxOrderByAggregateInput, {nullable:true})
    _max?: CommunityMemberMaxOrderByAggregateInput;

    @Field(() => CommunityMemberMinOrderByAggregateInput, {nullable:true})
    _min?: CommunityMemberMinOrderByAggregateInput;

    @Field(() => CommunityMemberSumOrderByAggregateInput, {nullable:true})
    _sum?: CommunityMemberSumOrderByAggregateInput;
}
