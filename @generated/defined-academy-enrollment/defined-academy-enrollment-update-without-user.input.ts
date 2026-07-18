import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumDefinedAcademyEnrollmentStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-enrollment-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DefinedAcademyCourseUpdateOneRequiredWithoutEnrollmentsNestedInput } from '../defined-academy-course/defined-academy-course-update-one-required-without-enrollments-nested.input';
import { DefinedAcademyLessonProgressUpdateManyWithoutEnrollmentNestedInput } from '../defined-academy-lesson-progress/defined-academy-lesson-progress-update-many-without-enrollment-nested.input';

@InputType()
export class DefinedAcademyEnrollmentUpdateWithoutUserInput {

    @Field(() => EnumDefinedAcademyEnrollmentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedAcademyEnrollmentStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    enrolledAt?: DateTimeFieldUpdateOperationsInput;

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

    @Field(() => DefinedAcademyCourseUpdateOneRequiredWithoutEnrollmentsNestedInput, {nullable:true})
    course?: DefinedAcademyCourseUpdateOneRequiredWithoutEnrollmentsNestedInput;

    @Field(() => DefinedAcademyLessonProgressUpdateManyWithoutEnrollmentNestedInput, {nullable:true})
    progress?: DefinedAcademyLessonProgressUpdateManyWithoutEnrollmentNestedInput;
}
