import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanStatus } from '../prisma/home-ops-weekly-plan-status.enum';
import { HomeOpsTaskInstanceCreateNestedManyWithoutWeeklyPlanInput } from '../home-ops-task-instance/home-ops-task-instance-create-nested-many-without-weekly-plan.input';

@InputType()
export class HomeOpsWeeklyPlanCreateWithoutHouseholdInput {

    @Field(() => Date, {nullable:false})
    weekStartDate!: Date | string;

    @Field(() => HomeOpsWeeklyPlanStatus, {nullable:true})
    status?: keyof typeof HomeOpsWeeklyPlanStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => HomeOpsTaskInstanceCreateNestedManyWithoutWeeklyPlanInput, {nullable:true})
    tasks?: HomeOpsTaskInstanceCreateNestedManyWithoutWeeklyPlanInput;
}
