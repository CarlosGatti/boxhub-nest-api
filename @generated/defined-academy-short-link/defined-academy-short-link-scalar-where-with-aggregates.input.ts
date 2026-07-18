import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumDefinedAcademyShortLinkStatusWithAggregatesFilter } from '../prisma/enum-defined-academy-short-link-status-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedAcademyShortLinkScalarWhereWithAggregatesInput {

    @Field(() => [DefinedAcademyShortLinkScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedAcademyShortLinkScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyShortLinkScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedAcademyShortLinkScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyShortLinkScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedAcademyShortLinkScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    academyId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    destinationUrl?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    resourceId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    courseId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    partnerId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    referralCampaignId?: IntNullableWithAggregatesFilter;

    @Field(() => EnumDefinedAcademyShortLinkStatusWithAggregatesFilter, {nullable:true})
    status?: EnumDefinedAcademyShortLinkStatusWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    expiresAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    visitCount?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    createdById?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
