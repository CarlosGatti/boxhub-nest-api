import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumMembershipStatusFieldUpdateOperationsInput } from '../prisma/enum-membership-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumEventMemberRoleFieldUpdateOperationsInput } from '../prisma/enum-event-member-role-field-update-operations.input';
import { EventUpdateOneRequiredWithoutMembersNestedInput } from '../event/event-update-one-required-without-members-nested.input';

@InputType()
export class EventMemberUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumMembershipStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumMembershipStatusFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    leftAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumEventMemberRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumEventMemberRoleFieldUpdateOperationsInput;

    @Field(() => EventUpdateOneRequiredWithoutMembersNestedInput, {nullable:true})
    event?: EventUpdateOneRequiredWithoutMembersNestedInput;
}
