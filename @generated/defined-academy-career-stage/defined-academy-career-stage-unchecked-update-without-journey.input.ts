import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedAcademyCareerStageContentUncheckedUpdateManyWithoutStageNestedInput } from '../defined-academy-career-stage-content/defined-academy-career-stage-content-unchecked-update-many-without-stage-nested.input';
import { DefinedAcademyUserCareerProfileUncheckedUpdateManyWithoutCurrentStageNestedInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-unchecked-update-many-without-current-stage-nested.input';
import { DefinedAcademyUserCareerStageCompletionUncheckedUpdateManyWithoutStageNestedInput } from '../defined-academy-user-career-stage-completion/defined-academy-user-career-stage-completion-unchecked-update-many-without-stage-nested.input';

@InputType()
export class DefinedAcademyCareerStageUncheckedUpdateWithoutJourneyInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => DefinedAcademyCareerStageContentUncheckedUpdateManyWithoutStageNestedInput, {nullable:true})
    contentLinks?: DefinedAcademyCareerStageContentUncheckedUpdateManyWithoutStageNestedInput;

    @Field(() => DefinedAcademyUserCareerProfileUncheckedUpdateManyWithoutCurrentStageNestedInput, {nullable:true})
    currentProfiles?: DefinedAcademyUserCareerProfileUncheckedUpdateManyWithoutCurrentStageNestedInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionUncheckedUpdateManyWithoutStageNestedInput, {nullable:true})
    completions?: DefinedAcademyUserCareerStageCompletionUncheckedUpdateManyWithoutStageNestedInput;
}
