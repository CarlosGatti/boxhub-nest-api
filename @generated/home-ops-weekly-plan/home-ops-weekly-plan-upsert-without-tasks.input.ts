import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanUpdateWithoutTasksInput } from './home-ops-weekly-plan-update-without-tasks.input';
import { Type } from 'class-transformer';
import { HomeOpsWeeklyPlanCreateWithoutTasksInput } from './home-ops-weekly-plan-create-without-tasks.input';
import { HomeOpsWeeklyPlanWhereInput } from './home-ops-weekly-plan-where.input';

@InputType()
export class HomeOpsWeeklyPlanUpsertWithoutTasksInput {

    @Field(() => HomeOpsWeeklyPlanUpdateWithoutTasksInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanUpdateWithoutTasksInput)
    update!: HomeOpsWeeklyPlanUpdateWithoutTasksInput;

    @Field(() => HomeOpsWeeklyPlanCreateWithoutTasksInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanCreateWithoutTasksInput)
    create!: HomeOpsWeeklyPlanCreateWithoutTasksInput;

    @Field(() => HomeOpsWeeklyPlanWhereInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanWhereInput)
    where?: HomeOpsWeeklyPlanWhereInput;
}
