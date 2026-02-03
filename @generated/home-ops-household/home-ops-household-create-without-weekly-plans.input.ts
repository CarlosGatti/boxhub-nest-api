import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutHomeOpsHouseholdsOwnedInput } from '../user/user-create-nested-one-without-home-ops-households-owned.input';
import { Type } from 'class-transformer';
import { AppCreateNestedOneWithoutHomeOpsHouseholdsInput } from '../app/app-create-nested-one-without-home-ops-households.input';
import { HomeOpsHouseholdMemberCreateNestedManyWithoutHouseholdInput } from '../home-ops-household-member/home-ops-household-member-create-nested-many-without-household.input';
import { HomeOpsTaskTemplateCreateNestedManyWithoutHouseholdInput } from '../home-ops-task-template/home-ops-task-template-create-nested-many-without-household.input';
import { HomeOpsTaskInstanceCreateNestedManyWithoutHouseholdInput } from '../home-ops-task-instance/home-ops-task-instance-create-nested-many-without-household.input';
import { HomeOpsWorkloadLedgerCreateNestedManyWithoutHouseholdInput } from '../home-ops-workload-ledger/home-ops-workload-ledger-create-nested-many-without-household.input';

@InputType()
export class HomeOpsHouseholdCreateWithoutWeeklyPlansInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutHomeOpsHouseholdsOwnedInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutHomeOpsHouseholdsOwnedInput)
    owner!: UserCreateNestedOneWithoutHomeOpsHouseholdsOwnedInput;

    @Field(() => AppCreateNestedOneWithoutHomeOpsHouseholdsInput, {nullable:true})
    app?: AppCreateNestedOneWithoutHomeOpsHouseholdsInput;

    @Field(() => HomeOpsHouseholdMemberCreateNestedManyWithoutHouseholdInput, {nullable:true})
    members?: HomeOpsHouseholdMemberCreateNestedManyWithoutHouseholdInput;

    @Field(() => HomeOpsTaskTemplateCreateNestedManyWithoutHouseholdInput, {nullable:true})
    templates?: HomeOpsTaskTemplateCreateNestedManyWithoutHouseholdInput;

    @Field(() => HomeOpsTaskInstanceCreateNestedManyWithoutHouseholdInput, {nullable:true})
    taskInstances?: HomeOpsTaskInstanceCreateNestedManyWithoutHouseholdInput;

    @Field(() => HomeOpsWorkloadLedgerCreateNestedManyWithoutHouseholdInput, {nullable:true})
    workloadLedgers?: HomeOpsWorkloadLedgerCreateNestedManyWithoutHouseholdInput;
}
