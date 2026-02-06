import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ReviewCardProjectUpdateOneRequiredWithoutScansNestedInput } from '../review-card-project/review-card-project-update-one-required-without-scans-nested.input';

@InputType()
export class ReviewCardScanEventUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ipHash?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userAgent?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    referer?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ReviewCardProjectUpdateOneRequiredWithoutScansNestedInput, {nullable:true})
    project?: ReviewCardProjectUpdateOneRequiredWithoutScansNestedInput;
}
