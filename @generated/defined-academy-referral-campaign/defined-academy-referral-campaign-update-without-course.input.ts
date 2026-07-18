import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumDefinedAcademyReferralSourceTypeFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-referral-source-type-field-update-operations.input';
import { EnumDefinedAcademyReferralCampaignStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-referral-campaign-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedAcademyUpdateOneRequiredWithoutReferralCampaignsNestedInput } from '../defined-academy/defined-academy-update-one-required-without-referral-campaigns-nested.input';
import { DefinedAcademyPartnerUpdateOneWithoutReferralCampaignsNestedInput } from '../defined-academy-partner/defined-academy-partner-update-one-without-referral-campaigns-nested.input';
import { DefinedAcademyResourceUpdateOneWithoutReferralCampaignsNestedInput } from '../defined-academy-resource/defined-academy-resource-update-one-without-referral-campaigns-nested.input';
import { DefinedAcademyShortLinkUpdateManyWithoutReferralCampaignNestedInput } from '../defined-academy-short-link/defined-academy-short-link-update-many-without-referral-campaign-nested.input';
import { DefinedAcademyReferralUpdateManyWithoutCampaignNestedInput } from '../defined-academy-referral/defined-academy-referral-update-many-without-campaign-nested.input';

@InputType()
export class DefinedAcademyReferralCampaignUpdateWithoutCourseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumDefinedAcademyReferralSourceTypeFieldUpdateOperationsInput, {nullable:true})
    sourceType?: EnumDefinedAcademyReferralSourceTypeFieldUpdateOperationsInput;

    @Field(() => EnumDefinedAcademyReferralCampaignStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedAcademyReferralCampaignStatusFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startsAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    endsAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedAcademyUpdateOneRequiredWithoutReferralCampaignsNestedInput, {nullable:true})
    academy?: DefinedAcademyUpdateOneRequiredWithoutReferralCampaignsNestedInput;

    @Field(() => DefinedAcademyPartnerUpdateOneWithoutReferralCampaignsNestedInput, {nullable:true})
    partner?: DefinedAcademyPartnerUpdateOneWithoutReferralCampaignsNestedInput;

    @Field(() => DefinedAcademyResourceUpdateOneWithoutReferralCampaignsNestedInput, {nullable:true})
    resource?: DefinedAcademyResourceUpdateOneWithoutReferralCampaignsNestedInput;

    @Field(() => DefinedAcademyShortLinkUpdateManyWithoutReferralCampaignNestedInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkUpdateManyWithoutReferralCampaignNestedInput;

    @Field(() => DefinedAcademyReferralUpdateManyWithoutCampaignNestedInput, {nullable:true})
    referrals?: DefinedAcademyReferralUpdateManyWithoutCampaignNestedInput;
}
