import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FeedSourceOrderByWithRelationInput } from '../feed-source/feed-source-order-by-with-relation.input';
import { FeedItemStateOrderByRelationAggregateInput } from '../feed-item-state/feed-item-state-order-by-relation-aggregate.input';
import { FeedItemSummaryOrderByWithRelationInput } from '../feed-item-summary/feed-item-summary-order-by-with-relation.input';

@InputType()
export class FeedItemOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    canonicalUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    publishedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contentText?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    imageUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metrics?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    contentHash?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FeedSourceOrderByWithRelationInput, {nullable:true})
    source?: FeedSourceOrderByWithRelationInput;

    @Field(() => FeedItemStateOrderByRelationAggregateInput, {nullable:true})
    states?: FeedItemStateOrderByRelationAggregateInput;

    @Field(() => FeedItemSummaryOrderByWithRelationInput, {nullable:true})
    summary?: FeedItemSummaryOrderByWithRelationInput;
}
