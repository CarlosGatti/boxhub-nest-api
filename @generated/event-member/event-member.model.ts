import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MembershipStatus } from '../prisma/membership-status.enum';
import { EventMemberRole } from '../prisma/event-member-role.enum';
import { Event } from '../event/event.model';
import { User } from '../user/user.model';

@ObjectType()
export class EventMember {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => MembershipStatus, {nullable:false,defaultValue:'PENDING'})
    status!: keyof typeof MembershipStatus;

    @Field(() => Date, {nullable:true})
    joinedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    leftAt!: Date | null;

    @Field(() => EventMemberRole, {nullable:false,defaultValue:'MEMBER'})
    role!: keyof typeof EventMemberRole;

    @Field(() => Event, {nullable:false})
    event?: Event;

    @Field(() => User, {nullable:true})
    user?: User | null;
}
