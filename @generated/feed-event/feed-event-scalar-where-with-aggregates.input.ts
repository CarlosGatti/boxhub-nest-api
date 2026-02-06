import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumFeedEventActionWithAggregatesFilter } from '../prisma/enum-feed-event-action-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FeedEventScalarWhereWithAggregatesInput {

    @Field(() => [FeedEventScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FeedEventScalarWhereWithAggregatesInput>;

    @Field(() => [FeedEventScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FeedEventScalarWhereWithAggregatesInput>;

    @Field(() => [FeedEventScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FeedEventScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    itemId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sourceId?: IntWithAggregatesFilter;

    @Field(() => EnumFeedEventActionWithAggregatesFilter, {nullable:true})
    action?: EnumFeedEventActionWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
