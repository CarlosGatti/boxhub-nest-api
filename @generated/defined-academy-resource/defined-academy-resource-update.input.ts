import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumDefinedAcademyResourceTypeFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-resource-type-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumDefinedAcademyCourseVisibilityFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-course-visibility-field-update-operations.input';
import { EnumDefinedAcademyResourceStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-resource-status-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedAcademyUpdateOneRequiredWithoutResourcesNestedInput } from '../defined-academy/defined-academy-update-one-required-without-resources-nested.input';
import { DefinedAcademyLessonUpdateOneWithoutResourcesNestedInput } from '../defined-academy-lesson/defined-academy-lesson-update-one-without-resources-nested.input';
import { UserUpdateOneWithoutDefinedAcademyResourcesCreatedNestedInput } from '../user/user-update-one-without-defined-academy-resources-created-nested.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkUpdateManyWithoutResourceNestedInput } from '../defined-academy-short-link/defined-academy-short-link-update-many-without-resource-nested.input';
import { DefinedAcademyReferralCampaignUpdateManyWithoutResourceNestedInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-update-many-without-resource-nested.input';

@InputType()
export class DefinedAcademyResourceUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumDefinedAcademyResourceTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumDefinedAcademyResourceTypeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    fileUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    externalUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    textContent?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mimeType?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    fileName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    fileSize?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    sortOrder?: IntFieldUpdateOperationsInput;

    @Field(() => EnumDefinedAcademyCourseVisibilityFieldUpdateOperationsInput, {nullable:true})
    visibility?: EnumDefinedAcademyCourseVisibilityFieldUpdateOperationsInput;

    @Field(() => EnumDefinedAcademyResourceStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedAcademyResourceStatusFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    downloadable?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedAcademyUpdateOneRequiredWithoutResourcesNestedInput, {nullable:true})
    academy?: DefinedAcademyUpdateOneRequiredWithoutResourcesNestedInput;

    @Field(() => DefinedAcademyLessonUpdateOneWithoutResourcesNestedInput, {nullable:true})
    lesson?: DefinedAcademyLessonUpdateOneWithoutResourcesNestedInput;

    @Field(() => UserUpdateOneWithoutDefinedAcademyResourcesCreatedNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutDefinedAcademyResourcesCreatedNestedInput)
    createdBy?: UserUpdateOneWithoutDefinedAcademyResourcesCreatedNestedInput;

    @Field(() => DefinedAcademyShortLinkUpdateManyWithoutResourceNestedInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkUpdateManyWithoutResourceNestedInput;

    @Field(() => DefinedAcademyReferralCampaignUpdateManyWithoutResourceNestedInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignUpdateManyWithoutResourceNestedInput;
}
