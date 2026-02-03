import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { HomeOpsHouseholdUpdateOneRequiredWithoutWorkloadLedgersNestedInput } from '../home-ops-household/home-ops-household-update-one-required-without-workload-ledgers-nested.input';

@InputType()
export class HomeOpsWorkloadLedgerUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    weekStart?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    pointsCompleted?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minutesCompleted?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    tasksCompleted?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => HomeOpsHouseholdUpdateOneRequiredWithoutWorkloadLedgersNestedInput, {nullable:true})
    household?: HomeOpsHouseholdUpdateOneRequiredWithoutWorkloadLedgersNestedInput;
}
