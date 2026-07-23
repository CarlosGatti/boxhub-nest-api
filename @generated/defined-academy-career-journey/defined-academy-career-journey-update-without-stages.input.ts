import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumDefinedAcademyCareerJourneyStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-career-journey-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedAcademyUpdateOneRequiredWithoutCareerJourneyNestedInput } from '../defined-academy/defined-academy-update-one-required-without-career-journey-nested.input';
import { DefinedAcademyUserCareerProfileUpdateManyWithoutJourneyNestedInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-update-many-without-journey-nested.input';

@InputType()
export class DefinedAcademyCareerJourneyUpdateWithoutStagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumDefinedAcademyCareerJourneyStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedAcademyCareerJourneyStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedAcademyUpdateOneRequiredWithoutCareerJourneyNestedInput, {nullable:true})
    academy?: DefinedAcademyUpdateOneRequiredWithoutCareerJourneyNestedInput;

    @Field(() => DefinedAcademyUserCareerProfileUpdateManyWithoutJourneyNestedInput, {nullable:true})
    profiles?: DefinedAcademyUserCareerProfileUpdateManyWithoutJourneyNestedInput;
}
