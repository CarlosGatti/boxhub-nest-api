import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyStatus } from '../prisma/defined-academy-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { App } from '../app/app.model';
import { DefinedAcademyCourse } from '../defined-academy-course/defined-academy-course.model';
import { DefinedAcademyResource } from '../defined-academy-resource/defined-academy-resource.model';
import { DefinedAcademyPartner } from '../defined-academy-partner/defined-academy-partner.model';
import { DefinedAcademyPartnerCategory } from '../defined-academy-partner-category/defined-academy-partner-category.model';
import { DefinedAcademyShortLink } from '../defined-academy-short-link/defined-academy-short-link.model';
import { DefinedAcademyReferralCampaign } from '../defined-academy-referral-campaign/defined-academy-referral-campaign.model';
import { DefinedAcademyReferral } from '../defined-academy-referral/defined-academy-referral.model';
import { DefinedAcademyCount } from './defined-academy-count.output';

@ObjectType()
export class DefinedAcademy {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    appId!: number | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => DefinedAcademyStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof DefinedAcademyStatus;

    @Field(() => String, {nullable:true})
    logoUrl!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    settings!: any | null;

    @Field(() => Date, {nullable:true})
    publishedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    archivedAt!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => App, {nullable:true})
    app?: App | null;

    @Field(() => [DefinedAcademyCourse], {nullable:true})
    courses?: Array<DefinedAcademyCourse>;

    @Field(() => [DefinedAcademyResource], {nullable:true})
    resources?: Array<DefinedAcademyResource>;

    @Field(() => [DefinedAcademyPartner], {nullable:true})
    partners?: Array<DefinedAcademyPartner>;

    @Field(() => [DefinedAcademyPartnerCategory], {nullable:true})
    partnerCategories?: Array<DefinedAcademyPartnerCategory>;

    @Field(() => [DefinedAcademyShortLink], {nullable:true})
    shortLinks?: Array<DefinedAcademyShortLink>;

    @Field(() => [DefinedAcademyReferralCampaign], {nullable:true})
    referralCampaigns?: Array<DefinedAcademyReferralCampaign>;

    @Field(() => [DefinedAcademyReferral], {nullable:true})
    referrals?: Array<DefinedAcademyReferral>;

    @Field(() => DefinedAcademyCount, {nullable:false})
    _count?: DefinedAcademyCount;
}
