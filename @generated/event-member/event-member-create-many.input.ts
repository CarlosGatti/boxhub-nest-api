import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MembershipStatus } from '../prisma/membership-status.enum';
import { EventMemberRole } from '../prisma/event-member-role.enum';

@InputType()
export class EventMemberCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    eventId!: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => MembershipStatus, {nullable:true})
    status?: keyof typeof MembershipStatus;

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    leftAt?: Date | string;

    @Field(() => EventMemberRole, {nullable:true})
    role?: keyof typeof EventMemberRole;
}
