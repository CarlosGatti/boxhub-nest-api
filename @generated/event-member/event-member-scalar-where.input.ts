import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumMembershipStatusFilter } from '../prisma/enum-membership-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumEventMemberRoleFilter } from '../prisma/enum-event-member-role-filter.input';

@InputType()
export class EventMemberScalarWhereInput {

    @Field(() => [EventMemberScalarWhereInput], {nullable:true})
    AND?: Array<EventMemberScalarWhereInput>;

    @Field(() => [EventMemberScalarWhereInput], {nullable:true})
    OR?: Array<EventMemberScalarWhereInput>;

    @Field(() => [EventMemberScalarWhereInput], {nullable:true})
    NOT?: Array<EventMemberScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    eventId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => EnumMembershipStatusFilter, {nullable:true})
    status?: EnumMembershipStatusFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    joinedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    leftAt?: DateTimeNullableFilter;

    @Field(() => EnumEventMemberRoleFilter, {nullable:true})
    role?: EnumEventMemberRoleFilter;
}
