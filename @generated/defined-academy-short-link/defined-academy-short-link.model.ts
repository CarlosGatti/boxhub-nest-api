import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyShortLinkStatus } from '../prisma/defined-academy-short-link-status.enum';
import { DefinedAcademy } from '../defined-academy/defined-academy.model';
import { DefinedAcademyResource } from '../defined-academy-resource/defined-academy-resource.model';
import { DefinedAcademyCourse } from '../defined-academy-course/defined-academy-course.model';
import { DefinedAcademyPartner } from '../defined-academy-partner/defined-academy-partner.model';
import { DefinedAcademyReferralCampaign } from '../defined-academy-referral-campaign/defined-academy-referral-campaign.model';
import { User } from '../user/user.model';
import { DefinedAcademyShortLinkEvent } from '../defined-academy-short-link-event/defined-academy-short-link-event.model';
import { DefinedAcademyShortLinkCount } from './defined-academy-short-link-count.output';

@ObjectType()
export class DefinedAcademyShortLink {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    destinationUrl!: string;

    @Field(() => Int, {nullable:true})
    resourceId!: number | null;

    @Field(() => Int, {nullable:true})
    courseId!: number | null;

    @Field(() => Int, {nullable:true})
    partnerId!: number | null;

    @Field(() => Int, {nullable:true})
    referralCampaignId!: number | null;

    @Field(() => DefinedAcademyShortLinkStatus, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof DefinedAcademyShortLinkStatus;

    @Field(() => Date, {nullable:true})
    expiresAt!: Date | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    visitCount!: number;

    @Field(() => Int, {nullable:true})
    createdById!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedAcademy, {nullable:false})
    academy?: DefinedAcademy;

    @Field(() => DefinedAcademyResource, {nullable:true})
    resource?: DefinedAcademyResource | null;

    @Field(() => DefinedAcademyCourse, {nullable:true})
    course?: DefinedAcademyCourse | null;

    @Field(() => DefinedAcademyPartner, {nullable:true})
    partner?: DefinedAcademyPartner | null;

    @Field(() => DefinedAcademyReferralCampaign, {nullable:true})
    referralCampaign?: DefinedAcademyReferralCampaign | null;

    @Field(() => User, {nullable:true})
    createdBy?: User | null;

    @Field(() => [DefinedAcademyShortLinkEvent], {nullable:true})
    events?: Array<DefinedAcademyShortLinkEvent>;

    @Field(() => DefinedAcademyShortLinkCount, {nullable:false})
    _count?: DefinedAcademyShortLinkCount;
}
