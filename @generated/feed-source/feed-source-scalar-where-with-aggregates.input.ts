import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumFeedSourceTypeWithAggregatesFilter } from '../prisma/enum-feed-source-type-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FeedSourceScalarWhereWithAggregatesInput {

    @Field(() => [FeedSourceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FeedSourceScalarWhereWithAggregatesInput>;

    @Field(() => [FeedSourceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FeedSourceScalarWhereWithAggregatesInput>;

    @Field(() => [FeedSourceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FeedSourceScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    collectionId?: IntWithAggregatesFilter;

    @Field(() => EnumFeedSourceTypeWithAggregatesFilter, {nullable:true})
    type?: EnumFeedSourceTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    includeShorts?: BoolWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    fetchEveryMin?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    lastFetchedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    failureCount?: IntWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metadata?: JsonNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
