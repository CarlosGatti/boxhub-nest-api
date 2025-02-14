import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventTicketWhereUniqueInput } from './event-ticket-where-unique.input';
import { Type } from 'class-transformer';
import { EventTicketCreateWithoutEventInput } from './event-ticket-create-without-event.input';

@InputType()
export class EventTicketCreateOrConnectWithoutEventInput {

    @Field(() => EventTicketWhereUniqueInput, {nullable:false})
    @Type(() => EventTicketWhereUniqueInput)
    where!: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;

    @Field(() => EventTicketCreateWithoutEventInput, {nullable:false})
    @Type(() => EventTicketCreateWithoutEventInput)
    create!: EventTicketCreateWithoutEventInput;
}
