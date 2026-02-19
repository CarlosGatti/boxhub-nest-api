import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BucketVisionBoardUpdateOneRequiredWithoutGoalLinksNestedInput } from '../bucket-vision-board/bucket-vision-board-update-one-required-without-goal-links-nested.input';

@InputType()
export class BucketVisionGoalLinkUpdateWithoutGoalInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    label?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BucketVisionBoardUpdateOneRequiredWithoutGoalLinksNestedInput, {nullable:true})
    board?: BucketVisionBoardUpdateOneRequiredWithoutGoalLinksNestedInput;
}
