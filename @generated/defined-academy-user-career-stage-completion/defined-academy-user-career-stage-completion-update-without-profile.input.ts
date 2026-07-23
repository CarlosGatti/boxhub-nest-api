import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DefinedAcademyCareerStageUpdateOneRequiredWithoutCompletionsNestedInput } from '../defined-academy-career-stage/defined-academy-career-stage-update-one-required-without-completions-nested.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionUpdateWithoutProfileInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    completedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DefinedAcademyCareerStageUpdateOneRequiredWithoutCompletionsNestedInput, {nullable:true})
    stage?: DefinedAcademyCareerStageUpdateOneRequiredWithoutCompletionsNestedInput;
}
