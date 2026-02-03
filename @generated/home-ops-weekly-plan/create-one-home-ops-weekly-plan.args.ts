import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanCreateInput } from './home-ops-weekly-plan-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHomeOpsWeeklyPlanArgs {

    @Field(() => HomeOpsWeeklyPlanCreateInput, {nullable:false})
    @Type(() => HomeOpsWeeklyPlanCreateInput)
    data!: HomeOpsWeeklyPlanCreateInput;
}
