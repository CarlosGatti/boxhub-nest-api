import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumDefinedAcademyStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-status-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedAcademyCourseUncheckedUpdateManyWithoutAcademyNestedInput } from '../defined-academy-course/defined-academy-course-unchecked-update-many-without-academy-nested.input';
import { DefinedAcademyResourceUncheckedUpdateManyWithoutAcademyNestedInput } from '../defined-academy-resource/defined-academy-resource-unchecked-update-many-without-academy-nested.input';
import { DefinedAcademyPartnerUncheckedUpdateManyWithoutAcademyNestedInput } from '../defined-academy-partner/defined-academy-partner-unchecked-update-many-without-academy-nested.input';
import { DefinedAcademyPartnerCategoryUncheckedUpdateManyWithoutAcademyNestedInput } from '../defined-academy-partner-category/defined-academy-partner-category-unchecked-update-many-without-academy-nested.input';
import { DefinedAcademyShortLinkUncheckedUpdateManyWithoutAcademyNestedInput } from '../defined-academy-short-link/defined-academy-short-link-unchecked-update-many-without-academy-nested.input';
import { DefinedAcademyReferralUncheckedUpdateManyWithoutAcademyNestedInput } from '../defined-academy-referral/defined-academy-referral-unchecked-update-many-without-academy-nested.input';

@InputType()
export class DefinedAcademyUncheckedUpdateWithoutReferralCampaignsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    appId?: NullableIntFieldUpdateOperationsInput;

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

    @Field(() => DefinedAcademyCourseUncheckedUpdateManyWithoutAcademyNestedInput, {nullable:true})
    courses?: DefinedAcademyCourseUncheckedUpdateManyWithoutAcademyNestedInput;

    @Field(() => DefinedAcademyResourceUncheckedUpdateManyWithoutAcademyNestedInput, {nullable:true})
    resources?: DefinedAcademyResourceUncheckedUpdateManyWithoutAcademyNestedInput;

    @Field(() => DefinedAcademyPartnerUncheckedUpdateManyWithoutAcademyNestedInput, {nullable:true})
    partners?: DefinedAcademyPartnerUncheckedUpdateManyWithoutAcademyNestedInput;

    @Field(() => DefinedAcademyPartnerCategoryUncheckedUpdateManyWithoutAcademyNestedInput, {nullable:true})
    partnerCategories?: DefinedAcademyPartnerCategoryUncheckedUpdateManyWithoutAcademyNestedInput;

    @Field(() => DefinedAcademyShortLinkUncheckedUpdateManyWithoutAcademyNestedInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkUncheckedUpdateManyWithoutAcademyNestedInput;

    @Field(() => DefinedAcademyReferralUncheckedUpdateManyWithoutAcademyNestedInput, {nullable:true})
    referrals?: DefinedAcademyReferralUncheckedUpdateManyWithoutAcademyNestedInput;
}
