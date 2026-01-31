import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FeedProfileOrderByWithRelationInput } from '../feed-profile/feed-profile-order-by-with-relation.input';
import { FeedSourceOrderByRelationAggregateInput } from '../feed-source/feed-source-order-by-relation-aggregate.input';

@InputType()
export class FeedCollectionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    icon?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    color?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    keywords?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    blocked?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    preferredDomains?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FeedProfileOrderByWithRelationInput, {nullable:true})
    profile?: FeedProfileOrderByWithRelationInput;

    @Field(() => FeedSourceOrderByRelationAggregateInput, {nullable:true})
    sources?: FeedSourceOrderByRelationAggregateInput;
}
