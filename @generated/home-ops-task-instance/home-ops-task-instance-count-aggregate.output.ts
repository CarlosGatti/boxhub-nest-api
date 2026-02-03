import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HomeOpsTaskInstanceCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    householdId!: number;

    @Field(() => Int, {nullable:false})
    templateId!: number;

    @Field(() => Int, {nullable:false})
    weeklyPlanId!: number;

    @Field(() => Int, {nullable:false})
    sourceKey!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    category!: number;

    @Field(() => Int, {nullable:false})
    points!: number;

    @Field(() => Int, {nullable:false})
    effortWeight!: number;

    @Field(() => Int, {nullable:false})
    estimatedMinutes!: number;

    @Field(() => Int, {nullable:false})
    dueDate!: number;

    @Field(() => Int, {nullable:false})
    slotLabel!: number;

    @Field(() => Int, {nullable:false})
    windowStart!: number;

    @Field(() => Int, {nullable:false})
    windowEnd!: number;

    @Field(() => Int, {nullable:false})
    assigneeId!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    completedAt!: number;

    @Field(() => Int, {nullable:false})
    completedById!: number;

    @Field(() => Int, {nullable:false})
    skippedAt!: number;

    @Field(() => Int, {nullable:false})
    skipReason!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
