import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumDefinedAcademyPartnerStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-partner-status-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedAcademyShortLinkUncheckedUpdateManyWithoutPartnerNestedInput } from '../defined-academy-short-link/defined-academy-short-link-unchecked-update-many-without-partner-nested.input';
import { DefinedAcademyReferralCampaignUncheckedUpdateManyWithoutPartnerNestedInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-unchecked-update-many-without-partner-nested.input';
import { DefinedAcademyReferralUncheckedUpdateManyWithoutPartnerNestedInput } from '../defined-academy-referral/defined-academy-referral-unchecked-update-many-without-partner-nested.input';

@InputType()
export class DefinedAcademyPartnerUncheckedUpdateWithoutAcademyInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    categoryId?: NullableIntFieldUpdateOperationsInput;

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

    @Field(() => DefinedAcademyShortLinkUncheckedUpdateManyWithoutPartnerNestedInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkUncheckedUpdateManyWithoutPartnerNestedInput;

    @Field(() => DefinedAcademyReferralCampaignUncheckedUpdateManyWithoutPartnerNestedInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignUncheckedUpdateManyWithoutPartnerNestedInput;

    @Field(() => DefinedAcademyReferralUncheckedUpdateManyWithoutPartnerNestedInput, {nullable:true})
    referrals?: DefinedAcademyReferralUncheckedUpdateManyWithoutPartnerNestedInput;
}
