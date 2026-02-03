import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HouseholdRole } from '../prisma/household-role.enum';
import { HomeOpsHouseholdMemberCountAggregate } from './home-ops-household-member-count-aggregate.output';
import { HomeOpsHouseholdMemberAvgAggregate } from './home-ops-household-member-avg-aggregate.output';
import { HomeOpsHouseholdMemberSumAggregate } from './home-ops-household-member-sum-aggregate.output';
import { HomeOpsHouseholdMemberMinAggregate } from './home-ops-household-member-min-aggregate.output';
import { HomeOpsHouseholdMemberMaxAggregate } from './home-ops-household-member-max-aggregate.output';

@ObjectType()
export class HomeOpsHouseholdMemberGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    householdId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => HouseholdRole, {nullable:false})
    role!: keyof typeof HouseholdRole;

    @Field(() => Date, {nullable:false})
    joinedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => HomeOpsHouseholdMemberCountAggregate, {nullable:true})
    _count?: HomeOpsHouseholdMemberCountAggregate;

    @Field(() => HomeOpsHouseholdMemberAvgAggregate, {nullable:true})
    _avg?: HomeOpsHouseholdMemberAvgAggregate;

    @Field(() => HomeOpsHouseholdMemberSumAggregate, {nullable:true})
    _sum?: HomeOpsHouseholdMemberSumAggregate;

    @Field(() => HomeOpsHouseholdMemberMinAggregate, {nullable:true})
    _min?: HomeOpsHouseholdMemberMinAggregate;

    @Field(() => HomeOpsHouseholdMemberMaxAggregate, {nullable:true})
    _max?: HomeOpsHouseholdMemberMaxAggregate;
}
