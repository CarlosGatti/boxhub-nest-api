import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumHomeOpsWeeklyPlanStatusFieldUpdateOperationsInput } from '../prisma/enum-home-ops-weekly-plan-status-field-update-operations.input';
import { HomeOpsTaskInstanceUpdateManyWithoutWeeklyPlanNestedInput } from '../home-ops-task-instance/home-ops-task-instance-update-many-without-weekly-plan-nested.input';

@InputType()
export class HomeOpsWeeklyPlanUpdateWithoutHouseholdInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    weekStartDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumHomeOpsWeeklyPlanStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumHomeOpsWeeklyPlanStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => HomeOpsTaskInstanceUpdateManyWithoutWeeklyPlanNestedInput, {nullable:true})
    tasks?: HomeOpsTaskInstanceUpdateManyWithoutWeeklyPlanNestedInput;
}
