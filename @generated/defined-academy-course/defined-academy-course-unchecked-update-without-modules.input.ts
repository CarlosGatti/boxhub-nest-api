import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumDefinedAcademyCourseStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-course-status-field-update-operations.input';
import { EnumDefinedAcademyCourseVisibilityFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-course-visibility-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedAcademyEnrollmentUncheckedUpdateManyWithoutCourseNestedInput } from '../defined-academy-enrollment/defined-academy-enrollment-unchecked-update-many-without-course-nested.input';
import { DefinedAcademyShortLinkUncheckedUpdateManyWithoutCourseNestedInput } from '../defined-academy-short-link/defined-academy-short-link-unchecked-update-many-without-course-nested.input';
import { DefinedAcademyReferralCampaignUncheckedUpdateManyWithoutCourseNestedInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-unchecked-update-many-without-course-nested.input';

@InputType()
export class DefinedAcademyCourseUncheckedUpdateWithoutModulesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    academyId?: IntFieldUpdateOperationsInput;

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

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    createdById?: NullableIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedAcademyEnrollmentUncheckedUpdateManyWithoutCourseNestedInput, {nullable:true})
    enrollments?: DefinedAcademyEnrollmentUncheckedUpdateManyWithoutCourseNestedInput;

    @Field(() => DefinedAcademyShortLinkUncheckedUpdateManyWithoutCourseNestedInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkUncheckedUpdateManyWithoutCourseNestedInput;

    @Field(() => DefinedAcademyReferralCampaignUncheckedUpdateManyWithoutCourseNestedInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignUncheckedUpdateManyWithoutCourseNestedInput;
}
