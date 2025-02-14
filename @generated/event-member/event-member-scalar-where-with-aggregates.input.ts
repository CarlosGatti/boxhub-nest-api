import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumMembershipStatusWithAggregatesFilter } from '../prisma/enum-membership-status-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumEventMemberRoleWithAggregatesFilter } from '../prisma/enum-event-member-role-with-aggregates-filter.input';

@InputType()
export class EventMemberScalarWhereWithAggregatesInput {

    @Field(() => [EventMemberScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EventMemberScalarWhereWithAggregatesInput>;

    @Field(() => [EventMemberScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EventMemberScalarWhereWithAggregatesInput>;

    @Field(() => [EventMemberScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EventMemberScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    eventId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;

    @Field(() => EnumMembershipStatusWithAggregatesFilter, {nullable:true})
    status?: EnumMembershipStatusWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    joinedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    leftAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => EnumEventMemberRoleWithAggregatesFilter, {nullable:true})
    role?: EnumEventMemberRoleWithAggregatesFilter;
}
