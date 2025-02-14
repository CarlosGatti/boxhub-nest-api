import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { CommunityPrivacy } from '../prisma/community-privacy.enum';
import { CommunityCountAggregate } from './community-count-aggregate.output';
import { CommunityAvgAggregate } from './community-avg-aggregate.output';
import { CommunitySumAggregate } from './community-sum-aggregate.output';
import { CommunityMinAggregate } from './community-min-aggregate.output';
import { CommunityMaxAggregate } from './community-max-aggregate.output';

@ObjectType()
export class CommunityGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => String, {nullable:true})
    profilePicture?: string;

    @Field(() => Visibility, {nullable:false})
    visibility!: keyof typeof Visibility;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:true})
    ownerId?: number;

    @Field(() => Int, {nullable:true})
    communityPlanId?: number;

    @Field(() => CommunityPrivacy, {nullable:false})
    postEnabledRole!: keyof typeof CommunityPrivacy;

    @Field(() => CommunityPrivacy, {nullable:false})
    inviteEnabledRole!: keyof typeof CommunityPrivacy;

    @Field(() => Int, {nullable:true})
    parentCommunityId?: number;

    @Field(() => CommunityCountAggregate, {nullable:true})
    _count?: CommunityCountAggregate;

    @Field(() => CommunityAvgAggregate, {nullable:true})
    _avg?: CommunityAvgAggregate;

    @Field(() => CommunitySumAggregate, {nullable:true})
    _sum?: CommunitySumAggregate;

    @Field(() => CommunityMinAggregate, {nullable:true})
    _min?: CommunityMinAggregate;

    @Field(() => CommunityMaxAggregate, {nullable:true})
    _max?: CommunityMaxAggregate;
}
