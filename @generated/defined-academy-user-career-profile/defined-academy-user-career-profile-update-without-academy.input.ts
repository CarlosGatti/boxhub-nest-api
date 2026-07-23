import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutDefinedAcademyCareerProfilesNestedInput } from '../user/user-update-one-required-without-defined-academy-career-profiles-nested.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyUpdateOneRequiredWithoutProfilesNestedInput } from '../defined-academy-career-journey/defined-academy-career-journey-update-one-required-without-profiles-nested.input';
import { DefinedAcademyCareerStageUpdateOneWithoutCurrentProfilesNestedInput } from '../defined-academy-career-stage/defined-academy-career-stage-update-one-without-current-profiles-nested.input';
import { DefinedAcademyUserCareerStageCompletionUpdateManyWithoutProfileNestedInput } from '../defined-academy-user-career-stage-completion/defined-academy-user-career-stage-completion-update-many-without-profile-nested.input';

@InputType()
export class DefinedAcademyUserCareerProfileUpdateWithoutAcademyInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutDefinedAcademyCareerProfilesNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutDefinedAcademyCareerProfilesNestedInput)
    user?: UserUpdateOneRequiredWithoutDefinedAcademyCareerProfilesNestedInput;

    @Field(() => DefinedAcademyCareerJourneyUpdateOneRequiredWithoutProfilesNestedInput, {nullable:true})
    journey?: DefinedAcademyCareerJourneyUpdateOneRequiredWithoutProfilesNestedInput;

    @Field(() => DefinedAcademyCareerStageUpdateOneWithoutCurrentProfilesNestedInput, {nullable:true})
    currentStage?: DefinedAcademyCareerStageUpdateOneWithoutCurrentProfilesNestedInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionUpdateManyWithoutProfileNestedInput, {nullable:true})
    completions?: DefinedAcademyUserCareerStageCompletionUpdateManyWithoutProfileNestedInput;
}
