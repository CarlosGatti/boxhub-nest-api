import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyResourceType } from '../prisma/defined-academy-resource-type.enum';
import { DefinedAcademyCourseVisibility } from '../prisma/defined-academy-course-visibility.enum';
import { DefinedAcademyResourceStatus } from '../prisma/defined-academy-resource-status.enum';
import { DefinedAcademy } from '../defined-academy/defined-academy.model';
import { DefinedAcademyLesson } from '../defined-academy-lesson/defined-academy-lesson.model';
import { User } from '../user/user.model';
import { DefinedAcademyShortLink } from '../defined-academy-short-link/defined-academy-short-link.model';
import { DefinedAcademyReferralCampaign } from '../defined-academy-referral-campaign/defined-academy-referral-campaign.model';
import { DefinedAcademyCareerStageContent } from '../defined-academy-career-stage-content/defined-academy-career-stage-content.model';
import { DefinedAcademyResourceCount } from './defined-academy-resource-count.output';

@ObjectType()
export class DefinedAcademyResource {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => Int, {nullable:true})
    lessonId!: number | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => DefinedAcademyResourceType, {nullable:false})
    type!: keyof typeof DefinedAcademyResourceType;

    @Field(() => String, {nullable:true})
    fileUrl!: string | null;

    @Field(() => String, {nullable:true})
    externalUrl!: string | null;

    @Field(() => String, {nullable:true})
    textContent!: string | null;

    @Field(() => String, {nullable:true})
    mimeType!: string | null;

    @Field(() => String, {nullable:true})
    fileName!: string | null;

    @Field(() => Int, {nullable:true})
    fileSize!: number | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    sortOrder!: number;

    @Field(() => DefinedAcademyCourseVisibility, {nullable:false,defaultValue:'PUBLIC'})
    visibility!: keyof typeof DefinedAcademyCourseVisibility;

    @Field(() => DefinedAcademyResourceStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof DefinedAcademyResourceStatus;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    downloadable!: boolean;

    @Field(() => Int, {nullable:true})
    createdById!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedAcademy, {nullable:false})
    academy?: DefinedAcademy;

    @Field(() => DefinedAcademyLesson, {nullable:true})
    lesson?: DefinedAcademyLesson | null;

    @Field(() => User, {nullable:true})
    createdBy?: User | null;

    @Field(() => [DefinedAcademyShortLink], {nullable:true})
    shortLinks?: Array<DefinedAcademyShortLink>;

    @Field(() => [DefinedAcademyReferralCampaign], {nullable:true})
    referralCampaigns?: Array<DefinedAcademyReferralCampaign>;

    @Field(() => [DefinedAcademyCareerStageContent], {nullable:true})
    careerStageLinks?: Array<DefinedAcademyCareerStageContent>;

    @Field(() => DefinedAcademyResourceCount, {nullable:false})
    _count?: DefinedAcademyResourceCount;
}
