import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Visibility } from '../prisma/visibility.enum';
import { Int } from '@nestjs/graphql';
import { CommunityPrivacy } from '../prisma/community-privacy.enum';
import { CommunityPlan } from '../community-plan/community-plan.model';
import { User } from '../user/user.model';
import { CommunityMember } from '../community-member/community-member.model';
import { Event } from '../event/event.model';
import { Facet } from '../facet/facet.model';
import { Publication } from '../publication/publication.model';
import { CommunityCount } from './community-count.output';

@ObjectType()
export class Community {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:true})
    banner!: string | null;

    @Field(() => String, {nullable:true})
    profilePicture!: string | null;

    @Field(() => Visibility, {nullable:false,defaultValue:'PUBLIC'})
    visibility!: keyof typeof Visibility;

    @Field(() => Boolean, {nullable:true,defaultValue:true})
    published!: boolean | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:true})
    ownerId!: number | null;

    @Field(() => Int, {nullable:true})
    communityPlanId!: number | null;

    @Field(() => CommunityPrivacy, {nullable:false,defaultValue:'ALL'})
    postEnabledRole!: keyof typeof CommunityPrivacy;

    @Field(() => CommunityPrivacy, {nullable:false,defaultValue:'ALL'})
    inviteEnabledRole!: keyof typeof CommunityPrivacy;

    @Field(() => Int, {nullable:true})
    parentCommunityId!: number | null;

    @Field(() => CommunityPlan, {nullable:true})
    plan?: CommunityPlan | null;

    @Field(() => User, {nullable:true})
    owner?: User | null;

    @Field(() => Community, {nullable:true})
    parentCommunity?: Community | null;

    @Field(() => [Community], {nullable:true})
    groups?: Array<Community>;

    @Field(() => [CommunityMember], {nullable:true})
    members?: Array<CommunityMember>;

    @Field(() => [Event], {nullable:true})
    events?: Array<Event>;

    @Field(() => [Facet], {nullable:true})
    facets?: Array<Facet>;

    @Field(() => [Publication], {nullable:true})
    publications?: Array<Publication>;

    @Field(() => CommunityCount, {nullable:false})
    _count?: CommunityCount;
}
