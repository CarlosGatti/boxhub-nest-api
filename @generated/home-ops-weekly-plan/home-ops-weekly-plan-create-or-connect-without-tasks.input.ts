import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsWeeklyPlanWhereUniqueInput } from './home-ops-weekly-plan-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsWeeklyPlanCreateWithoutTasksInput } from './home-ops-weekly-plan-create-without-tasks.input';

@InputType()
export class HomeOpsWeeklyPlanCreateOrConnectWithoutTasksInput {

    @Field(() => HomeOpsWeeklyPlanWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsWeeklyPlanWhereUniqueInput, 'id' | 'householdId_weekStartDate'>;

    @Field(() => HomeOpsWeeklyPlanCreateWithoutTasksInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanCreateWithoutTasksInput)
    create!: HomeOpsWeeklyPlanCreateWithoutTasksInput;
}
