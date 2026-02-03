import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumHomeOpsWeeklyPlanStatusFieldUpdateOperationsInput } from '../prisma/enum-home-ops-weekly-plan-status-field-update-operations.input';
import { HomeOpsHouseholdUpdateOneRequiredWithoutWeeklyPlansNestedInput } from '../home-ops-household/home-ops-household-update-one-required-without-weekly-plans-nested.input';

@InputType()
export class HomeOpsWeeklyPlanUpdateWithoutTasksInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    weekStartDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumHomeOpsWeeklyPlanStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumHomeOpsWeeklyPlanStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => HomeOpsHouseholdUpdateOneRequiredWithoutWeeklyPlansNestedInput, {nullable:true})
    household?: HomeOpsHouseholdUpdateOneRequiredWithoutWeeklyPlansNestedInput;
}
