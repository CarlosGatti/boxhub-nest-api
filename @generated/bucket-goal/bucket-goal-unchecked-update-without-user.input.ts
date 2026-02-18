import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumBucketGoalTypeFieldUpdateOperationsInput } from '../prisma/enum-bucket-goal-type-field-update-operations.input';
import { EnumBucketGoalStatusFieldUpdateOperationsInput } from '../prisma/enum-bucket-goal-status-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketGoalUpdatetagsInput } from './bucket-goal-updatetags.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BucketGoalLogUncheckedUpdateManyWithoutGoalNestedInput } from '../bucket-goal-log/bucket-goal-log-unchecked-update-many-without-goal-nested.input';
import { BucketGoalPinUncheckedUpdateManyWithoutGoalNestedInput } from '../bucket-goal-pin/bucket-goal-pin-unchecked-update-many-without-goal-nested.input';
import { BucketGoalMediaUncheckedUpdateManyWithoutGoalNestedInput } from '../bucket-goal-media/bucket-goal-media-unchecked-update-many-without-goal-nested.input';

@InputType()
export class BucketGoalUncheckedUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumBucketGoalTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumBucketGoalTypeFieldUpdateOperationsInput;

    @Field(() => EnumBucketGoalStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumBucketGoalStatusFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    priority?: IntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    details?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    coverUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BucketGoalUpdatetagsInput, {nullable:true})
    tags?: BucketGoalUpdatetagsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    completedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BucketGoalLogUncheckedUpdateManyWithoutGoalNestedInput, {nullable:true})
    logs?: BucketGoalLogUncheckedUpdateManyWithoutGoalNestedInput;

    @Field(() => BucketGoalPinUncheckedUpdateManyWithoutGoalNestedInput, {nullable:true})
    pins?: BucketGoalPinUncheckedUpdateManyWithoutGoalNestedInput;

    @Field(() => BucketGoalMediaUncheckedUpdateManyWithoutGoalNestedInput, {nullable:true})
    media?: BucketGoalMediaUncheckedUpdateManyWithoutGoalNestedInput;
}
