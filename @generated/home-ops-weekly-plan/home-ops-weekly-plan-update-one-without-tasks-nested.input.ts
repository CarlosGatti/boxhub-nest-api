import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanCreateWithoutTasksInput } from './home-ops-weekly-plan-create-without-tasks.input';
import { Type } from 'class-transformer';
import { HomeOpsWeeklyPlanCreateOrConnectWithoutTasksInput } from './home-ops-weekly-plan-create-or-connect-without-tasks.input';
import { HomeOpsWeeklyPlanUpsertWithoutTasksInput } from './home-ops-weekly-plan-upsert-without-tasks.input';
import { HomeOpsWeeklyPlanWhereInput } from './home-ops-weekly-plan-where.input';
import { Prisma } from '@prisma/client';
import { HomeOpsWeeklyPlanWhereUniqueInput } from './home-ops-weekly-plan-where-unique.input';
import { HomeOpsWeeklyPlanUpdateToOneWithWhereWithoutTasksInput } from './home-ops-weekly-plan-update-to-one-with-where-without-tasks.input';

@InputType()
export class HomeOpsWeeklyPlanUpdateOneWithoutTasksNestedInput {

    @Field(() => HomeOpsWeeklyPlanCreateWithoutTasksInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanCreateWithoutTasksInput)
    create?: HomeOpsWeeklyPlanCreateWithoutTasksInput;

    @Field(() => HomeOpsWeeklyPlanCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanCreateOrConnectWithoutTasksInput)
    connectOrCreate?: HomeOpsWeeklyPlanCreateOrConnectWithoutTasksInput;

    @Field(() => HomeOpsWeeklyPlanUpsertWithoutTasksInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanUpsertWithoutTasksInput)
    upsert?: HomeOpsWeeklyPlanUpsertWithoutTasksInput;

    @Field(() => HomeOpsWeeklyPlanWhereInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanWhereInput)
    disconnect?: HomeOpsWeeklyPlanWhereInput;

    @Field(() => HomeOpsWeeklyPlanWhereInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanWhereInput)
    delete?: HomeOpsWeeklyPlanWhereInput;

    @Field(() => HomeOpsWeeklyPlanWhereUniqueInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeOpsWeeklyPlanWhereUniqueInput, 'id' | 'householdId_weekStartDate'>;

    @Field(() => HomeOpsWeeklyPlanUpdateToOneWithWhereWithoutTasksInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanUpdateToOneWithWhereWithoutTasksInput)
    update?: HomeOpsWeeklyPlanUpdateToOneWithWhereWithoutTasksInput;
}
