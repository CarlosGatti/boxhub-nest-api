import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerHouseholdIdUserIdWeekStartCompoundUniqueInput } from './home-ops-workload-ledger-household-id-user-id-week-start-compound-unique.input';
import { HomeOpsWorkloadLedgerWhereInput } from './home-ops-workload-ledger-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HomeOpsHouseholdRelationFilter } from '../home-ops-household/home-ops-household-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsWorkloadLedgerWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => HomeOpsWorkloadLedgerHouseholdIdUserIdWeekStartCompoundUniqueInput, {nullable:true})
    householdId_userId_weekStart?: HomeOpsWorkloadLedgerHouseholdIdUserIdWeekStartCompoundUniqueInput;

    @Field(() => [HomeOpsWorkloadLedgerWhereInput], {nullable:true})
    AND?: Array<HomeOpsWorkloadLedgerWhereInput>;

    @Field(() => [HomeOpsWorkloadLedgerWhereInput], {nullable:true})
    OR?: Array<HomeOpsWorkloadLedgerWhereInput>;

    @Field(() => [HomeOpsWorkloadLedgerWhereInput], {nullable:true})
    NOT?: Array<HomeOpsWorkloadLedgerWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    householdId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    weekStart?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    pointsCompleted?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    minutesCompleted?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    tasksCompleted?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => HomeOpsHouseholdRelationFilter, {nullable:true})
    household?: HomeOpsHouseholdRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;
}
