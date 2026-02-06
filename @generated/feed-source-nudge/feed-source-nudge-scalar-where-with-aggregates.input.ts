import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FeedSourceNudgeScalarWhereWithAggregatesInput {

    @Field(() => [FeedSourceNudgeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FeedSourceNudgeScalarWhereWithAggregatesInput>;

    @Field(() => [FeedSourceNudgeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FeedSourceNudgeScalarWhereWithAggregatesInput>;

    @Field(() => [FeedSourceNudgeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FeedSourceNudgeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sourceId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    reason?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
