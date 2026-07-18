import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedAcademyReferralSourceTypeFilter } from '../prisma/enum-defined-academy-referral-source-type-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumDefinedAcademyReferralCampaignStatusFilter } from '../prisma/enum-defined-academy-referral-campaign-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedAcademyRelationFilter } from '../defined-academy/defined-academy-relation-filter.input';
import { DefinedAcademyPartnerNullableRelationFilter } from '../defined-academy-partner/defined-academy-partner-nullable-relation-filter.input';
import { DefinedAcademyCourseNullableRelationFilter } from '../defined-academy-course/defined-academy-course-nullable-relation-filter.input';
import { DefinedAcademyResourceNullableRelationFilter } from '../defined-academy-resource/defined-academy-resource-nullable-relation-filter.input';
import { DefinedAcademyShortLinkListRelationFilter } from '../defined-academy-short-link/defined-academy-short-link-list-relation-filter.input';
import { DefinedAcademyReferralListRelationFilter } from '../defined-academy-referral/defined-academy-referral-list-relation-filter.input';

@InputType()
export class DefinedAcademyReferralCampaignWhereInput {

    @Field(() => [DefinedAcademyReferralCampaignWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyReferralCampaignWhereInput>;

    @Field(() => [DefinedAcademyReferralCampaignWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyReferralCampaignWhereInput>;

    @Field(() => [DefinedAcademyReferralCampaignWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyReferralCampaignWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    academyId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumDefinedAcademyReferralSourceTypeFilter, {nullable:true})
    sourceType?: EnumDefinedAcademyReferralSourceTypeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    partnerId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    courseId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    resourceId?: IntNullableFilter;

    @Field(() => EnumDefinedAcademyReferralCampaignStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyReferralCampaignStatusFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    startsAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endsAt?: DateTimeNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedAcademyRelationFilter, {nullable:true})
    academy?: DefinedAcademyRelationFilter;

    @Field(() => DefinedAcademyPartnerNullableRelationFilter, {nullable:true})
    partner?: DefinedAcademyPartnerNullableRelationFilter;

    @Field(() => DefinedAcademyCourseNullableRelationFilter, {nullable:true})
    course?: DefinedAcademyCourseNullableRelationFilter;

    @Field(() => DefinedAcademyResourceNullableRelationFilter, {nullable:true})
    resource?: DefinedAcademyResourceNullableRelationFilter;

    @Field(() => DefinedAcademyShortLinkListRelationFilter, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkListRelationFilter;

    @Field(() => DefinedAcademyReferralListRelationFilter, {nullable:true})
    referrals?: DefinedAcademyReferralListRelationFilter;
}
