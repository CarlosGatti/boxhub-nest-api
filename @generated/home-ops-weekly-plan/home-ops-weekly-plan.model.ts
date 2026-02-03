import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanStatus } from '../prisma/home-ops-weekly-plan-status.enum';
import { HomeOpsHousehold } from '../home-ops-household/home-ops-household.model';
import { HomeOpsTaskInstance } from '../home-ops-task-instance/home-ops-task-instance.model';
import { HomeOpsWeeklyPlanCount } from './home-ops-weekly-plan-count.output';

@ObjectType()
export class HomeOpsWeeklyPlan {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    householdId!: number;

    @Field(() => Date, {nullable:false})
    weekStartDate!: Date;

    @Field(() => HomeOpsWeeklyPlanStatus, {nullable:false,defaultValue:'PLANNED'})
    status!: keyof typeof HomeOpsWeeklyPlanStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => HomeOpsHousehold, {nullable:false})
    household?: HomeOpsHousehold;

    @Field(() => [HomeOpsTaskInstance], {nullable:true})
    tasks?: Array<HomeOpsTaskInstance>;

    @Field(() => HomeOpsWeeklyPlanCount, {nullable:false})
    _count?: HomeOpsWeeklyPlanCount;
}
