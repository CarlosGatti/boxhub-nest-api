import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutDefinedAcademyCareerProfilesNestedInput } from '../user/user-update-one-required-without-defined-academy-career-profiles-nested.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUpdateOneRequiredWithoutCareerProfilesNestedInput } from '../defined-academy/defined-academy-update-one-required-without-career-profiles-nested.input';
import { DefinedAcademyCareerJourneyUpdateOneRequiredWithoutProfilesNestedInput } from '../defined-academy-career-journey/defined-academy-career-journey-update-one-required-without-profiles-nested.input';
import { DefinedAcademyUserCareerStageCompletionUpdateManyWithoutProfileNestedInput } from '../defined-academy-user-career-stage-completion/defined-academy-user-career-stage-completion-update-many-without-profile-nested.input';

@InputType()
export class DefinedAcademyUserCareerProfileUpdateWithoutCurrentStageInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutDefinedAcademyCareerProfilesNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutDefinedAcademyCareerProfilesNestedInput)
    user?: UserUpdateOneRequiredWithoutDefinedAcademyCareerProfilesNestedInput;

    @Field(() => DefinedAcademyUpdateOneRequiredWithoutCareerProfilesNestedInput, {nullable:true})
    academy?: DefinedAcademyUpdateOneRequiredWithoutCareerProfilesNestedInput;

    @Field(() => DefinedAcademyCareerJourneyUpdateOneRequiredWithoutProfilesNestedInput, {nullable:true})
    journey?: DefinedAcademyCareerJourneyUpdateOneRequiredWithoutProfilesNestedInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionUpdateManyWithoutProfileNestedInput, {nullable:true})
    completions?: DefinedAcademyUserCareerStageCompletionUpdateManyWithoutProfileNestedInput;
}
