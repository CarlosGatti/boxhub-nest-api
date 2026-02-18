import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BucketGoalUpdateOneRequiredWithoutLogsNestedInput } from '../bucket-goal/bucket-goal-update-one-required-without-logs-nested.input';
import { BucketGoalMediaUpdateManyWithoutLogNestedInput } from '../bucket-goal-media/bucket-goal-media-update-many-without-log-nested.input';

@InputType()
export class BucketGoalLogUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    note?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    happenedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BucketGoalUpdateOneRequiredWithoutLogsNestedInput, {nullable:true})
    goal?: BucketGoalUpdateOneRequiredWithoutLogsNestedInput;

    @Field(() => BucketGoalMediaUpdateManyWithoutLogNestedInput, {nullable:true})
    media?: BucketGoalMediaUpdateManyWithoutLogNestedInput;
}
