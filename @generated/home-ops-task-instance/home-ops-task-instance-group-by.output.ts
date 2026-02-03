import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskStatus } from '../prisma/home-ops-task-status.enum';
import { HomeOpsTaskInstanceCountAggregate } from './home-ops-task-instance-count-aggregate.output';
import { HomeOpsTaskInstanceAvgAggregate } from './home-ops-task-instance-avg-aggregate.output';
import { HomeOpsTaskInstanceSumAggregate } from './home-ops-task-instance-sum-aggregate.output';
import { HomeOpsTaskInstanceMinAggregate } from './home-ops-task-instance-min-aggregate.output';
import { HomeOpsTaskInstanceMaxAggregate } from './home-ops-task-instance-max-aggregate.output';

@ObjectType()
export class HomeOpsTaskInstanceGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    householdId!: number;

    @Field(() => Int, {nullable:true})
    templateId?: number;

    @Field(() => Int, {nullable:true})
    weeklyPlanId?: number;

    @Field(() => String, {nullable:true})
    sourceKey?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => Int, {nullable:false})
    points!: number;

    @Field(() => Int, {nullable:false})
    effortWeight!: number;

    @Field(() => Int, {nullable:true})
    estimatedMinutes?: number;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => String, {nullable:true})
    slotLabel?: string;

    @Field(() => String, {nullable:true})
    windowStart?: string;

    @Field(() => String, {nullable:true})
    windowEnd?: string;

    @Field(() => Int, {nullable:true})
    assigneeId?: number;

    @Field(() => HomeOpsTaskStatus, {nullable:false})
    status!: keyof typeof HomeOpsTaskStatus;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    completedById?: number;

    @Field(() => Date, {nullable:true})
    skippedAt?: Date | string;

    @Field(() => String, {nullable:true})
    skipReason?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
