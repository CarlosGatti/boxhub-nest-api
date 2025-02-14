import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommunityOrderByWithRelationInput } from '../community/community-order-by-with-relation.input';
import { FacetValueOrderByRelationAggregateInput } from '../facet-value/facet-value-order-by-relation-aggregate.input';

@InputType()
export class FacetOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    communityId?: SortOrderInput;

    @Field(() => CommunityOrderByWithRelationInput, {nullable:true})
    Community?: CommunityOrderByWithRelationInput;

    @Field(() => FacetValueOrderByRelationAggregateInput, {nullable:true})
    values?: FacetValueOrderByRelationAggregateInput;
}
