import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumBucketGoalTypeFieldUpdateOperationsInput } from '../prisma/enum-bucket-goal-type-field-update-operations.input';
import { EnumBucketGoalStatusFieldUpdateOperationsInput } from '../prisma/enum-bucket-goal-status-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketGoalUpdatetagsInput } from './bucket-goal-updatetags.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutBucketGoalsNestedInput } from '../user/user-update-one-required-without-bucket-goals-nested.input';
import { Type } from 'class-transformer';
import { BucketGoalPinUpdateManyWithoutGoalNestedInput } from '../bucket-goal-pin/bucket-goal-pin-update-many-without-goal-nested.input';
import { BucketGoalMediaUpdateManyWithoutGoalNestedInput } from '../bucket-goal-media/bucket-goal-media-update-many-without-goal-nested.input';
import { BucketVisionGoalLinkUpdateManyWithoutGoalNestedInput } from '../bucket-vision-goal-link/bucket-vision-goal-link-update-many-without-goal-nested.input';

@InputType()
export class BucketGoalUpdateWithoutLogsInput {

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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    detailsSchemaVersion?: IntFieldUpdateOperationsInput;

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

    @Field(() => UserUpdateOneRequiredWithoutBucketGoalsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutBucketGoalsNestedInput)
    user?: UserUpdateOneRequiredWithoutBucketGoalsNestedInput;

    @Field(() => BucketGoalPinUpdateManyWithoutGoalNestedInput, {nullable:true})
    pins?: BucketGoalPinUpdateManyWithoutGoalNestedInput;

    @Field(() => BucketGoalMediaUpdateManyWithoutGoalNestedInput, {nullable:true})
    media?: BucketGoalMediaUpdateManyWithoutGoalNestedInput;

    @Field(() => BucketVisionGoalLinkUpdateManyWithoutGoalNestedInput, {nullable:true})
    bucketVisionGoalLinks?: BucketVisionGoalLinkUpdateManyWithoutGoalNestedInput;
}
