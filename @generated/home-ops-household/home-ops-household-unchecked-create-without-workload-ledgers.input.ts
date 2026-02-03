import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberUncheckedCreateNestedManyWithoutHouseholdInput } from '../home-ops-household-member/home-ops-household-member-unchecked-create-nested-many-without-household.input';
import { HomeOpsTaskTemplateUncheckedCreateNestedManyWithoutHouseholdInput } from '../home-ops-task-template/home-ops-task-template-unchecked-create-nested-many-without-household.input';
import { HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutHouseholdInput } from '../home-ops-task-instance/home-ops-task-instance-unchecked-create-nested-many-without-household.input';
import { HomeOpsWeeklyPlanUncheckedCreateNestedManyWithoutHouseholdInput } from '../home-ops-weekly-plan/home-ops-weekly-plan-unchecked-create-nested-many-without-household.input';

@InputType()
export class HomeOpsHouseholdUncheckedCreateWithoutWorkloadLedgersInput {

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

    @Field(() => HomeOpsHouseholdMemberUncheckedCreateNestedManyWithoutHouseholdInput, {nullable:true})
    members?: HomeOpsHouseholdMemberUncheckedCreateNestedManyWithoutHouseholdInput;

    @Field(() => HomeOpsTaskTemplateUncheckedCreateNestedManyWithoutHouseholdInput, {nullable:true})
    templates?: HomeOpsTaskTemplateUncheckedCreateNestedManyWithoutHouseholdInput;

    @Field(() => HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutHouseholdInput, {nullable:true})
    taskInstances?: HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutHouseholdInput;

    @Field(() => HomeOpsWeeklyPlanUncheckedCreateNestedManyWithoutHouseholdInput, {nullable:true})
    weeklyPlans?: HomeOpsWeeklyPlanUncheckedCreateNestedManyWithoutHouseholdInput;
}
