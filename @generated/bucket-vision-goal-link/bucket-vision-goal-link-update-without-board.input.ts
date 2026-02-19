import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BucketGoalUpdateOneRequiredWithoutBucketVisionGoalLinksNestedInput } from '../bucket-goal/bucket-goal-update-one-required-without-bucket-vision-goal-links-nested.input';

@InputType()
export class BucketVisionGoalLinkUpdateWithoutBoardInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    label?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BucketGoalUpdateOneRequiredWithoutBucketVisionGoalLinksNestedInput, {nullable:true})
    goal?: BucketGoalUpdateOneRequiredWithoutBucketVisionGoalLinksNestedInput;
}
