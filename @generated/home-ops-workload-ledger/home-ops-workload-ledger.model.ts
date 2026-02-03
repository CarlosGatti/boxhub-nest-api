import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsHousehold } from '../home-ops-household/home-ops-household.model';
import { User } from '../user/user.model';

@ObjectType()
export class HomeOpsWorkloadLedger {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    householdId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    weekStart!: Date;

    @Field(() => Int, {nullable:false,defaultValue:0})
    pointsCompleted!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    minutesCompleted!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    tasksCompleted!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => HomeOpsHousehold, {nullable:false})
    household?: HomeOpsHousehold;

    @Field(() => User, {nullable:false})
    user?: User;
}
