import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommunityCountOrderByAggregateInput } from './community-count-order-by-aggregate.input';
import { CommunityAvgOrderByAggregateInput } from './community-avg-order-by-aggregate.input';
import { CommunityMaxOrderByAggregateInput } from './community-max-order-by-aggregate.input';
import { CommunityMinOrderByAggregateInput } from './community-min-order-by-aggregate.input';
import { CommunitySumOrderByAggregateInput } from './community-sum-order-by-aggregate.input';

@InputType()
export class CommunityOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    banner?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    profilePicture?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    published?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ownerId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    communityPlanId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    postEnabledRole?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inviteEnabledRole?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    parentCommunityId?: SortOrderInput;

    @Field(() => CommunityCountOrderByAggregateInput, {nullable:true})
    _count?: CommunityCountOrderByAggregateInput;

    @Field(() => CommunityAvgOrderByAggregateInput, {nullable:true})
    _avg?: CommunityAvgOrderByAggregateInput;

    @Field(() => CommunityMaxOrderByAggregateInput, {nullable:true})
    _max?: CommunityMaxOrderByAggregateInput;

    @Field(() => CommunityMinOrderByAggregateInput, {nullable:true})
    _min?: CommunityMinOrderByAggregateInput;

    @Field(() => CommunitySumOrderByAggregateInput, {nullable:true})
    _sum?: CommunitySumOrderByAggregateInput;
}
