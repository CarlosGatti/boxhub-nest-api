import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumDefinedAcademyCareerStageContentTypeFieldUpdateOperationsInput } from '../prisma/enum-defined-academy-career-stage-content-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedAcademyCareerStageUpdateOneRequiredWithoutContentLinksNestedInput } from '../defined-academy-career-stage/defined-academy-career-stage-update-one-required-without-content-links-nested.input';
import { DefinedAcademyResourceUpdateOneWithoutCareerStageLinksNestedInput } from '../defined-academy-resource/defined-academy-resource-update-one-without-career-stage-links-nested.input';

@InputType()
export class DefinedAcademyCareerStageContentUpdateWithoutCourseInput {

    @Field(() => EnumDefinedAcademyCareerStageContentTypeFieldUpdateOperationsInput, {nullable:true})
    contentType?: EnumDefinedAcademyCareerStageContentTypeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    label?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    sortOrder?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedAcademyCareerStageUpdateOneRequiredWithoutContentLinksNestedInput, {nullable:true})
    stage?: DefinedAcademyCareerStageUpdateOneRequiredWithoutContentLinksNestedInput;

    @Field(() => DefinedAcademyResourceUpdateOneWithoutCareerStageLinksNestedInput, {nullable:true})
    resource?: DefinedAcademyResourceUpdateOneWithoutCareerStageLinksNestedInput;
}
