import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumFeedSourceTypeFilter } from '../prisma/enum-feed-source-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FeedCollectionRelationFilter } from '../feed-collection/feed-collection-relation-filter.input';
import { FeedItemListRelationFilter } from '../feed-item/feed-item-list-relation-filter.input';
import { FeedEventListRelationFilter } from '../feed-event/feed-event-list-relation-filter.input';
import { FeedSourceNudgeListRelationFilter } from '../feed-source-nudge/feed-source-nudge-list-relation-filter.input';
import { FeedSourcePreferenceListRelationFilter } from '../feed-source-preference/feed-source-preference-list-relation-filter.input';

@InputType()
export class FeedSourceWhereInput {

    @Field(() => [FeedSourceWhereInput], {nullable:true})
    AND?: Array<FeedSourceWhereInput>;

    @Field(() => [FeedSourceWhereInput], {nullable:true})
    OR?: Array<FeedSourceWhereInput>;

    @Field(() => [FeedSourceWhereInput], {nullable:true})
    NOT?: Array<FeedSourceWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    collectionId?: IntFilter;

    @Field(() => EnumFeedSourceTypeFilter, {nullable:true})
    type?: EnumFeedSourceTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    includeShorts?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fetchEveryMin?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastFetchedAt?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    failureCount?: IntFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => FeedCollectionRelationFilter, {nullable:true})
    collection?: FeedCollectionRelationFilter;

    @Field(() => FeedItemListRelationFilter, {nullable:true})
    items?: FeedItemListRelationFilter;

    @Field(() => FeedEventListRelationFilter, {nullable:true})
    events?: FeedEventListRelationFilter;

    @Field(() => FeedSourceNudgeListRelationFilter, {nullable:true})
    nudges?: FeedSourceNudgeListRelationFilter;

    @Field(() => FeedSourcePreferenceListRelationFilter, {nullable:true})
    preferences?: FeedSourcePreferenceListRelationFilter;
}
