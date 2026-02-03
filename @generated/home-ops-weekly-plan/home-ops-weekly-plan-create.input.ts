import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanStatus } from '../prisma/home-ops-weekly-plan-status.enum';
import { HomeOpsHouseholdCreateNestedOneWithoutWeeklyPlansInput } from '../home-ops-household/home-ops-household-create-nested-one-without-weekly-plans.input';
import { HomeOpsTaskInstanceCreateNestedManyWithoutWeeklyPlanInput } from '../home-ops-task-instance/home-ops-task-instance-create-nested-many-without-weekly-plan.input';

@InputType()
export class HomeOpsWeeklyPlanCreateInput {

    @Field(() => Date, {nullable:false})
    weekStartDate!: Date | string;

    @Field(() => HomeOpsWeeklyPlanStatus, {nullable:true})
    status?: keyof typeof HomeOpsWeeklyPlanStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => HomeOpsHouseholdCreateNestedOneWithoutWeeklyPlansInput, {nullable:false})
    household!: HomeOpsHouseholdCreateNestedOneWithoutWeeklyPlansInput;

    @Field(() => HomeOpsTaskInstanceCreateNestedManyWithoutWeeklyPlanInput, {nullable:true})
    tasks?: HomeOpsTaskInstanceCreateNestedManyWithoutWeeklyPlanInput;
}
