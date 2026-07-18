import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumDefinedAcademyPartnerStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-partner-status-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedAcademyUpdateOneRequiredWithoutPartnersNestedInput } from '../defined-academy/defined-academy-update-one-required-without-partners-nested.input';
import { DefinedAcademyPartnerCategoryUpdateOneWithoutPartnersNestedInput } from '../defined-academy-partner-category/defined-academy-partner-category-update-one-without-partners-nested.input';
import { DefinedAcademyShortLinkUpdateManyWithoutPartnerNestedInput } from '../defined-academy-short-link/defined-academy-short-link-update-many-without-partner-nested.input';
import { DefinedAcademyReferralCampaignUpdateManyWithoutPartnerNestedInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-update-many-without-partner-nested.input';
import { DefinedAcademyReferralUpdateManyWithoutPartnerNestedInput } from '../defined-academy-referral/defined-academy-referral-update-many-without-partner-nested.input';

@InputType()
export class DefinedAcademyPartnerUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    websiteUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    contactUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    logoUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    location?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumDefinedAcademyPartnerStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedAcademyPartnerStatusFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    featured?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    sortOrder?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedAcademyUpdateOneRequiredWithoutPartnersNestedInput, {nullable:true})
    academy?: DefinedAcademyUpdateOneRequiredWithoutPartnersNestedInput;

    @Field(() => DefinedAcademyPartnerCategoryUpdateOneWithoutPartnersNestedInput, {nullable:true})
    category?: DefinedAcademyPartnerCategoryUpdateOneWithoutPartnersNestedInput;

    @Field(() => DefinedAcademyShortLinkUpdateManyWithoutPartnerNestedInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkUpdateManyWithoutPartnerNestedInput;

    @Field(() => DefinedAcademyReferralCampaignUpdateManyWithoutPartnerNestedInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignUpdateManyWithoutPartnerNestedInput;

    @Field(() => DefinedAcademyReferralUpdateManyWithoutPartnerNestedInput, {nullable:true})
    referrals?: DefinedAcademyReferralUpdateManyWithoutPartnerNestedInput;
}
