import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HomeOpsHouseholdCount {

    @Field(() => Int, {nullable:false})
    members?: number;

    @Field(() => Int, {nullable:false})
    templates?: number;

    @Field(() => Int, {nullable:false})
    taskInstances?: number;

    @Field(() => Int, {nullable:false})
    workloadLedgers?: number;

    @Field(() => Int, {nullable:false})
    weeklyPlans?: number;
}
