import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedItemSummaryWhereInput } from './feed-item-summary-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FeedItemRelationFilter } from '../feed-item/feed-item-relation-filter.input';

@InputType()
export class FeedItemSummaryWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    itemId?: number;

    @Field(() => [FeedItemSummaryWhereInput], {nullable:true})
    AND?: Array<FeedItemSummaryWhereInput>;

    @Field(() => [FeedItemSummaryWhereInput], {nullable:true})
    OR?: Array<FeedItemSummaryWhereInput>;

    @Field(() => [FeedItemSummaryWhereInput], {nullable:true})
    NOT?: Array<FeedItemSummaryWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    summary?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => FeedItemRelationFilter, {nullable:true})
    item?: FeedItemRelationFilter;
}
