import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommunityPlanOrderByWithRelationInput } from '../community-plan/community-plan-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { CommunityOrderByRelationAggregateInput } from './community-order-by-relation-aggregate.input';
import { CommunityMemberOrderByRelationAggregateInput } from '../community-member/community-member-order-by-relation-aggregate.input';
import { EventOrderByRelationAggregateInput } from '../event/event-order-by-relation-aggregate.input';
import { FacetOrderByRelationAggregateInput } from '../facet/facet-order-by-relation-aggregate.input';
import { PublicationOrderByRelationAggregateInput } from '../publication/publication-order-by-relation-aggregate.input';

@InputType()
export class CommunityOrderByWithRelationInput {

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

    @Field(() => CommunityPlanOrderByWithRelationInput, {nullable:true})
    plan?: CommunityPlanOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    owner?: UserOrderByWithRelationInput;

    @Field(() => CommunityOrderByWithRelationInput, {nullable:true})
    parentCommunity?: CommunityOrderByWithRelationInput;

    @Field(() => CommunityOrderByRelationAggregateInput, {nullable:true})
    groups?: CommunityOrderByRelationAggregateInput;

    @Field(() => CommunityMemberOrderByRelationAggregateInput, {nullable:true})
    members?: CommunityMemberOrderByRelationAggregateInput;

    @Field(() => EventOrderByRelationAggregateInput, {nullable:true})
    events?: EventOrderByRelationAggregateInput;

    @Field(() => FacetOrderByRelationAggregateInput, {nullable:true})
    facets?: FacetOrderByRelationAggregateInput;

    @Field(() => PublicationOrderByRelationAggregateInput, {nullable:true})
    publications?: PublicationOrderByRelationAggregateInput;
}
