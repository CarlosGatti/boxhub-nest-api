import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumDefinedAcademyContentStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-content-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedAcademyCourseUpdateOneRequiredWithoutModulesNestedInput } from '../defined-academy-course/defined-academy-course-update-one-required-without-modules-nested.input';

@InputType()
export class DefinedAcademyModuleUpdateWithoutLessonsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    sortOrder?: IntFieldUpdateOperationsInput;

    @Field(() => EnumDefinedAcademyContentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedAcademyContentStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedAcademyCourseUpdateOneRequiredWithoutModulesNestedInput, {nullable:true})
    course?: DefinedAcademyCourseUpdateOneRequiredWithoutModulesNestedInput;
}
