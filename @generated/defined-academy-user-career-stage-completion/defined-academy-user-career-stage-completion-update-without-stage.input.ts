import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DefinedAcademyUserCareerProfileUpdateOneRequiredWithoutCompletionsNestedInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-update-one-required-without-completions-nested.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionUpdateWithoutStageInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    completedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DefinedAcademyUserCareerProfileUpdateOneRequiredWithoutCompletionsNestedInput, {nullable:true})
    profile?: DefinedAcademyUserCareerProfileUpdateOneRequiredWithoutCompletionsNestedInput;
}
