import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUpdateOneRequiredWithoutHomeOpsWorkloadLedgersNestedInput } from '../user/user-update-one-required-without-home-ops-workload-ledgers-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsWorkloadLedgerUpdateWithoutHouseholdInput {

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

    @Field(() => UserUpdateOneRequiredWithoutHomeOpsWorkloadLedgersNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutHomeOpsWorkloadLedgersNestedInput)
    user?: UserUpdateOneRequiredWithoutHomeOpsWorkloadLedgersNestedInput;
}
