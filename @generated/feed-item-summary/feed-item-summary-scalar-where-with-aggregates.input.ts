import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FeedItemSummaryScalarWhereWithAggregatesInput {

    @Field(() => [FeedItemSummaryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FeedItemSummaryScalarWhereWithAggregatesInput>;

    @Field(() => [FeedItemSummaryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FeedItemSummaryScalarWhereWithAggregatesInput>;

    @Field(() => [FeedItemSummaryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FeedItemSummaryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    itemId?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    summary?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metadata?: JsonNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
