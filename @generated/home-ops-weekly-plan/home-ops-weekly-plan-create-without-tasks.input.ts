import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanStatus } from '../prisma/home-ops-weekly-plan-status.enum';
import { HomeOpsHouseholdCreateNestedOneWithoutWeeklyPlansInput } from '../home-ops-household/home-ops-household-create-nested-one-without-weekly-plans.input';

@InputType()
export class HomeOpsWeeklyPlanCreateWithoutTasksInput {

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
}
