import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FeedSourcePreferenceScalarWhereWithAggregatesInput {

    @Field(() => [FeedSourcePreferenceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FeedSourcePreferenceScalarWhereWithAggregatesInput>;

    @Field(() => [FeedSourcePreferenceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FeedSourcePreferenceScalarWhereWithAggregatesInput>;

    @Field(() => [FeedSourcePreferenceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FeedSourcePreferenceScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sourceId?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    notifyOnNew?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isMuted?: BoolWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    mutedUntil?: DateTimeNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    consecutiveSkips?: IntWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    lastInteractedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
