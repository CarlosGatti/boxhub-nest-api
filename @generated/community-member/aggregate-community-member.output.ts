import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CommunityMemberCountAggregate } from './community-member-count-aggregate.output';
import { CommunityMemberAvgAggregate } from './community-member-avg-aggregate.output';
import { CommunityMemberSumAggregate } from './community-member-sum-aggregate.output';
import { CommunityMemberMinAggregate } from './community-member-min-aggregate.output';
import { CommunityMemberMaxAggregate } from './community-member-max-aggregate.output';

@ObjectType()
export class AggregateCommunityMember {

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
