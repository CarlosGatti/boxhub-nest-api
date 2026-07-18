import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedAcademyUpdateOneRequiredWithoutPartnerCategoriesNestedInput } from '../defined-academy/defined-academy-update-one-required-without-partner-categories-nested.input';
import { DefinedAcademyPartnerUpdateManyWithoutCategoryNestedInput } from '../defined-academy-partner/defined-academy-partner-update-many-without-category-nested.input';

@InputType()
export class DefinedAcademyPartnerCategoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    sortOrder?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedAcademyUpdateOneRequiredWithoutPartnerCategoriesNestedInput, {nullable:true})
    academy?: DefinedAcademyUpdateOneRequiredWithoutPartnerCategoriesNestedInput;

    @Field(() => DefinedAcademyPartnerUpdateManyWithoutCategoryNestedInput, {nullable:true})
    partners?: DefinedAcademyPartnerUpdateManyWithoutCategoryNestedInput;
}
