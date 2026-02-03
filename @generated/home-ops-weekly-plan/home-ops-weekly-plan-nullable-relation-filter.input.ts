import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanWhereInput } from './home-ops-weekly-plan-where.input';

@InputType()
export class HomeOpsWeeklyPlanNullableRelationFilter {

    @Field(() => HomeOpsWeeklyPlanWhereInput, {nullable:true})
    is?: HomeOpsWeeklyPlanWhereInput;

    @Field(() => HomeOpsWeeklyPlanWhereInput, {nullable:true})
    isNot?: HomeOpsWeeklyPlanWhereInput;
}
