import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedAcademyStatusFilter } from '../prisma/enum-defined-academy-status-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AppNullableRelationFilter } from '../app/app-nullable-relation-filter.input';
import { DefinedAcademyCourseListRelationFilter } from '../defined-academy-course/defined-academy-course-list-relation-filter.input';
import { DefinedAcademyResourceListRelationFilter } from '../defined-academy-resource/defined-academy-resource-list-relation-filter.input';
import { DefinedAcademyPartnerListRelationFilter } from '../defined-academy-partner/defined-academy-partner-list-relation-filter.input';
import { DefinedAcademyPartnerCategoryListRelationFilter } from '../defined-academy-partner-category/defined-academy-partner-category-list-relation-filter.input';
import { DefinedAcademyShortLinkListRelationFilter } from '../defined-academy-short-link/defined-academy-short-link-list-relation-filter.input';
import { DefinedAcademyReferralCampaignListRelationFilter } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-list-relation-filter.input';
import { DefinedAcademyReferralListRelationFilter } from '../defined-academy-referral/defined-academy-referral-list-relation-filter.input';

@InputType()
export class DefinedAcademyWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [DefinedAcademyWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyWhereInput>;

    @Field(() => [DefinedAcademyWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyWhereInput>;

    @Field(() => [DefinedAcademyWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyWhereInput>;

    @Field(() => IntNullableFilter, {nullable:true})
    appId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumDefinedAcademyStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyStatusFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    logoUrl?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    settings?: JsonNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    publishedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    archivedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => AppNullableRelationFilter, {nullable:true})
    app?: AppNullableRelationFilter;

    @Field(() => DefinedAcademyCourseListRelationFilter, {nullable:true})
    courses?: DefinedAcademyCourseListRelationFilter;

    @Field(() => DefinedAcademyResourceListRelationFilter, {nullable:true})
    resources?: DefinedAcademyResourceListRelationFilter;

    @Field(() => DefinedAcademyPartnerListRelationFilter, {nullable:true})
    partners?: DefinedAcademyPartnerListRelationFilter;

    @Field(() => DefinedAcademyPartnerCategoryListRelationFilter, {nullable:true})
    partnerCategories?: DefinedAcademyPartnerCategoryListRelationFilter;

    @Field(() => DefinedAcademyShortLinkListRelationFilter, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkListRelationFilter;

    @Field(() => DefinedAcademyReferralCampaignListRelationFilter, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignListRelationFilter;

    @Field(() => DefinedAcademyReferralListRelationFilter, {nullable:true})
    referrals?: DefinedAcademyReferralListRelationFilter;
}
