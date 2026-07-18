import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumDefinedAcademyReferralSourceTypeWithAggregatesFilter } from '../prisma/enum-defined-academy-referral-source-type-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumDefinedAcademyReferralCampaignStatusWithAggregatesFilter } from '../prisma/enum-defined-academy-referral-campaign-status-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedAcademyReferralCampaignScalarWhereWithAggregatesInput {

    @Field(() => [DefinedAcademyReferralCampaignScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedAcademyReferralCampaignScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyReferralCampaignScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedAcademyReferralCampaignScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedAcademyReferralCampaignScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedAcademyReferralCampaignScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    academyId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => EnumDefinedAcademyReferralSourceTypeWithAggregatesFilter, {nullable:true})
    sourceType?: EnumDefinedAcademyReferralSourceTypeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    partnerId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    courseId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    resourceId?: IntNullableWithAggregatesFilter;

    @Field(() => EnumDefinedAcademyReferralCampaignStatusWithAggregatesFilter, {nullable:true})
    status?: EnumDefinedAcademyReferralCampaignStatusWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    startsAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    endsAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metadata?: JsonNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
