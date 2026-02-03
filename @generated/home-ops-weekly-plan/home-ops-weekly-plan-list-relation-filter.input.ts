import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanWhereInput } from './home-ops-weekly-plan-where.input';

@InputType()
export class HomeOpsWeeklyPlanListRelationFilter {

    @Field(() => HomeOpsWeeklyPlanWhereInput, {nullable:true})
    every?: HomeOpsWeeklyPlanWhereInput;

    @Field(() => HomeOpsWeeklyPlanWhereInput, {nullable:true})
    some?: HomeOpsWeeklyPlanWhereInput;

    @Field(() => HomeOpsWeeklyPlanWhereInput, {nullable:true})
    none?: HomeOpsWeeklyPlanWhereInput;
}
