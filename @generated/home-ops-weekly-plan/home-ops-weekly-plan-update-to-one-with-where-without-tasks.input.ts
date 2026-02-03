import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanWhereInput } from './home-ops-weekly-plan-where.input';
import { Type } from 'class-transformer';
import { HomeOpsWeeklyPlanUpdateWithoutTasksInput } from './home-ops-weekly-plan-update-without-tasks.input';

@InputType()
export class HomeOpsWeeklyPlanUpdateToOneWithWhereWithoutTasksInput {

    @Field(() => HomeOpsWeeklyPlanWhereInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanWhereInput)
    where?: HomeOpsWeeklyPlanWhereInput;

    @Field(() => HomeOpsWeeklyPlanUpdateWithoutTasksInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanUpdateWithoutTasksInput)
    data!: HomeOpsWeeklyPlanUpdateWithoutTasksInput;
}
