import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DefinedAcademyUserCareerProfileUpdateOneRequiredWithoutCompletionsNestedInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-update-one-required-without-completions-nested.input';
import { DefinedAcademyCareerStageUpdateOneRequiredWithoutCompletionsNestedInput } from '../defined-academy-career-stage/defined-academy-career-stage-update-one-required-without-completions-nested.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    completedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DefinedAcademyUserCareerProfileUpdateOneRequiredWithoutCompletionsNestedInput, {nullable:true})
    profile?: DefinedAcademyUserCareerProfileUpdateOneRequiredWithoutCompletionsNestedInput;

    @Field(() => DefinedAcademyCareerStageUpdateOneRequiredWithoutCompletionsNestedInput, {nullable:true})
    stage?: DefinedAcademyCareerStageUpdateOneRequiredWithoutCompletionsNestedInput;
}
