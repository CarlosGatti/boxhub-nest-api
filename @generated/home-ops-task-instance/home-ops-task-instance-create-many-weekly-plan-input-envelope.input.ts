import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateManyWeeklyPlanInput } from './home-ops-task-instance-create-many-weekly-plan.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsTaskInstanceCreateManyWeeklyPlanInputEnvelope {

    @Field(() => [HomeOpsTaskInstanceCreateManyWeeklyPlanInput], {nullable:false})
    @Type(() => HomeOpsTaskInstanceCreateManyWeeklyPlanInput)
    data!: Array<HomeOpsTaskInstanceCreateManyWeeklyPlanInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
