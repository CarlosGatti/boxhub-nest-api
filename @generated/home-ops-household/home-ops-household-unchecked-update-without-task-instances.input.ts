import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HomeOpsHouseholdMemberUncheckedUpdateManyWithoutHouseholdNestedInput } from '../home-ops-household-member/home-ops-household-member-unchecked-update-many-without-household-nested.input';
import { HomeOpsTaskTemplateUncheckedUpdateManyWithoutHouseholdNestedInput } from '../home-ops-task-template/home-ops-task-template-unchecked-update-many-without-household-nested.input';
import { HomeOpsWorkloadLedgerUncheckedUpdateManyWithoutHouseholdNestedInput } from '../home-ops-workload-ledger/home-ops-workload-ledger-unchecked-update-many-without-household-nested.input';
import { HomeOpsWeeklyPlanUncheckedUpdateManyWithoutHouseholdNestedInput } from '../home-ops-weekly-plan/home-ops-weekly-plan-unchecked-update-many-without-household-nested.input';

@InputType()
export class HomeOpsHouseholdUncheckedUpdateWithoutTaskInstancesInput {

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

    @Field(() => HomeOpsHouseholdMemberUncheckedUpdateManyWithoutHouseholdNestedInput, {nullable:true})
    members?: HomeOpsHouseholdMemberUncheckedUpdateManyWithoutHouseholdNestedInput;

    @Field(() => HomeOpsTaskTemplateUncheckedUpdateManyWithoutHouseholdNestedInput, {nullable:true})
    templates?: HomeOpsTaskTemplateUncheckedUpdateManyWithoutHouseholdNestedInput;

    @Field(() => HomeOpsWorkloadLedgerUncheckedUpdateManyWithoutHouseholdNestedInput, {nullable:true})
    workloadLedgers?: HomeOpsWorkloadLedgerUncheckedUpdateManyWithoutHouseholdNestedInput;

    @Field(() => HomeOpsWeeklyPlanUncheckedUpdateManyWithoutHouseholdNestedInput, {nullable:true})
    weeklyPlans?: HomeOpsWeeklyPlanUncheckedUpdateManyWithoutHouseholdNestedInput;
}
