import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MembershipStatus } from '../prisma/membership-status.enum';
import { CommunityMemberRole } from '../prisma/community-member-role.enum';
import { Community } from '../community/community.model';
import { User } from '../user/user.model';

@ObjectType()
export class CommunityMember {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    communityId!: number;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => MembershipStatus, {nullable:false,defaultValue:'PENDING'})
    status!: keyof typeof MembershipStatus;

    @Field(() => Date, {nullable:true})
    joinedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    leftAt!: Date | null;

    @Field(() => CommunityMemberRole, {nullable:false,defaultValue:'MEMBER'})
    role!: keyof typeof CommunityMemberRole;

    @Field(() => Community, {nullable:false})
    community?: Community;

    @Field(() => User, {nullable:true})
    user?: User | null;
}
