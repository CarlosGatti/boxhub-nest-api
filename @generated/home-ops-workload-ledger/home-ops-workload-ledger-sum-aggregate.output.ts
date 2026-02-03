import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HomeOpsWorkloadLedgerSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    householdId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    pointsCompleted?: number;

    @Field(() => Int, {nullable:true})
    minutesCompleted?: number;

    @Field(() => Int, {nullable:true})
    tasksCompleted?: number;
}
