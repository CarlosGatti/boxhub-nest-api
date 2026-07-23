import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumDefinedAcademyStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-status-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AppUpdateOneWithoutDefinedAcademiesNestedInput } from '../app/app-update-one-without-defined-academies-nested.input';
import { DefinedAcademyCourseUpdateManyWithoutAcademyNestedInput } from '../defined-academy-course/defined-academy-course-update-many-without-academy-nested.input';
import { DefinedAcademyResourceUpdateManyWithoutAcademyNestedInput } from '../defined-academy-resource/defined-academy-resource-update-many-without-academy-nested.input';
import { DefinedAcademyPartnerCategoryUpdateManyWithoutAcademyNestedInput } from '../defined-academy-partner-category/defined-academy-partner-category-update-many-without-academy-nested.input';
import { DefinedAcademyShortLinkUpdateManyWithoutAcademyNestedInput } from '../defined-academy-short-link/defined-academy-short-link-update-many-without-academy-nested.input';
import { DefinedAcademyReferralCampaignUpdateManyWithoutAcademyNestedInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-update-many-without-academy-nested.input';
import { DefinedAcademyReferralUpdateManyWithoutAcademyNestedInput } from '../defined-academy-referral/defined-academy-referral-update-many-without-academy-nested.input';
import { DefinedAcademyCareerJourneyUpdateOneWithoutAcademyNestedInput } from '../defined-academy-career-journey/defined-academy-career-journey-update-one-without-academy-nested.input';
import { DefinedAcademyUserCareerProfileUpdateManyWithoutAcademyNestedInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-update-many-without-academy-nested.input';

@InputType()
export class DefinedAcademyUpdateWithoutPartnersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumDefinedAcademyStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedAcademyStatusFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    logoUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AppUpdateOneWithoutDefinedAcademiesNestedInput, {nullable:true})
    app?: AppUpdateOneWithoutDefinedAcademiesNestedInput;

    @Field(() => DefinedAcademyCourseUpdateManyWithoutAcademyNestedInput, {nullable:true})
    courses?: DefinedAcademyCourseUpdateManyWithoutAcademyNestedInput;

    @Field(() => DefinedAcademyResourceUpdateManyWithoutAcademyNestedInput, {nullable:true})
    resources?: DefinedAcademyResourceUpdateManyWithoutAcademyNestedInput;

    @Field(() => DefinedAcademyPartnerCategoryUpdateManyWithoutAcademyNestedInput, {nullable:true})
    partnerCategories?: DefinedAcademyPartnerCategoryUpdateManyWithoutAcademyNestedInput;

    @Field(() => DefinedAcademyShortLinkUpdateManyWithoutAcademyNestedInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkUpdateManyWithoutAcademyNestedInput;

    @Field(() => DefinedAcademyReferralCampaignUpdateManyWithoutAcademyNestedInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignUpdateManyWithoutAcademyNestedInput;

    @Field(() => DefinedAcademyReferralUpdateManyWithoutAcademyNestedInput, {nullable:true})
    referrals?: DefinedAcademyReferralUpdateManyWithoutAcademyNestedInput;

    @Field(() => DefinedAcademyCareerJourneyUpdateOneWithoutAcademyNestedInput, {nullable:true})
    careerJourney?: DefinedAcademyCareerJourneyUpdateOneWithoutAcademyNestedInput;

    @Field(() => DefinedAcademyUserCareerProfileUpdateManyWithoutAcademyNestedInput, {nullable:true})
    careerProfiles?: DefinedAcademyUserCareerProfileUpdateManyWithoutAcademyNestedInput;
}
