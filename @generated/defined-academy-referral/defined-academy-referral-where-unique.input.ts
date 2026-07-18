import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyReferralWhereInput } from './defined-academy-referral-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDefinedAcademyReferralStatusFilter } from '../prisma/enum-defined-academy-referral-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DefinedAcademyRelationFilter } from '../defined-academy/defined-academy-relation-filter.input';
import { DefinedAcademyReferralCampaignNullableRelationFilter } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-nullable-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerNullableRelationFilter } from '../defined-academy-partner/defined-academy-partner-nullable-relation-filter.input';

@InputType()
export class DefinedAcademyReferralWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DefinedAcademyReferralWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyReferralWhereInput>;

    @Field(() => [DefinedAcademyReferralWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyReferralWhereInput>;

    @Field(() => [DefinedAcademyReferralWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyReferralWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    academyId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    campaignId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    referrerUserId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    partnerId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    referredUserId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    referralCode?: StringFilter;

    @Field(() => EnumDefinedAcademyReferralStatusFilter, {nullable:true})
    status?: EnumDefinedAcademyReferralStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    firstVisitedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    registeredAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    enrolledAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    attributionExpiresAt?: DateTimeNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedAcademyRelationFilter, {nullable:true})
    academy?: DefinedAcademyRelationFilter;

    @Field(() => DefinedAcademyReferralCampaignNullableRelationFilter, {nullable:true})
    campaign?: DefinedAcademyReferralCampaignNullableRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    referrerUser?: UserNullableRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    referredUser?: UserNullableRelationFilter;

    @Field(() => DefinedAcademyPartnerNullableRelationFilter, {nullable:true})
    partner?: DefinedAcademyPartnerNullableRelationFilter;
}
