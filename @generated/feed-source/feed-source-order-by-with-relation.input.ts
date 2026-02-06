import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FeedCollectionOrderByWithRelationInput } from '../feed-collection/feed-collection-order-by-with-relation.input';
import { FeedItemOrderByRelationAggregateInput } from '../feed-item/feed-item-order-by-relation-aggregate.input';
import { FeedEventOrderByRelationAggregateInput } from '../feed-event/feed-event-order-by-relation-aggregate.input';
import { FeedSourceNudgeOrderByRelationAggregateInput } from '../feed-source-nudge/feed-source-nudge-order-by-relation-aggregate.input';
import { FeedSourcePreferenceOrderByRelationAggregateInput } from '../feed-source-preference/feed-source-preference-order-by-relation-aggregate.input';

@InputType()
export class FeedSourceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    collectionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    includeShorts?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    fetchEveryMin?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    lastFetchedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    failureCount?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FeedCollectionOrderByWithRelationInput, {nullable:true})
    collection?: FeedCollectionOrderByWithRelationInput;

    @Field(() => FeedItemOrderByRelationAggregateInput, {nullable:true})
    items?: FeedItemOrderByRelationAggregateInput;

    @Field(() => FeedEventOrderByRelationAggregateInput, {nullable:true})
    events?: FeedEventOrderByRelationAggregateInput;

    @Field(() => FeedSourceNudgeOrderByRelationAggregateInput, {nullable:true})
    nudges?: FeedSourceNudgeOrderByRelationAggregateInput;

    @Field(() => FeedSourcePreferenceOrderByRelationAggregateInput, {nullable:true})
    preferences?: FeedSourcePreferenceOrderByRelationAggregateInput;
}
