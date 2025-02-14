import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MembershipStatus } from '../prisma/membership-status.enum';
import { EventMemberRole } from '../prisma/event-member-role.enum';
import { EventMemberCountAggregate } from './event-member-count-aggregate.output';
import { EventMemberAvgAggregate } from './event-member-avg-aggregate.output';
import { EventMemberSumAggregate } from './event-member-sum-aggregate.output';
import { EventMemberMinAggregate } from './event-member-min-aggregate.output';
import { EventMemberMaxAggregate } from './event-member-max-aggregate.output';

@ObjectType()
export class EventMemberGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => MembershipStatus, {nullable:false})
    status!: keyof typeof MembershipStatus;

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    leftAt?: Date | string;

    @Field(() => EventMemberRole, {nullable:false})
    role!: keyof typeof EventMemberRole;

    @Field(() => EventMemberCountAggregate, {nullable:true})
    _count?: EventMemberCountAggregate;

    @Field(() => EventMemberAvgAggregate, {nullable:true})
    _avg?: EventMemberAvgAggregate;

    @Field(() => EventMemberSumAggregate, {nullable:true})
    _sum?: EventMemberSumAggregate;

    @Field(() => EventMemberMinAggregate, {nullable:true})
    _min?: EventMemberMinAggregate;

    @Field(() => EventMemberMaxAggregate, {nullable:true})
    _max?: EventMemberMaxAggregate;
}
