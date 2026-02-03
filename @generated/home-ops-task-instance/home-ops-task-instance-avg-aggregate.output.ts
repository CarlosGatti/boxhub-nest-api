import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class HomeOpsTaskInstanceAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    householdId?: number;

    @Field(() => Float, {nullable:true})
    templateId?: number;

    @Field(() => Float, {nullable:true})
    weeklyPlanId?: number;

    @Field(() => Float, {nullable:true})
    points?: number;

    @Field(() => Float, {nullable:true})
    effortWeight?: number;

    @Field(() => Float, {nullable:true})
    estimatedMinutes?: number;

    @Field(() => Float, {nullable:true})
    assigneeId?: number;

    @Field(() => Float, {nullable:true})
    completedById?: number;
}
