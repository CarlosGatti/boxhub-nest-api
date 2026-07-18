import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';

@InputType()
export class DefinedAcademyShortLinkEventScalarWhereWithAggregatesInput {

    @Field(() => [DefinedAcademyShortLinkEventScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedAcademyShortLinkEventScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyShortLinkEventScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedAcademyShortLinkEventScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyShortLinkEventScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedAcademyShortLinkEventScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    shortLinkId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    occurredAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    anonymousSessionHash?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    referrer?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userAgentSummary?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    campaignMetadata?: JsonNullableWithAggregatesFilter;
}
