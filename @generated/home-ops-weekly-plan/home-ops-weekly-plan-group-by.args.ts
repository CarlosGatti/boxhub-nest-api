import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanWhereInput } from './home-ops-weekly-plan-where.input';
import { Type } from 'class-transformer';
import { HomeOpsWeeklyPlanOrderByWithAggregationInput } from './home-ops-weekly-plan-order-by-with-aggregation.input';
import { HomeOpsWeeklyPlanScalarFieldEnum } from './home-ops-weekly-plan-scalar-field.enum';
import { HomeOpsWeeklyPlanScalarWhereWithAggregatesInput } from './home-ops-weekly-plan-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanCountAggregateInput } from './home-ops-weekly-plan-count-aggregate.input';
import { HomeOpsWeeklyPlanAvgAggregateInput } from './home-ops-weekly-plan-avg-aggregate.input';
import { HomeOpsWeeklyPlanSumAggregateInput } from './home-ops-weekly-plan-sum-aggregate.input';
import { HomeOpsWeeklyPlanMinAggregateInput } from './home-ops-weekly-plan-min-aggregate.input';
import { HomeOpsWeeklyPlanMaxAggregateInput } from './home-ops-weekly-plan-max-aggregate.input';

@ArgsType()
export class HomeOpsWeeklyPlanGroupByArgs {

    @Field(() => HomeOpsWeeklyPlanWhereInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanWhereInput)
    where?: HomeOpsWeeklyPlanWhereInput;

    @Field(() => [HomeOpsWeeklyPlanOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HomeOpsWeeklyPlanOrderByWithAggregationInput>;

    @Field(() => [HomeOpsWeeklyPlanScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HomeOpsWeeklyPlanScalarFieldEnum>;

    @Field(() => HomeOpsWeeklyPlanScalarWhereWithAggregatesInput, {nullable:true})
    having?: HomeOpsWeeklyPlanScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HomeOpsWeeklyPlanCountAggregateInput, {nullable:true})
    _count?: HomeOpsWeeklyPlanCountAggregateInput;

    @Field(() => HomeOpsWeeklyPlanAvgAggregateInput, {nullable:true})
    _avg?: HomeOpsWeeklyPlanAvgAggregateInput;

    @Field(() => HomeOpsWeeklyPlanSumAggregateInput, {nullable:true})
    _sum?: HomeOpsWeeklyPlanSumAggregateInput;

    @Field(() => HomeOpsWeeklyPlanMinAggregateInput, {nullable:true})
    _min?: HomeOpsWeeklyPlanMinAggregateInput;

    @Field(() => HomeOpsWeeklyPlanMaxAggregateInput, {nullable:true})
    _max?: HomeOpsWeeklyPlanMaxAggregateInput;
}
