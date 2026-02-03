import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanStatus } from '../prisma/home-ops-weekly-plan-status.enum';
import { HomeOpsWeeklyPlanCountAggregate } from './home-ops-weekly-plan-count-aggregate.output';
import { HomeOpsWeeklyPlanAvgAggregate } from './home-ops-weekly-plan-avg-aggregate.output';
import { HomeOpsWeeklyPlanSumAggregate } from './home-ops-weekly-plan-sum-aggregate.output';
import { HomeOpsWeeklyPlanMinAggregate } from './home-ops-weekly-plan-min-aggregate.output';
import { HomeOpsWeeklyPlanMaxAggregate } from './home-ops-weekly-plan-max-aggregate.output';

@ObjectType()
export class HomeOpsWeeklyPlanGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    householdId!: number;

    @Field(() => Date, {nullable:false})
    weekStartDate!: Date | string;

    @Field(() => HomeOpsWeeklyPlanStatus, {nullable:false})
    status!: keyof typeof HomeOpsWeeklyPlanStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
