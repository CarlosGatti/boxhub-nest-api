import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumMembershipStatusWithAggregatesFilter } from '../prisma/enum-membership-status-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumCommunityMemberRoleWithAggregatesFilter } from '../prisma/enum-community-member-role-with-aggregates-filter.input';

@InputType()
export class CommunityMemberScalarWhereWithAggregatesInput {

    @Field(() => [CommunityMemberScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CommunityMemberScalarWhereWithAggregatesInput>;

    @Field(() => [CommunityMemberScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CommunityMemberScalarWhereWithAggregatesInput>;

    @Field(() => [CommunityMemberScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CommunityMemberScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    communityId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;

    @Field(() => EnumMembershipStatusWithAggregatesFilter, {nullable:true})
    status?: EnumMembershipStatusWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    joinedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    leftAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => EnumCommunityMemberRoleWithAggregatesFilter, {nullable:true})
    role?: EnumCommunityMemberRoleWithAggregatesFilter;
}
