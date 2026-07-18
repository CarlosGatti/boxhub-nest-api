import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCourseStatus } from '../prisma/defined-academy-course-status.enum';
import { DefinedAcademyCourseVisibility } from '../prisma/defined-academy-course-visibility.enum';
import { DefinedAcademyModuleUncheckedCreateNestedManyWithoutCourseInput } from '../defined-academy-module/defined-academy-module-unchecked-create-nested-many-without-course.input';
import { DefinedAcademyEnrollmentUncheckedCreateNestedManyWithoutCourseInput } from '../defined-academy-enrollment/defined-academy-enrollment-unchecked-create-nested-many-without-course.input';
import { DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutCourseInput } from '../defined-academy-short-link/defined-academy-short-link-unchecked-create-nested-many-without-course.input';
import { DefinedAcademyReferralCampaignUncheckedCreateNestedManyWithoutCourseInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-unchecked-create-nested-many-without-course.input';

@InputType()
export class DefinedAcademyCourseUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    summary?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    coverImageUrl?: string;

    @Field(() => DefinedAcademyCourseStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyCourseStatus;

    @Field(() => DefinedAcademyCourseVisibility, {nullable:true})
    visibility?: keyof typeof DefinedAcademyCourseVisibility;

    @Field(() => String, {nullable:true})
    level?: string;

    @Field(() => Int, {nullable:true})
    estimatedDurationMinutes?: number;

    @Field(() => Int, {nullable:true})
    sortOrder?: number;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    createdById?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyModuleUncheckedCreateNestedManyWithoutCourseInput, {nullable:true})
    modules?: DefinedAcademyModuleUncheckedCreateNestedManyWithoutCourseInput;

    @Field(() => DefinedAcademyEnrollmentUncheckedCreateNestedManyWithoutCourseInput, {nullable:true})
    enrollments?: DefinedAcademyEnrollmentUncheckedCreateNestedManyWithoutCourseInput;

    @Field(() => DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutCourseInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutCourseInput;

    @Field(() => DefinedAcademyReferralCampaignUncheckedCreateNestedManyWithoutCourseInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignUncheckedCreateNestedManyWithoutCourseInput;
}
