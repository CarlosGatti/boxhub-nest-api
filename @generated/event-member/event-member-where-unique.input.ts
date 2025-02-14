import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventMemberWhereInput } from './event-member-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumMembershipStatusFilter } from '../prisma/enum-membership-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumEventMemberRoleFilter } from '../prisma/enum-event-member-role-filter.input';
import { EventRelationFilter } from '../event/event-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';

@InputType()
export class EventMemberWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [EventMemberWhereInput], {nullable:true})
    AND?: Array<EventMemberWhereInput>;

    @Field(() => [EventMemberWhereInput], {nullable:true})
    OR?: Array<EventMemberWhereInput>;

    @Field(() => [EventMemberWhereInput], {nullable:true})
    NOT?: Array<EventMemberWhereInput>;

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

    @Field(() => EventRelationFilter, {nullable:true})
    event?: EventRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    user?: UserNullableRelationFilter;
}
