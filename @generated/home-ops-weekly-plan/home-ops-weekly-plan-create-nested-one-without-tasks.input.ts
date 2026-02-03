import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanCreateWithoutTasksInput } from './home-ops-weekly-plan-create-without-tasks.input';
import { Type } from 'class-transformer';
import { HomeOpsWeeklyPlanCreateOrConnectWithoutTasksInput } from './home-ops-weekly-plan-create-or-connect-without-tasks.input';
import { Prisma } from '@prisma/client';
import { HomeOpsWeeklyPlanWhereUniqueInput } from './home-ops-weekly-plan-where-unique.input';

@InputType()
export class HomeOpsWeeklyPlanCreateNestedOneWithoutTasksInput {

    @Field(() => HomeOpsWeeklyPlanCreateWithoutTasksInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanCreateWithoutTasksInput)
    create?: HomeOpsWeeklyPlanCreateWithoutTasksInput;

    @Field(() => HomeOpsWeeklyPlanCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanCreateOrConnectWithoutTasksInput)
    connectOrCreate?: HomeOpsWeeklyPlanCreateOrConnectWithoutTasksInput;

    @Field(() => HomeOpsWeeklyPlanWhereUniqueInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeOpsWeeklyPlanWhereUniqueInput, 'id' | 'householdId_weekStartDate'>;
}
