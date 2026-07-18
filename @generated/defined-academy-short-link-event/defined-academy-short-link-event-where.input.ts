import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DefinedAcademyShortLinkRelationFilter } from '../defined-academy-short-link/defined-academy-short-link-relation-filter.input';

@InputType()
export class DefinedAcademyShortLinkEventWhereInput {

    @Field(() => [DefinedAcademyShortLinkEventWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyShortLinkEventWhereInput>;

    @Field(() => [DefinedAcademyShortLinkEventWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyShortLinkEventWhereInput>;

    @Field(() => [DefinedAcademyShortLinkEventWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyShortLinkEventWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    shortLinkId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    occurredAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    anonymousSessionHash?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    referrer?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userAgentSummary?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    campaignMetadata?: JsonNullableFilter;

    @Field(() => DefinedAcademyShortLinkRelationFilter, {nullable:true})
    shortLink?: DefinedAcademyShortLinkRelationFilter;
}
