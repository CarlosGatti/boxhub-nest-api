import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HomeOpsTaskInstanceSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    householdId?: number;

    @Field(() => Int, {nullable:true})
    templateId?: number;

    @Field(() => Int, {nullable:true})
    weeklyPlanId?: number;

    @Field(() => Int, {nullable:true})
    points?: number;

    @Field(() => Int, {nullable:true})
    effortWeight?: number;

    @Field(() => Int, {nullable:true})
    estimatedMinutes?: number;

    @Field(() => Int, {nullable:true})
    assigneeId?: number;

    @Field(() => Int, {nullable:true})
    completedById?: number;
}
