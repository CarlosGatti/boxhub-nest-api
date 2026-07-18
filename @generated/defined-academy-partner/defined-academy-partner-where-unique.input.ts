import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyPartnerAcademyIdSlugCompoundUniqueInput } from './defined-academy-partner-academy-id-slug-compound-unique.input';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedAcademyPartnerStatusFilter } from '../prisma/enum-defined-academy-partner-status-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedAcademyRelationFilter } from '../defined-academy/defined-academy-relation-filter.input';
import { DefinedAcademyPartnerCategoryNullableRelationFilter } from '../defined-academy-partner-category/defined-academy-partner-category-nullable-relation-filter.input';
import { DefinedAcademyShortLinkListRelationFilter } from '../defined-academy-short-link/defined-academy-short-link-list-relation-filter.input';
import { DefinedAcademyReferralCampaignListRelationFilter } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-list-relation-filter.input';
import { DefinedAcademyReferralListRelationFilter } from '../defined-academy-referral/defined-academy-referral-list-relation-filter.input';

@InputType()
export class DefinedAcademyPartnerWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => DefinedAcademyPartnerAcademyIdSlugCompoundUniqueInput, {nullable:true})
    academyId_slug?: DefinedAcademyPartnerAcademyIdSlugCompoundUniqueInput;

    @Field(() => [DefinedAcademyPartnerWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyPartnerWhereInput>;

    @Field(() => [DefinedAcademyPartnerWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyPartnerWhereInput>;

    @Field(() => [DefinedAcademyPartnerWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyPartnerWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    academyId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    categoryId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    websiteUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contactUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    logoUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    location?: StringNullableFilter;

    @Field(() => EnumDefinedAcademyPartnerStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyPartnerStatusFilter;

    @Field(() => BoolFilter, {nullable:true})
    featured?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    sortOrder?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedAcademyRelationFilter, {nullable:true})
    academy?: DefinedAcademyRelationFilter;

    @Field(() => DefinedAcademyPartnerCategoryNullableRelationFilter, {nullable:true})
    category?: DefinedAcademyPartnerCategoryNullableRelationFilter;

    @Field(() => DefinedAcademyShortLinkListRelationFilter, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkListRelationFilter;

    @Field(() => DefinedAcademyReferralCampaignListRelationFilter, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignListRelationFilter;

    @Field(() => DefinedAcademyReferralListRelationFilter, {nullable:true})
    referrals?: DefinedAcademyReferralListRelationFilter;
}
