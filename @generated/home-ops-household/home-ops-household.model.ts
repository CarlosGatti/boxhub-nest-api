import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { App } from '../app/app.model';
import { HomeOpsHouseholdMember } from '../home-ops-household-member/home-ops-household-member.model';
import { HomeOpsTaskTemplate } from '../home-ops-task-template/home-ops-task-template.model';
import { HomeOpsTaskInstance } from '../home-ops-task-instance/home-ops-task-instance.model';
import { HomeOpsWorkloadLedger } from '../home-ops-workload-ledger/home-ops-workload-ledger.model';
import { HomeOpsWeeklyPlan } from '../home-ops-weekly-plan/home-ops-weekly-plan.model';
import { HomeOpsHouseholdCount } from './home-ops-household-count.output';

@ObjectType()
export class HomeOpsHousehold {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    ownerId!: number;

    @Field(() => Int, {nullable:true})
    appId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    owner?: User;

    @Field(() => App, {nullable:true})
    app?: App | null;

    @Field(() => [HomeOpsHouseholdMember], {nullable:true})
    members?: Array<HomeOpsHouseholdMember>;

    @Field(() => [HomeOpsTaskTemplate], {nullable:true})
    templates?: Array<HomeOpsTaskTemplate>;

    @Field(() => [HomeOpsTaskInstance], {nullable:true})
    taskInstances?: Array<HomeOpsTaskInstance>;

    @Field(() => [HomeOpsWorkloadLedger], {nullable:true})
    workloadLedgers?: Array<HomeOpsWorkloadLedger>;

    @Field(() => [HomeOpsWeeklyPlan], {nullable:true})
    weeklyPlans?: Array<HomeOpsWeeklyPlan>;

    @Field(() => HomeOpsHouseholdCount, {nullable:false})
    _count?: HomeOpsHouseholdCount;
}
