import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanWhereInput } from './home-ops-weekly-plan-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHomeOpsWeeklyPlanArgs {

    @Field(() => HomeOpsWeeklyPlanWhereInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanWhereInput)
    where?: HomeOpsWeeklyPlanWhereInput;
}
