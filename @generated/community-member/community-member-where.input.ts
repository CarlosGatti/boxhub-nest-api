import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumMembershipStatusFilter } from '../prisma/enum-membership-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumCommunityMemberRoleFilter } from '../prisma/enum-community-member-role-filter.input';
import { CommunityRelationFilter } from '../community/community-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';

@InputType()
export class CommunityMemberWhereInput {

    @Field(() => [CommunityMemberWhereInput], {nullable:true})
    AND?: Array<CommunityMemberWhereInput>;

    @Field(() => [CommunityMemberWhereInput], {nullable:true})
    OR?: Array<CommunityMemberWhereInput>;

    @Field(() => [CommunityMemberWhereInput], {nullable:true})
    NOT?: Array<CommunityMemberWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    communityId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => EnumMembershipStatusFilter, {nullable:true})
    status?: EnumMembershipStatusFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    joinedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    leftAt?: DateTimeNullableFilter;

    @Field(() => EnumCommunityMemberRoleFilter, {nullable:true})
    role?: EnumCommunityMemberRoleFilter;

    @Field(() => CommunityRelationFilter, {nullable:true})
    community?: CommunityRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    user?: UserNullableRelationFilter;
}
