import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumBucketVisionPeriodTypeFieldUpdateOperationsInput } from '../prisma/enum-bucket-vision-period-type-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumBucketVisionLayoutModeFieldUpdateOperationsInput } from '../prisma/enum-bucket-vision-layout-mode-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutBucketVisionBoardsNestedInput } from '../user/user-update-one-required-without-bucket-vision-boards-nested.input';
import { Type } from 'class-transformer';
import { BucketVisionSectionUpdateManyWithoutBoardNestedInput } from '../bucket-vision-section/bucket-vision-section-update-many-without-board-nested.input';
import { BucketVisionItemUpdateManyWithoutBoardNestedInput } from '../bucket-vision-item/bucket-vision-item-update-many-without-board-nested.input';
import { BucketVisionCheckinUpdateManyWithoutBoardNestedInput } from '../bucket-vision-checkin/bucket-vision-checkin-update-many-without-board-nested.input';

@InputType()
export class BucketVisionBoardUpdateWithoutGoalLinksInput {

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

    @Field(() => UserUpdateOneRequiredWithoutBucketVisionBoardsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutBucketVisionBoardsNestedInput)
    user?: UserUpdateOneRequiredWithoutBucketVisionBoardsNestedInput;

    @Field(() => BucketVisionSectionUpdateManyWithoutBoardNestedInput, {nullable:true})
    sections?: BucketVisionSectionUpdateManyWithoutBoardNestedInput;

    @Field(() => BucketVisionItemUpdateManyWithoutBoardNestedInput, {nullable:true})
    items?: BucketVisionItemUpdateManyWithoutBoardNestedInput;

    @Field(() => BucketVisionCheckinUpdateManyWithoutBoardNestedInput, {nullable:true})
    checkins?: BucketVisionCheckinUpdateManyWithoutBoardNestedInput;
}
