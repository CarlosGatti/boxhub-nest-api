import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipStatus } from '../prisma/membership-status.enum';
import { EventMemberRole } from '../prisma/event-member-role.enum';
import { EventCreateNestedOneWithoutMembersInput } from '../event/event-create-nested-one-without-members.input';

@InputType()
export class EventMemberCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => MembershipStatus, {nullable:true})
    status?: keyof typeof MembershipStatus;

    @Field(() => Date, {nullable:true})
    joinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    leftAt?: Date | string;

    @Field(() => EventMemberRole, {nullable:true})
    role?: keyof typeof EventMemberRole;

    @Field(() => EventCreateNestedOneWithoutMembersInput, {nullable:false})
    event!: EventCreateNestedOneWithoutMembersInput;
}
