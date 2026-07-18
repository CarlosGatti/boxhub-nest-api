import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyReferralSourceType } from '../prisma/defined-academy-referral-source-type.enum';
import { DefinedAcademyReferralCampaignStatus } from '../prisma/defined-academy-referral-campaign-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedAcademy } from '../defined-academy/defined-academy.model';
import { DefinedAcademyPartner } from '../defined-academy-partner/defined-academy-partner.model';
import { DefinedAcademyCourse } from '../defined-academy-course/defined-academy-course.model';
import { DefinedAcademyResource } from '../defined-academy-resource/defined-academy-resource.model';
import { DefinedAcademyShortLink } from '../defined-academy-short-link/defined-academy-short-link.model';
import { DefinedAcademyReferral } from '../defined-academy-referral/defined-academy-referral.model';
import { DefinedAcademyReferralCampaignCount } from './defined-academy-referral-campaign-count.output';

@ObjectType()
export class DefinedAcademyReferralCampaign {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => DefinedAcademyReferralSourceType, {nullable:false,defaultValue:'OTHER'})
    sourceType!: keyof typeof DefinedAcademyReferralSourceType;

    @Field(() => Int, {nullable:true})
    partnerId!: number | null;

    @Field(() => Int, {nullable:true})
    courseId!: number | null;

    @Field(() => Int, {nullable:true})
    resourceId!: number | null;

    @Field(() => DefinedAcademyReferralCampaignStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof DefinedAcademyReferralCampaignStatus;

    @Field(() => Date, {nullable:true})
    startsAt!: Date | null;

    @Field(() => Date, {nullable:true})
    endsAt!: Date | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedAcademy, {nullable:false})
    academy?: DefinedAcademy;

    @Field(() => DefinedAcademyPartner, {nullable:true})
    partner?: DefinedAcademyPartner | null;

    @Field(() => DefinedAcademyCourse, {nullable:true})
    course?: DefinedAcademyCourse | null;

    @Field(() => DefinedAcademyResource, {nullable:true})
    resource?: DefinedAcademyResource | null;

    @Field(() => [DefinedAcademyShortLink], {nullable:true})
    shortLinks?: Array<DefinedAcademyShortLink>;

    @Field(() => [DefinedAcademyReferral], {nullable:true})
    referrals?: Array<DefinedAcademyReferral>;

    @Field(() => DefinedAcademyReferralCampaignCount, {nullable:false})
    _count?: DefinedAcademyReferralCampaignCount;
}
