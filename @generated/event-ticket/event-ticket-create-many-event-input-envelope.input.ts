import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTicketCreateManyEventInput } from './event-ticket-create-many-event.input';
import { Type } from 'class-transformer';

@InputType()
export class EventTicketCreateManyEventInputEnvelope {

    @Field(() => [EventTicketCreateManyEventInput], {nullable:false})
    @Type(() => EventTicketCreateManyEventInput)
    data!: Array<EventTicketCreateManyEventInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
