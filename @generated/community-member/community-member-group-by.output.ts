import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MembershipStatus } from '../prisma/membership-status.enum';
import { CommunityMemberRole } from '../prisma/community-member-role.enum';
import { CommunityMemberCountAggregate } from './community-member-count-aggregate.output';
import { CommunityMemberAvgAggregate } from './community-member-avg-aggregate.output';
import { CommunityMemberSumAggregate } from './community-member-sum-aggregate.output';
import { CommunityMemberMinAggregate } from './community-member-min-aggregate.output';
import { CommunityMemberMaxAggregate } from './community-member-max-aggregate.output';

@ObjectType()
export class CommunityMemberGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    communityId!: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => MembershipStatus, {nullable:false})
    status!: keyof typeof MembershipStatus;

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    leftAt?: Date | string;

    @Field(() => CommunityMemberRole, {nullable:false})
    role!: keyof typeof CommunityMemberRole;

    @Field(() => CommunityMemberCountAggregate, {nullable:true})
    _count?: CommunityMemberCountAggregate;

    @Field(() => CommunityMemberAvgAggregate, {nullable:true})
    _avg?: CommunityMemberAvgAggregate;

    @Field(() => CommunityMemberSumAggregate, {nullable:true})
    _sum?: CommunityMemberSumAggregate;

    @Field(() => CommunityMemberMinAggregate, {nullable:true})
    _min?: CommunityMemberMinAggregate;

    @Field(() => CommunityMemberMaxAggregate, {nullable:true})
    _max?: CommunityMemberMaxAggregate;
}
