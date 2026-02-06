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

@InputType()
export class FeedSourceScalarWhereInput {

    @Field(() => [FeedSourceScalarWhereInput], {nullable:true})
    AND?: Array<FeedSourceScalarWhereInput>;

    @Field(() => [FeedSourceScalarWhereInput], {nullable:true})
    OR?: Array<FeedSourceScalarWhereInput>;

    @Field(() => [FeedSourceScalarWhereInput], {nullable:true})
    NOT?: Array<FeedSourceScalarWhereInput>;

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
}
