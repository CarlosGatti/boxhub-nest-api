import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FeedProfileScalarWhereWithAggregatesInput {

    @Field(() => [FeedProfileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FeedProfileScalarWhereWithAggregatesInput>;

    @Field(() => [FeedProfileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FeedProfileScalarWhereWithAggregatesInput>;

    @Field(() => [FeedProfileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FeedProfileScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    timezone?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    language?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
