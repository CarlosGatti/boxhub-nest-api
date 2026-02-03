import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanCountAggregate } from './home-ops-weekly-plan-count-aggregate.output';
import { HomeOpsWeeklyPlanAvgAggregate } from './home-ops-weekly-plan-avg-aggregate.output';
import { HomeOpsWeeklyPlanSumAggregate } from './home-ops-weekly-plan-sum-aggregate.output';
import { HomeOpsWeeklyPlanMinAggregate } from './home-ops-weekly-plan-min-aggregate.output';
import { HomeOpsWeeklyPlanMaxAggregate } from './home-ops-weekly-plan-max-aggregate.output';

@ObjectType()
export class AggregateHomeOpsWeeklyPlan {

    @Field(() => HomeOpsWeeklyPlanCountAggregate, {nullable:true})
    _count?: HomeOpsWeeklyPlanCountAggregate;

    @Field(() => HomeOpsWeeklyPlanAvgAggregate, {nullable:true})
    _avg?: HomeOpsWeeklyPlanAvgAggregate;

    @Field(() => HomeOpsWeeklyPlanSumAggregate, {nullable:true})
    _sum?: HomeOpsWeeklyPlanSumAggregate;

    @Field(() => HomeOpsWeeklyPlanMinAggregate, {nullable:true})
    _min?: HomeOpsWeeklyPlanMinAggregate;

    @Field(() => HomeOpsWeeklyPlanMaxAggregate, {nullable:true})
    _max?: HomeOpsWeeklyPlanMaxAggregate;
}
