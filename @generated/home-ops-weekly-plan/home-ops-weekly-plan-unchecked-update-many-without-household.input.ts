import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumHomeOpsWeeklyPlanStatusFieldUpdateOperationsInput } from '../prisma/enum-home-ops-weekly-plan-status-field-update-operations.input';

@InputType()
export class HomeOpsWeeklyPlanUncheckedUpdateManyWithoutHouseholdInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    weekStartDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumHomeOpsWeeklyPlanStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumHomeOpsWeeklyPlanStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
