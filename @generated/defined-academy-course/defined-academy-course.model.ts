import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCourseStatus } from '../prisma/defined-academy-course-status.enum';
import { DefinedAcademyCourseVisibility } from '../prisma/defined-academy-course-visibility.enum';
import { DefinedAcademy } from '../defined-academy/defined-academy.model';
import { User } from '../user/user.model';
import { DefinedAcademyModule } from '../defined-academy-module/defined-academy-module.model';
import { DefinedAcademyEnrollment } from '../defined-academy-enrollment/defined-academy-enrollment.model';
import { DefinedAcademyShortLink } from '../defined-academy-short-link/defined-academy-short-link.model';
import { DefinedAcademyReferralCampaign } from '../defined-academy-referral-campaign/defined-academy-referral-campaign.model';
import { DefinedAcademyCareerStageContent } from '../defined-academy-career-stage-content/defined-academy-career-stage-content.model';
import { DefinedAcademyCourseCount } from './defined-academy-course-count.output';

@ObjectType()
export class DefinedAcademyCourse {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    summary!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    coverImageUrl!: string | null;

    @Field(() => DefinedAcademyCourseStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof DefinedAcademyCourseStatus;

    @Field(() => DefinedAcademyCourseVisibility, {nullable:false,defaultValue:'PUBLIC'})
    visibility!: keyof typeof DefinedAcademyCourseVisibility;

    @Field(() => String, {nullable:true})
    level!: string | null;

    @Field(() => Int, {nullable:true})
    estimatedDurationMinutes!: number | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    sortOrder!: number;

    @Field(() => Date, {nullable:true})
    publishedAt!: Date | null;

    @Field(() => Int, {nullable:true})
    createdById!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedAcademy, {nullable:false})
    academy?: DefinedAcademy;

    @Field(() => User, {nullable:true})
    createdBy?: User | null;

    @Field(() => [DefinedAcademyModule], {nullable:true})
    modules?: Array<DefinedAcademyModule>;

    @Field(() => [DefinedAcademyEnrollment], {nullable:true})
    enrollments?: Array<DefinedAcademyEnrollment>;

    @Field(() => [DefinedAcademyShortLink], {nullable:true})
    shortLinks?: Array<DefinedAcademyShortLink>;

    @Field(() => [DefinedAcademyReferralCampaign], {nullable:true})
    referralCampaigns?: Array<DefinedAcademyReferralCampaign>;

    @Field(() => [DefinedAcademyCareerStageContent], {nullable:true})
    careerStageLinks?: Array<DefinedAcademyCareerStageContent>;

    @Field(() => DefinedAcademyCourseCount, {nullable:false})
    _count?: DefinedAcademyCourseCount;
}
