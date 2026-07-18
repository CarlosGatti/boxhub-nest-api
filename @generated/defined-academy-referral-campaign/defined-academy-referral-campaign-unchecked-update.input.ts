import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumDefinedAcademyReferralSourceTypeFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-referral-source-type-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { EnumDefinedAcademyReferralCampaignStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-referral-campaign-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedAcademyShortLinkUncheckedUpdateManyWithoutReferralCampaignNestedInput } from '../defined-academy-short-link/defined-academy-short-link-unchecked-update-many-without-referral-campaign-nested.input';
import { DefinedAcademyReferralUncheckedUpdateManyWithoutCampaignNestedInput } from '../defined-academy-referral/defined-academy-referral-unchecked-update-many-without-campaign-nested.input';

@InputType()
export class DefinedAcademyReferralCampaignUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    academyId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumDefinedAcademyReferralSourceTypeFieldUpdateOperationsInput, {nullable:true})
    sourceType?: EnumDefinedAcademyReferralSourceTypeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    partnerId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    courseId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    resourceId?: NullableIntFieldUpdateOperationsInput;

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

    @Field(() => DefinedAcademyShortLinkUncheckedUpdateManyWithoutReferralCampaignNestedInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkUncheckedUpdateManyWithoutReferralCampaignNestedInput;

    @Field(() => DefinedAcademyReferralUncheckedUpdateManyWithoutCampaignNestedInput, {nullable:true})
    referrals?: DefinedAcademyReferralUncheckedUpdateManyWithoutCampaignNestedInput;
}
