import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTicketCreateManyUserInput } from './event-ticket-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class EventTicketCreateManyUserInputEnvelope {

    @Field(() => [EventTicketCreateManyUserInput], {nullable:false})
    @Type(() => EventTicketCreateManyUserInput)
    data!: Array<EventTicketCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
