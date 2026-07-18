import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyPartnerStatus } from '../prisma/defined-academy-partner-status.enum';
import { DefinedAcademy } from '../defined-academy/defined-academy.model';
import { DefinedAcademyPartnerCategory } from '../defined-academy-partner-category/defined-academy-partner-category.model';
import { DefinedAcademyShortLink } from '../defined-academy-short-link/defined-academy-short-link.model';
import { DefinedAcademyReferralCampaign } from '../defined-academy-referral-campaign/defined-academy-referral-campaign.model';
import { DefinedAcademyReferral } from '../defined-academy-referral/defined-academy-referral.model';
import { DefinedAcademyPartnerCount } from './defined-academy-partner-count.output';

@ObjectType()
export class DefinedAcademyPartner {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => Int, {nullable:true})
    categoryId!: number | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    websiteUrl!: string | null;

    @Field(() => String, {nullable:true})
    contactUrl!: string | null;

    @Field(() => String, {nullable:true})
    logoUrl!: string | null;

    @Field(() => String, {nullable:true})
    location!: string | null;

    @Field(() => DefinedAcademyPartnerStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof DefinedAcademyPartnerStatus;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    featured!: boolean;

    @Field(() => Int, {nullable:false,defaultValue:0})
    sortOrder!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedAcademy, {nullable:false})
    academy?: DefinedAcademy;

    @Field(() => DefinedAcademyPartnerCategory, {nullable:true})
    category?: DefinedAcademyPartnerCategory | null;

    @Field(() => [DefinedAcademyShortLink], {nullable:true})
    shortLinks?: Array<DefinedAcademyShortLink>;

    @Field(() => [DefinedAcademyReferralCampaign], {nullable:true})
    referralCampaigns?: Array<DefinedAcademyReferralCampaign>;

    @Field(() => [DefinedAcademyReferral], {nullable:true})
    referrals?: Array<DefinedAcademyReferral>;

    @Field(() => DefinedAcademyPartnerCount, {nullable:false})
    _count?: DefinedAcademyPartnerCount;
}
