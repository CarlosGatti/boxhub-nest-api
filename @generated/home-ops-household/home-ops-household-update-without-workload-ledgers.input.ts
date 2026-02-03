import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutHomeOpsHouseholdsOwnedNestedInput } from '../user/user-update-one-required-without-home-ops-households-owned-nested.input';
import { Type } from 'class-transformer';
import { AppUpdateOneWithoutHomeOpsHouseholdsNestedInput } from '../app/app-update-one-without-home-ops-households-nested.input';
import { HomeOpsHouseholdMemberUpdateManyWithoutHouseholdNestedInput } from '../home-ops-household-member/home-ops-household-member-update-many-without-household-nested.input';
import { HomeOpsTaskTemplateUpdateManyWithoutHouseholdNestedInput } from '../home-ops-task-template/home-ops-task-template-update-many-without-household-nested.input';
import { HomeOpsTaskInstanceUpdateManyWithoutHouseholdNestedInput } from '../home-ops-task-instance/home-ops-task-instance-update-many-without-household-nested.input';
import { HomeOpsWeeklyPlanUpdateManyWithoutHouseholdNestedInput } from '../home-ops-weekly-plan/home-ops-weekly-plan-update-many-without-household-nested.input';

@InputType()
export class HomeOpsHouseholdUpdateWithoutWorkloadLedgersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutHomeOpsHouseholdsOwnedNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutHomeOpsHouseholdsOwnedNestedInput)
    owner?: UserUpdateOneRequiredWithoutHomeOpsHouseholdsOwnedNestedInput;

    @Field(() => AppUpdateOneWithoutHomeOpsHouseholdsNestedInput, {nullable:true})
    app?: AppUpdateOneWithoutHomeOpsHouseholdsNestedInput;

    @Field(() => HomeOpsHouseholdMemberUpdateManyWithoutHouseholdNestedInput, {nullable:true})
    members?: HomeOpsHouseholdMemberUpdateManyWithoutHouseholdNestedInput;

    @Field(() => HomeOpsTaskTemplateUpdateManyWithoutHouseholdNestedInput, {nullable:true})
    templates?: HomeOpsTaskTemplateUpdateManyWithoutHouseholdNestedInput;

    @Field(() => HomeOpsTaskInstanceUpdateManyWithoutHouseholdNestedInput, {nullable:true})
    taskInstances?: HomeOpsTaskInstanceUpdateManyWithoutHouseholdNestedInput;

    @Field(() => HomeOpsWeeklyPlanUpdateManyWithoutHouseholdNestedInput, {nullable:true})
    weeklyPlans?: HomeOpsWeeklyPlanUpdateManyWithoutHouseholdNestedInput;
}
