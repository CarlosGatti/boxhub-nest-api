import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumFeedItemTypeFilter } from '../prisma/enum-feed-item-type-filter.input';
import { EnumFeedItemStatusFilter } from '../prisma/enum-feed-item-status-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FeedSourceRelationFilter } from '../feed-source/feed-source-relation-filter.input';
import { FeedItemStateListRelationFilter } from '../feed-item-state/feed-item-state-list-relation-filter.input';
import { FeedItemSummaryNullableRelationFilter } from '../feed-item-summary/feed-item-summary-nullable-relation-filter.input';
import { FeedEventListRelationFilter } from '../feed-event/feed-event-list-relation-filter.input';

@InputType()
export class FeedItemWhereInput {

    @Field(() => [FeedItemWhereInput], {nullable:true})
    AND?: Array<FeedItemWhereInput>;

    @Field(() => [FeedItemWhereInput], {nullable:true})
    OR?: Array<FeedItemWhereInput>;

    @Field(() => [FeedItemWhereInput], {nullable:true})
    NOT?: Array<FeedItemWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    sourceId?: IntFilter;

    @Field(() => EnumFeedItemTypeFilter, {nullable:true})
    type?: EnumFeedItemTypeFilter;

    @Field(() => EnumFeedItemStatusFilter, {nullable:true})
    status?: EnumFeedItemStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    canonicalUrl?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    publishedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contentText?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imageUrl?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metrics?: JsonNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    contentHash?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => FeedSourceRelationFilter, {nullable:true})
    source?: FeedSourceRelationFilter;

    @Field(() => FeedItemStateListRelationFilter, {nullable:true})
    states?: FeedItemStateListRelationFilter;

    @Field(() => FeedItemSummaryNullableRelationFilter, {nullable:true})
    summary?: FeedItemSummaryNullableRelationFilter;

    @Field(() => FeedEventListRelationFilter, {nullable:true})
    events?: FeedEventListRelationFilter;
}
