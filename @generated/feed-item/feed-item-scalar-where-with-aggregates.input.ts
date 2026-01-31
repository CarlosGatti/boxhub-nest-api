import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumFeedItemTypeWithAggregatesFilter } from '../prisma/enum-feed-item-type-with-aggregates-filter.input';
import { EnumFeedItemStatusWithAggregatesFilter } from '../prisma/enum-feed-item-status-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FeedItemScalarWhereWithAggregatesInput {

    @Field(() => [FeedItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FeedItemScalarWhereWithAggregatesInput>;

    @Field(() => [FeedItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FeedItemScalarWhereWithAggregatesInput>;

    @Field(() => [FeedItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FeedItemScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sourceId?: IntWithAggregatesFilter;

    @Field(() => EnumFeedItemTypeWithAggregatesFilter, {nullable:true})
    type?: EnumFeedItemTypeWithAggregatesFilter;

    @Field(() => EnumFeedItemStatusWithAggregatesFilter, {nullable:true})
    status?: EnumFeedItemStatusWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    canonicalUrl?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    publishedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    contentText?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    imageUrl?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metrics?: JsonNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    contentHash?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
