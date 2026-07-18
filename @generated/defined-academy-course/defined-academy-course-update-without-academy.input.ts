import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumDefinedAcademyCourseStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-course-status-field-update-operations.input';
import { EnumDefinedAcademyCourseVisibilityFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-course-visibility-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneWithoutDefinedAcademyCoursesCreatedNestedInput } from '../user/user-update-one-without-defined-academy-courses-created-nested.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleUpdateManyWithoutCourseNestedInput } from '../defined-academy-module/defined-academy-module-update-many-without-course-nested.input';
import { DefinedAcademyEnrollmentUpdateManyWithoutCourseNestedInput } from '../defined-academy-enrollment/defined-academy-enrollment-update-many-without-course-nested.input';
import { DefinedAcademyShortLinkUpdateManyWithoutCourseNestedInput } from '../defined-academy-short-link/defined-academy-short-link-update-many-without-course-nested.input';
import { DefinedAcademyReferralCampaignUpdateManyWithoutCourseNestedInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-update-many-without-course-nested.input';

@InputType()
export class DefinedAcademyCourseUpdateWithoutAcademyInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    summary?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    coverImageUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumDefinedAcademyCourseStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedAcademyCourseStatusFieldUpdateOperationsInput;

    @Field(() => EnumDefinedAcademyCourseVisibilityFieldUpdateOperationsInput, {nullable:true})
    visibility?: EnumDefinedAcademyCourseVisibilityFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    level?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    estimatedDurationMinutes?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    sortOrder?: IntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutDefinedAcademyCoursesCreatedNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutDefinedAcademyCoursesCreatedNestedInput)
    createdBy?: UserUpdateOneWithoutDefinedAcademyCoursesCreatedNestedInput;

    @Field(() => DefinedAcademyModuleUpdateManyWithoutCourseNestedInput, {nullable:true})
    modules?: DefinedAcademyModuleUpdateManyWithoutCourseNestedInput;

    @Field(() => DefinedAcademyEnrollmentUpdateManyWithoutCourseNestedInput, {nullable:true})
    enrollments?: DefinedAcademyEnrollmentUpdateManyWithoutCourseNestedInput;

    @Field(() => DefinedAcademyShortLinkUpdateManyWithoutCourseNestedInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkUpdateManyWithoutCourseNestedInput;

    @Field(() => DefinedAcademyReferralCampaignUpdateManyWithoutCourseNestedInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignUpdateManyWithoutCourseNestedInput;
}
