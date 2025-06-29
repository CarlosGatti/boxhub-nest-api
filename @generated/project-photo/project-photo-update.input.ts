import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumPhotoCategoryFieldUpdateOperationsInput } from '../prisma/enum-photo-category-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProjectUpdateOneRequiredWithoutPhotosNestedInput } from '../project/project-update-one-required-without-photos-nested.input';

@InputType()
export class ProjectPhotoUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    caption?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumPhotoCategoryFieldUpdateOperationsInput, {nullable:true})
    category?: EnumPhotoCategoryFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    stage?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    imageUrl?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProjectUpdateOneRequiredWithoutPhotosNestedInput, {nullable:true})
    project?: ProjectUpdateOneRequiredWithoutPhotosNestedInput;
}
