import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumReviewCardExportTypeFieldUpdateOperationsInput } from '../prisma/enum-review-card-export-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumReviewCardExportStatusFieldUpdateOperationsInput } from '../prisma/enum-review-card-export-status-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ReviewCardProjectUpdateOneRequiredWithoutExportsNestedInput } from '../review-card-project/review-card-project-update-one-required-without-exports-nested.input';

@InputType()
export class ReviewCardExportUpdateInput {

    @Field(() => EnumReviewCardExportTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumReviewCardExportTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    format?: StringFieldUpdateOperationsInput;

    @Field(() => EnumReviewCardExportStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumReviewCardExportStatusFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    fileUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    errorMessage?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ReviewCardProjectUpdateOneRequiredWithoutExportsNestedInput, {nullable:true})
    project?: ReviewCardProjectUpdateOneRequiredWithoutExportsNestedInput;
}
