import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { EnumHomeOpsFrequencyFieldUpdateOperationsInput } from '../prisma/enum-home-ops-frequency-field-update-operations.input';
import { HomeOpsTaskTemplateUpdatedaysOfWeekInput } from './home-ops-task-template-updatedays-of-week.input';
import { EnumHomeOpsAssignmentModeFieldUpdateOperationsInput } from '../prisma/enum-home-ops-assignment-mode-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class HomeOpsTaskTemplateUncheckedUpdateManyWithoutFixedAssigneeInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    householdId?: IntFieldUpdateOperationsInput;

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

    @Field(() => EnumHomeOpsFrequencyFieldUpdateOperationsInput, {nullable:true})
    frequency?: EnumHomeOpsFrequencyFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    occurrences?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    interval?: NullableIntFieldUpdateOperationsInput;

    @Field(() => HomeOpsTaskTemplateUpdatedaysOfWeekInput, {nullable:true})
    daysOfWeek?: HomeOpsTaskTemplateUpdatedaysOfWeekInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    dayOfMonth?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    timezone?: StringFieldUpdateOperationsInput;

    @Field(() => EnumHomeOpsAssignmentModeFieldUpdateOperationsInput, {nullable:true})
    assignmentMode?: EnumHomeOpsAssignmentModeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    createdById?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
