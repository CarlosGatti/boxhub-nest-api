import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateNestedOneWithoutTicketsInput } from '../event/event-create-nested-one-without-tickets.input';
import { UserCreateNestedOneWithoutEventTicketInput } from '../user/user-create-nested-one-without-event-ticket.input';

@InputType()
export class EventTicketCreateInput {

    @Field(() => Boolean, {nullable:false})
    beeped!: boolean;

    @Field(() => Date, {nullable:false})
    expire!: Date | string;

    @Field(() => Date, {nullable:true})
    beepedTime?: Date | string;

    @Field(() => Boolean, {nullable:true})
    valid?: boolean;

    @Field(() => EventCreateNestedOneWithoutTicketsInput, {nullable:false})
    event!: EventCreateNestedOneWithoutTicketsInput;

    @Field(() => UserCreateNestedOneWithoutEventTicketInput, {nullable:false})
    user!: UserCreateNestedOneWithoutEventTicketInput;
}
