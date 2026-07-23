import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseStatus } from '../prisma/defined-academy-course-status.enum';
import { DefinedAcademyCourseVisibility } from '../prisma/defined-academy-course-visibility.enum';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCreateNestedOneWithoutCoursesInput } from '../defined-academy/defined-academy-create-nested-one-without-courses.input';
import { DefinedAcademyModuleCreateNestedManyWithoutCourseInput } from '../defined-academy-module/defined-academy-module-create-nested-many-without-course.input';
import { DefinedAcademyEnrollmentCreateNestedManyWithoutCourseInput } from '../defined-academy-enrollment/defined-academy-enrollment-create-nested-many-without-course.input';
import { DefinedAcademyShortLinkCreateNestedManyWithoutCourseInput } from '../defined-academy-short-link/defined-academy-short-link-create-nested-many-without-course.input';
import { DefinedAcademyReferralCampaignCreateNestedManyWithoutCourseInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-create-nested-many-without-course.input';
import { DefinedAcademyCareerStageContentCreateNestedManyWithoutCourseInput } from '../defined-academy-career-stage-content/defined-academy-career-stage-content-create-nested-many-without-course.input';

@InputType()
export class DefinedAcademyCourseCreateWithoutCreatedByInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyCreateNestedOneWithoutCoursesInput, {nullable:false})
    academy!: DefinedAcademyCreateNestedOneWithoutCoursesInput;

    @Field(() => DefinedAcademyModuleCreateNestedManyWithoutCourseInput, {nullable:true})
    modules?: DefinedAcademyModuleCreateNestedManyWithoutCourseInput;

    @Field(() => DefinedAcademyEnrollmentCreateNestedManyWithoutCourseInput, {nullable:true})
    enrollments?: DefinedAcademyEnrollmentCreateNestedManyWithoutCourseInput;

    @Field(() => DefinedAcademyShortLinkCreateNestedManyWithoutCourseInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkCreateNestedManyWithoutCourseInput;

    @Field(() => DefinedAcademyReferralCampaignCreateNestedManyWithoutCourseInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignCreateNestedManyWithoutCourseInput;

    @Field(() => DefinedAcademyCareerStageContentCreateNestedManyWithoutCourseInput, {nullable:true})
    careerStageLinks?: DefinedAcademyCareerStageContentCreateNestedManyWithoutCourseInput;
}
