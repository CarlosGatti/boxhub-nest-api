import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HomeOpsWorkloadLedgerMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    householdId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Date, {nullable:true})
    weekStart?: Date | string;

    @Field(() => Int, {nullable:true})
    pointsCompleted?: number;

    @Field(() => Int, {nullable:true})
    minutesCompleted?: number;

    @Field(() => Int, {nullable:true})
    tasksCompleted?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
