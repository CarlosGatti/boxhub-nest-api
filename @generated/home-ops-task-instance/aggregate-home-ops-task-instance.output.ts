import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCountAggregate } from './home-ops-task-instance-count-aggregate.output';
import { HomeOpsTaskInstanceAvgAggregate } from './home-ops-task-instance-avg-aggregate.output';
import { HomeOpsTaskInstanceSumAggregate } from './home-ops-task-instance-sum-aggregate.output';
import { HomeOpsTaskInstanceMinAggregate } from './home-ops-task-instance-min-aggregate.output';
import { HomeOpsTaskInstanceMaxAggregate } from './home-ops-task-instance-max-aggregate.output';

@ObjectType()
export class AggregateHomeOpsTaskInstance {

    @Field(() => HomeOpsTaskInstanceCountAggregate, {nullable:true})
    _count?: HomeOpsTaskInstanceCountAggregate;

    @Field(() => HomeOpsTaskInstanceAvgAggregate, {nullable:true})
    _avg?: HomeOpsTaskInstanceAvgAggregate;

    @Field(() => HomeOpsTaskInstanceSumAggregate, {nullable:true})
    _sum?: HomeOpsTaskInstanceSumAggregate;

    @Field(() => HomeOpsTaskInstanceMinAggregate, {nullable:true})
    _min?: HomeOpsTaskInstanceMinAggregate;

    @Field(() => HomeOpsTaskInstanceMaxAggregate, {nullable:true})
    _max?: HomeOpsTaskInstanceMaxAggregate;
}
