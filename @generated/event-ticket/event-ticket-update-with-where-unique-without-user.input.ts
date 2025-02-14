import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventTicketWhereUniqueInput } from './event-ticket-where-unique.input';
import { Type } from 'class-transformer';
import { EventTicketUpdateWithoutUserInput } from './event-ticket-update-without-user.input';

@InputType()
export class EventTicketUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => EventTicketWhereUniqueInput, {nullable:false})
    @Type(() => EventTicketWhereUniqueInput)
    where!: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;

    @Field(() => EventTicketUpdateWithoutUserInput, {nullable:false})
    @Type(() => EventTicketUpdateWithoutUserInput)
    data!: EventTicketUpdateWithoutUserInput;
}
