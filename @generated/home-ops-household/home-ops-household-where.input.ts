import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { AppNullableRelationFilter } from '../app/app-nullable-relation-filter.input';
import { HomeOpsHouseholdMemberListRelationFilter } from '../home-ops-household-member/home-ops-household-member-list-relation-filter.input';
import { HomeOpsTaskTemplateListRelationFilter } from '../home-ops-task-template/home-ops-task-template-list-relation-filter.input';
import { HomeOpsTaskInstanceListRelationFilter } from '../home-ops-task-instance/home-ops-task-instance-list-relation-filter.input';
import { HomeOpsWorkloadLedgerListRelationFilter } from '../home-ops-workload-ledger/home-ops-workload-ledger-list-relation-filter.input';
import { HomeOpsWeeklyPlanListRelationFilter } from '../home-ops-weekly-plan/home-ops-weekly-plan-list-relation-filter.input';

@InputType()
export class HomeOpsHouseholdWhereInput {

    @Field(() => [HomeOpsHouseholdWhereInput], {nullable:true})
    AND?: Array<HomeOpsHouseholdWhereInput>;

    @Field(() => [HomeOpsHouseholdWhereInput], {nullable:true})
    OR?: Array<HomeOpsHouseholdWhereInput>;

    @Field(() => [HomeOpsHouseholdWhereInput], {nullable:true})
    NOT?: Array<HomeOpsHouseholdWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    ownerId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    appId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    owner?: UserRelationFilter;

    @Field(() => AppNullableRelationFilter, {nullable:true})
    app?: AppNullableRelationFilter;

    @Field(() => HomeOpsHouseholdMemberListRelationFilter, {nullable:true})
    members?: HomeOpsHouseholdMemberListRelationFilter;

    @Field(() => HomeOpsTaskTemplateListRelationFilter, {nullable:true})
    templates?: HomeOpsTaskTemplateListRelationFilter;

    @Field(() => HomeOpsTaskInstanceListRelationFilter, {nullable:true})
    taskInstances?: HomeOpsTaskInstanceListRelationFilter;

    @Field(() => HomeOpsWorkloadLedgerListRelationFilter, {nullable:true})
    workloadLedgers?: HomeOpsWorkloadLedgerListRelationFilter;

    @Field(() => HomeOpsWeeklyPlanListRelationFilter, {nullable:true})
    weeklyPlans?: HomeOpsWeeklyPlanListRelationFilter;
}
