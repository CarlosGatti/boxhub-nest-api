import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceWhereInput } from './home-ops-task-instance-where.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceOrderByWithRelationInput } from './home-ops-task-instance-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCountAggregateInput } from './home-ops-task-instance-count-aggregate.input';
import { HomeOpsTaskInstanceAvgAggregateInput } from './home-ops-task-instance-avg-aggregate.input';
import { HomeOpsTaskInstanceSumAggregateInput } from './home-ops-task-instance-sum-aggregate.input';
import { HomeOpsTaskInstanceMinAggregateInput } from './home-ops-task-instance-min-aggregate.input';
import { HomeOpsTaskInstanceMaxAggregateInput } from './home-ops-task-instance-max-aggregate.input';

@ArgsType()
export class HomeOpsTaskInstanceAggregateArgs {

    @Field(() => HomeOpsTaskInstanceWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereInput)
    where?: HomeOpsTaskInstanceWhereInput;

    @Field(() => [HomeOpsTaskInstanceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeOpsTaskInstanceOrderByWithRelationInput>;

    @Field(() => HomeOpsTaskInstanceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>;

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
