import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumFeedItemReadStatusWithAggregatesFilter } from '../prisma/enum-feed-item-read-status-with-aggregates-filter.input';
import { EnumFeedItemSaveStatusWithAggregatesFilter } from '../prisma/enum-feed-item-save-status-with-aggregates-filter.input';
import { EnumFeedItemVisibilityWithAggregatesFilter } from '../prisma/enum-feed-item-visibility-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FeedItemStateScalarWhereWithAggregatesInput {

    @Field(() => [FeedItemStateScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FeedItemStateScalarWhereWithAggregatesInput>;

    @Field(() => [FeedItemStateScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FeedItemStateScalarWhereWithAggregatesInput>;

    @Field(() => [FeedItemStateScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FeedItemStateScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    itemId?: IntWithAggregatesFilter;

    @Field(() => EnumFeedItemReadStatusWithAggregatesFilter, {nullable:true})
    readStatus?: EnumFeedItemReadStatusWithAggregatesFilter;

    @Field(() => EnumFeedItemSaveStatusWithAggregatesFilter, {nullable:true})
    saveStatus?: EnumFeedItemSaveStatusWithAggregatesFilter;

    @Field(() => EnumFeedItemVisibilityWithAggregatesFilter, {nullable:true})
    visibility?: EnumFeedItemVisibilityWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    readAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    savedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    hiddenAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
