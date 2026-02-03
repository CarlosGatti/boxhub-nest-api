import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumHomeOpsTaskStatusFieldUpdateOperationsInput } from '../prisma/enum-home-ops-task-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { HomeOpsHouseholdUpdateOneRequiredWithoutTaskInstancesNestedInput } from '../home-ops-household/home-ops-household-update-one-required-without-task-instances-nested.input';
import { HomeOpsTaskTemplateUpdateOneWithoutTaskInstancesNestedInput } from '../home-ops-task-template/home-ops-task-template-update-one-without-task-instances-nested.input';
import { HomeOpsWeeklyPlanUpdateOneWithoutTasksNestedInput } from '../home-ops-weekly-plan/home-ops-weekly-plan-update-one-without-tasks-nested.input';
import { UserUpdateOneWithoutHomeOpsTaskInstancesAssignedNestedInput } from '../user/user-update-one-without-home-ops-task-instances-assigned-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneWithoutHomeOpsTaskInstancesCompletedNestedInput } from '../user/user-update-one-without-home-ops-task-instances-completed-nested.input';

@InputType()
export class HomeOpsTaskInstanceUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    sourceKey?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    category?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    points?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    effortWeight?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dueDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    slotLabel?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    windowStart?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    windowEnd?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumHomeOpsTaskStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumHomeOpsTaskStatusFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    completedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    skippedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    skipReason?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => HomeOpsHouseholdUpdateOneRequiredWithoutTaskInstancesNestedInput, {nullable:true})
    household?: HomeOpsHouseholdUpdateOneRequiredWithoutTaskInstancesNestedInput;

    @Field(() => HomeOpsTaskTemplateUpdateOneWithoutTaskInstancesNestedInput, {nullable:true})
    template?: HomeOpsTaskTemplateUpdateOneWithoutTaskInstancesNestedInput;

    @Field(() => HomeOpsWeeklyPlanUpdateOneWithoutTasksNestedInput, {nullable:true})
    weeklyPlan?: HomeOpsWeeklyPlanUpdateOneWithoutTasksNestedInput;

    @Field(() => UserUpdateOneWithoutHomeOpsTaskInstancesAssignedNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutHomeOpsTaskInstancesAssignedNestedInput)
    assignee?: UserUpdateOneWithoutHomeOpsTaskInstancesAssignedNestedInput;

    @Field(() => UserUpdateOneWithoutHomeOpsTaskInstancesCompletedNestedInput, {nullable:true})
    @Type(() => UserUpdateOneWithoutHomeOpsTaskInstancesCompletedNestedInput)
    completedBy?: UserUpdateOneWithoutHomeOpsTaskInstancesCompletedNestedInput;
}
