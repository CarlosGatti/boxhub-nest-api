import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumBucketVisionPeriodTypeFieldUpdateOperationsInput } from '../prisma/enum-bucket-vision-period-type-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumBucketVisionLayoutModeFieldUpdateOperationsInput } from '../prisma/enum-bucket-vision-layout-mode-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BucketVisionSectionUncheckedUpdateManyWithoutBoardNestedInput } from '../bucket-vision-section/bucket-vision-section-unchecked-update-many-without-board-nested.input';
import { BucketVisionItemUncheckedUpdateManyWithoutBoardNestedInput } from '../bucket-vision-item/bucket-vision-item-unchecked-update-many-without-board-nested.input';
import { BucketVisionGoalLinkUncheckedUpdateManyWithoutBoardNestedInput } from '../bucket-vision-goal-link/bucket-vision-goal-link-unchecked-update-many-without-board-nested.input';
import { BucketVisionCheckinUncheckedUpdateManyWithoutBoardNestedInput } from '../bucket-vision-checkin/bucket-vision-checkin-unchecked-update-many-without-board-nested.input';

@InputType()
export class BucketVisionBoardUncheckedUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => EnumBucketVisionPeriodTypeFieldUpdateOperationsInput, {nullable:true})
    periodType?: EnumBucketVisionPeriodTypeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    year?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    periodKey?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    endDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    theme?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumBucketVisionLayoutModeFieldUpdateOperationsInput, {nullable:true})
    layoutMode?: EnumBucketVisionLayoutModeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    coverUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BucketVisionSectionUncheckedUpdateManyWithoutBoardNestedInput, {nullable:true})
    sections?: BucketVisionSectionUncheckedUpdateManyWithoutBoardNestedInput;

    @Field(() => BucketVisionItemUncheckedUpdateManyWithoutBoardNestedInput, {nullable:true})
    items?: BucketVisionItemUncheckedUpdateManyWithoutBoardNestedInput;

    @Field(() => BucketVisionGoalLinkUncheckedUpdateManyWithoutBoardNestedInput, {nullable:true})
    goalLinks?: BucketVisionGoalLinkUncheckedUpdateManyWithoutBoardNestedInput;

    @Field(() => BucketVisionCheckinUncheckedUpdateManyWithoutBoardNestedInput, {nullable:true})
    checkins?: BucketVisionCheckinUncheckedUpdateManyWithoutBoardNestedInput;
}
