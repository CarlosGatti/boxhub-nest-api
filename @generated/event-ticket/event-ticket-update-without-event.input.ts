import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutEventTicketNestedInput } from '../user/user-update-one-required-without-event-ticket-nested.input';

@InputType()
export class EventTicketUpdateWithoutEventInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    beeped?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expire?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    beepedTime?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    valid?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutEventTicketNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutEventTicketNestedInput;
}
