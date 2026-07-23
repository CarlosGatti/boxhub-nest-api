import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedAcademyCareerJourneyUpdateOneRequiredWithoutStagesNestedInput } from '../defined-academy-career-journey/defined-academy-career-journey-update-one-required-without-stages-nested.input';
import { DefinedAcademyUserCareerProfileUpdateManyWithoutCurrentStageNestedInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-update-many-without-current-stage-nested.input';
import { DefinedAcademyUserCareerStageCompletionUpdateManyWithoutStageNestedInput } from '../defined-academy-user-career-stage-completion/defined-academy-user-career-stage-completion-update-many-without-stage-nested.input';

@InputType()
export class DefinedAcademyCareerStageUpdateWithoutContentLinksInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    summary?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    iconKey?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    sortOrder?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedAcademyCareerJourneyUpdateOneRequiredWithoutStagesNestedInput, {nullable:true})
    journey?: DefinedAcademyCareerJourneyUpdateOneRequiredWithoutStagesNestedInput;

    @Field(() => DefinedAcademyUserCareerProfileUpdateManyWithoutCurrentStageNestedInput, {nullable:true})
    currentProfiles?: DefinedAcademyUserCareerProfileUpdateManyWithoutCurrentStageNestedInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionUpdateManyWithoutStageNestedInput, {nullable:true})
    completions?: DefinedAcademyUserCareerStageCompletionUpdateManyWithoutStageNestedInput;
}
