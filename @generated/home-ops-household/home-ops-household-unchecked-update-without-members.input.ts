import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HomeOpsTaskTemplateUncheckedUpdateManyWithoutHouseholdNestedInput } from '../home-ops-task-template/home-ops-task-template-unchecked-update-many-without-household-nested.input';
import { HomeOpsTaskInstanceUncheckedUpdateManyWithoutHouseholdNestedInput } from '../home-ops-task-instance/home-ops-task-instance-unchecked-update-many-without-household-nested.input';
import { HomeOpsWorkloadLedgerUncheckedUpdateManyWithoutHouseholdNestedInput } from '../home-ops-workload-ledger/home-ops-workload-ledger-unchecked-update-many-without-household-nested.input';
import { HomeOpsWeeklyPlanUncheckedUpdateManyWithoutHouseholdNestedInput } from '../home-ops-weekly-plan/home-ops-weekly-plan-unchecked-update-many-without-household-nested.input';

@InputType()
export class HomeOpsHouseholdUncheckedUpdateWithoutMembersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    ownerId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    appId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => HomeOpsTaskTemplateUncheckedUpdateManyWithoutHouseholdNestedInput, {nullable:true})
    templates?: HomeOpsTaskTemplateUncheckedUpdateManyWithoutHouseholdNestedInput;

    @Field(() => HomeOpsTaskInstanceUncheckedUpdateManyWithoutHouseholdNestedInput, {nullable:true})
    taskInstances?: HomeOpsTaskInstanceUncheckedUpdateManyWithoutHouseholdNestedInput;

    @Field(() => HomeOpsWorkloadLedgerUncheckedUpdateManyWithoutHouseholdNestedInput, {nullable:true})
    workloadLedgers?: HomeOpsWorkloadLedgerUncheckedUpdateManyWithoutHouseholdNestedInput;

    @Field(() => HomeOpsWeeklyPlanUncheckedUpdateManyWithoutHouseholdNestedInput, {nullable:true})
    weeklyPlans?: HomeOpsWeeklyPlanUncheckedUpdateManyWithoutHouseholdNestedInput;
}
