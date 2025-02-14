import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventTicketWhereUniqueInput } from './event-ticket-where-unique.input';
import { Type } from 'class-transformer';
import { EventTicketCreateWithoutUserInput } from './event-ticket-create-without-user.input';

@InputType()
export class EventTicketCreateOrConnectWithoutUserInput {

    @Field(() => EventTicketWhereUniqueInput, {nullable:false})
    @Type(() => EventTicketWhereUniqueInput)
    where!: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;

    @Field(() => EventTicketCreateWithoutUserInput, {nullable:false})
    @Type(() => EventTicketCreateWithoutUserInput)
    create!: EventTicketCreateWithoutUserInput;
}
