import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipStatus } from '../prisma/membership-status.enum';
import { EventMemberRole } from '../prisma/event-member-role.enum';
import { UserCreateNestedOneWithoutEventMemberInput } from '../user/user-create-nested-one-without-event-member.input';

@InputType()
export class EventMemberCreateWithoutEventInput {

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

    @Field(() => UserCreateNestedOneWithoutEventMemberInput, {nullable:true})
    user?: UserCreateNestedOneWithoutEventMemberInput;
}
