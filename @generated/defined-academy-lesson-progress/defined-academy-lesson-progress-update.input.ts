import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumDefinedAcademyLessonProgressStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-lesson-progress-status-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedAcademyEnrollmentUpdateOneRequiredWithoutProgressNestedInput } from '../defined-academy-enrollment/defined-academy-enrollment-update-one-required-without-progress-nested.input';
import { DefinedAcademyLessonUpdateOneRequiredWithoutProgressNestedInput } from '../defined-academy-lesson/defined-academy-lesson-update-one-required-without-progress-nested.input';
import { UserUpdateOneRequiredWithoutDefinedAcademyLessonProgressNestedInput } from '../user/user-update-one-required-without-defined-academy-lesson-progress-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyLessonProgressUpdateInput {

    @Field(() => EnumDefinedAcademyLessonProgressStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedAcademyLessonProgressStatusFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    progressPercentage?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    lastPositionSeconds?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    completedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    lastAccessedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedAcademyEnrollmentUpdateOneRequiredWithoutProgressNestedInput, {nullable:true})
    enrollment?: DefinedAcademyEnrollmentUpdateOneRequiredWithoutProgressNestedInput;

    @Field(() => DefinedAcademyLessonUpdateOneRequiredWithoutProgressNestedInput, {nullable:true})
    lesson?: DefinedAcademyLessonUpdateOneRequiredWithoutProgressNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutDefinedAcademyLessonProgressNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutDefinedAcademyLessonProgressNestedInput)
    user?: UserUpdateOneRequiredWithoutDefinedAcademyLessonProgressNestedInput;
}
