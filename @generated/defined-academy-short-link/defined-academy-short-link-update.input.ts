import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDefinedAcademyShortLinkStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-short-link-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedAcademyUpdateOneRequiredWithoutShortLinksNestedInput } from '../defined-academy/defined-academy-update-one-required-without-short-links-nested.input';
import { DefinedAcademyResourceUpdateOneWithoutShortLinksNestedInput } from '../defined-academy-resource/defined-academy-resource-update-one-without-short-links-nested.input';
import { DefinedAcademyCourseUpdateOneWithoutShortLinksNestedInput } from '../defined-academy-course/defined-academy-course-update-one-without-short-links-nested.input';
import { DefinedAcademyPartnerUpdateOneWithoutShortLinksNestedInput } from '../defined-academy-partner/defined-academy-partner-update-one-without-short-links-nested.input';
import { DefinedAcademyReferralCampaignUpdateOneWithoutShortLinksNestedInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-update-one-without-short-links-nested.input';
import { UserUpdateOneWithoutDefinedAcademyShortLinksCreatedNestedInput } from '../user/user-update-one-without-defined-academy-short-links-created-nested.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkEventUpdateManyWithoutShortLinkNestedInput } from '../defined-academy-short-link-event/defined-academy-short-link-event-update-many-without-short-link-nested.input';

@InputType()
export class DefinedAcademyShortLinkUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    destinationUrl?: StringFieldUpdateOperationsInput;

    @Field(() => EnumDefinedAcademyShortLinkStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedAcademyShortLinkStatusFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    visitCount?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedAcademyUpdateOneRequiredWithoutShortLinksNestedInput, {nullable:true})
    academy?: DefinedAcademyUpdateOneRequiredWithoutShortLinksNestedInput;

    @Field(() => DefinedAcademyResourceUpdateOneWithoutShortLinksNestedInput, {nullable:true})
    resource?: DefinedAcademyResourceUpdateOneWithoutShortLinksNestedInput;

    @Field(() => DefinedAcademyCourseUpdateOneWithoutShortLinksNestedInput, {nullable:true})
    course?: DefinedAcademyCourseUpdateOneWithoutShortLinksNestedInput;

    @Field(() => DefinedAcademyPartnerUpdateOneWithoutShortLinksNestedInput, {nullable:true})
    partner?: DefinedAcademyPartnerUpdateOneWithoutShortLinksNestedInput;

    @Field(() => DefinedAcademyReferralCampaignUpdateOneWithoutShortLinksNestedInput, {nullable:true})
    referralCampaign?: DefinedAcademyReferralCampaignUpdateOneWithoutShortLinksNestedInput;

    @Field(() => UserUpdateOneWithoutDefinedAcademyShortLinksCreatedNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutDefinedAcademyShortLinksCreatedNestedInput)
    createdBy?: UserUpdateOneWithoutDefinedAcademyShortLinksCreatedNestedInput;

    @Field(() => DefinedAcademyShortLinkEventUpdateManyWithoutShortLinkNestedInput, {nullable:true})
    events?: DefinedAcademyShortLinkEventUpdateManyWithoutShortLinkNestedInput;
}
