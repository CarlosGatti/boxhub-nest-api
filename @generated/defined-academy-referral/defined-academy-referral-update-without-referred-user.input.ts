import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDefinedAcademyReferralStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-referral-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedAcademyUpdateOneRequiredWithoutReferralsNestedInput } from '../defined-academy/defined-academy-update-one-required-without-referrals-nested.input';
import { DefinedAcademyReferralCampaignUpdateOneWithoutReferralsNestedInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-update-one-without-referrals-nested.input';
import { UserUpdateOneWithoutDefinedAcademyReferralsAsReferrerNestedInput } from '../user/user-update-one-without-defined-academy-referrals-as-referrer-nested.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerUpdateOneWithoutReferralsNestedInput } from '../defined-academy-partner/defined-academy-partner-update-one-without-referrals-nested.input';

@InputType()
export class DefinedAcademyReferralUpdateWithoutReferredUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    referralCode?: StringFieldUpdateOperationsInput;

    @Field(() => EnumDefinedAcademyReferralStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedAcademyReferralStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    firstVisitedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    registeredAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    enrolledAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    attributionExpiresAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedAcademyUpdateOneRequiredWithoutReferralsNestedInput, {nullable:true})
    academy?: DefinedAcademyUpdateOneRequiredWithoutReferralsNestedInput;

    @Field(() => DefinedAcademyReferralCampaignUpdateOneWithoutReferralsNestedInput, {nullable:true})
    campaign?: DefinedAcademyReferralCampaignUpdateOneWithoutReferralsNestedInput;

    @Field(() => UserUpdateOneWithoutDefinedAcademyReferralsAsReferrerNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutDefinedAcademyReferralsAsReferrerNestedInput)
    referrerUser?: UserUpdateOneWithoutDefinedAcademyReferralsAsReferrerNestedInput;

    @Field(() => DefinedAcademyPartnerUpdateOneWithoutReferralsNestedInput, {nullable:true})
    partner?: DefinedAcademyPartnerUpdateOneWithoutReferralsNestedInput;
}
