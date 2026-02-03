import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class HomeOpsWorkloadLedgerAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    householdId?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    pointsCompleted?: number;

    @Field(() => Float, {nullable:true})
    minutesCompleted?: number;

    @Field(() => Float, {nullable:true})
    tasksCompleted?: number;
}
