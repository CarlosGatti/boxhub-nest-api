import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskTemplateUncheckedCreateNestedManyWithoutHouseholdInput } from '../home-ops-task-template/home-ops-task-template-unchecked-create-nested-many-without-household.input';
import { HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutHouseholdInput } from '../home-ops-task-instance/home-ops-task-instance-unchecked-create-nested-many-without-household.input';
import { HomeOpsWorkloadLedgerUncheckedCreateNestedManyWithoutHouseholdInput } from '../home-ops-workload-ledger/home-ops-workload-ledger-unchecked-create-nested-many-without-household.input';
import { HomeOpsWeeklyPlanUncheckedCreateNestedManyWithoutHouseholdInput } from '../home-ops-weekly-plan/home-ops-weekly-plan-unchecked-create-nested-many-without-household.input';

@InputType()
export class HomeOpsHouseholdUncheckedCreateWithoutMembersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    ownerId!: number;

    @Field(() => Int, {nullable:true})
    appId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => HomeOpsTaskTemplateUncheckedCreateNestedManyWithoutHouseholdInput, {nullable:true})
    templates?: HomeOpsTaskTemplateUncheckedCreateNestedManyWithoutHouseholdInput;

    @Field(() => HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutHouseholdInput, {nullable:true})
    taskInstances?: HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutHouseholdInput;

    @Field(() => HomeOpsWorkloadLedgerUncheckedCreateNestedManyWithoutHouseholdInput, {nullable:true})
    workloadLedgers?: HomeOpsWorkloadLedgerUncheckedCreateNestedManyWithoutHouseholdInput;

    @Field(() => HomeOpsWeeklyPlanUncheckedCreateNestedManyWithoutHouseholdInput, {nullable:true})
    weeklyPlans?: HomeOpsWeeklyPlanUncheckedCreateNestedManyWithoutHouseholdInput;
}
