import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanStatus } from '../prisma/home-ops-weekly-plan-status.enum';
import { HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutWeeklyPlanInput } from '../home-ops-task-instance/home-ops-task-instance-unchecked-create-nested-many-without-weekly-plan.input';

@InputType()
export class HomeOpsWeeklyPlanUncheckedCreateWithoutHouseholdInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:false})
    weekStartDate!: Date | string;

    @Field(() => HomeOpsWeeklyPlanStatus, {nullable:true})
    status?: keyof typeof HomeOpsWeeklyPlanStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutWeeklyPlanInput, {nullable:true})
    tasks?: HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutWeeklyPlanInput;
}
