import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceWhereInput } from './home-ops-task-instance-where.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceOrderByWithAggregationInput } from './home-ops-task-instance-order-by-with-aggregation.input';
import { HomeOpsTaskInstanceScalarFieldEnum } from './home-ops-task-instance-scalar-field.enum';
import { HomeOpsTaskInstanceScalarWhereWithAggregatesInput } from './home-ops-task-instance-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCountAggregateInput } from './home-ops-task-instance-count-aggregate.input';
import { HomeOpsTaskInstanceAvgAggregateInput } from './home-ops-task-instance-avg-aggregate.input';
import { HomeOpsTaskInstanceSumAggregateInput } from './home-ops-task-instance-sum-aggregate.input';
import { HomeOpsTaskInstanceMinAggregateInput } from './home-ops-task-instance-min-aggregate.input';
import { HomeOpsTaskInstanceMaxAggregateInput } from './home-ops-task-instance-max-aggregate.input';

@ArgsType()
export class HomeOpsTaskInstanceGroupByArgs {

    @Field(() => HomeOpsTaskInstanceWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereInput)
    where?: HomeOpsTaskInstanceWhereInput;

    @Field(() => [HomeOpsTaskInstanceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HomeOpsTaskInstanceOrderByWithAggregationInput>;

    @Field(() => [HomeOpsTaskInstanceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HomeOpsTaskInstanceScalarFieldEnum>;

    @Field(() => HomeOpsTaskInstanceScalarWhereWithAggregatesInput, {nullable:true})
    having?: HomeOpsTaskInstanceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HomeOpsTaskInstanceCountAggregateInput, {nullable:true})
    _count?: HomeOpsTaskInstanceCountAggregateInput;

    @Field(() => HomeOpsTaskInstanceAvgAggregateInput, {nullable:true})
    _avg?: HomeOpsTaskInstanceAvgAggregateInput;

    @Field(() => HomeOpsTaskInstanceSumAggregateInput, {nullable:true})
    _sum?: HomeOpsTaskInstanceSumAggregateInput;

    @Field(() => HomeOpsTaskInstanceMinAggregateInput, {nullable:true})
    _min?: HomeOpsTaskInstanceMinAggregateInput;

    @Field(() => HomeOpsTaskInstanceMaxAggregateInput, {nullable:true})
    _max?: HomeOpsTaskInstanceMaxAggregateInput;
}
