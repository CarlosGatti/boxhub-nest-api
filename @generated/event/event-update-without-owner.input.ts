import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumVisibilityFieldUpdateOperationsInput } from '../prisma/enum-visibility-field-update-operations.input';
import { CommunityUpdateOneWithoutEventsNestedInput } from '../community/community-update-one-without-events-nested.input';
import { EventAddressUpdateOneWithoutEventNestedInput } from '../event-address/event-address-update-one-without-event-nested.input';
import { EventOnlineDetailUpdateOneWithoutEventNestedInput } from '../event-online-detail/event-online-detail-update-one-without-event-nested.input';
import { EventMemberUpdateManyWithoutEventNestedInput } from '../event-member/event-member-update-many-without-event-nested.input';
import { EventTicketUpdateManyWithoutEventNestedInput } from '../event-ticket/event-ticket-update-many-without-event-nested.input';
import { PublicationUpdateManyWithoutEventNestedInput } from '../publication/publication-update-many-without-event-nested.input';

@InputType()
export class EventUpdateWithoutOwnerInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    content?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    endDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumVisibilityFieldUpdateOperationsInput, {nullable:true})
    visibility?: EnumVisibilityFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    banner?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CommunityUpdateOneWithoutEventsNestedInput, {nullable:true})
    Community?: CommunityUpdateOneWithoutEventsNestedInput;

    @Field(() => EventAddressUpdateOneWithoutEventNestedInput, {nullable:true})
    address?: EventAddressUpdateOneWithoutEventNestedInput;

    @Field(() => EventOnlineDetailUpdateOneWithoutEventNestedInput, {nullable:true})
    onlineDetails?: EventOnlineDetailUpdateOneWithoutEventNestedInput;

    @Field(() => EventMemberUpdateManyWithoutEventNestedInput, {nullable:true})
    members?: EventMemberUpdateManyWithoutEventNestedInput;

    @Field(() => EventTicketUpdateManyWithoutEventNestedInput, {nullable:true})
    tickets?: EventTicketUpdateManyWithoutEventNestedInput;

    @Field(() => PublicationUpdateManyWithoutEventNestedInput, {nullable:true})
    publications?: PublicationUpdateManyWithoutEventNestedInput;
}
