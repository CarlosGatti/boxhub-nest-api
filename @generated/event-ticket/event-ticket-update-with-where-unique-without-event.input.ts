import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventTicketWhereUniqueInput } from './event-ticket-where-unique.input';
import { Type } from 'class-transformer';
import { EventTicketUpdateWithoutEventInput } from './event-ticket-update-without-event.input';

@InputType()
export class EventTicketUpdateWithWhereUniqueWithoutEventInput {

    @Field(() => EventTicketWhereUniqueInput, {nullable:false})
    @Type(() => EventTicketWhereUniqueInput)
    where!: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;

    @Field(() => EventTicketUpdateWithoutEventInput, {nullable:false})
    @Type(() => EventTicketUpdateWithoutEventInput)
    data!: EventTicketUpdateWithoutEventInput;
}
