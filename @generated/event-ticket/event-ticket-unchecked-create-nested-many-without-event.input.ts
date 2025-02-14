import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTicketCreateWithoutEventInput } from './event-ticket-create-without-event.input';
import { Type } from 'class-transformer';
import { EventTicketCreateOrConnectWithoutEventInput } from './event-ticket-create-or-connect-without-event.input';
import { EventTicketCreateManyEventInputEnvelope } from './event-ticket-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventTicketWhereUniqueInput } from './event-ticket-where-unique.input';

@InputType()
export class EventTicketUncheckedCreateNestedManyWithoutEventInput {

    @Field(() => [EventTicketCreateWithoutEventInput], {nullable:true})
    @Type(() => EventTicketCreateWithoutEventInput)
    create?: Array<EventTicketCreateWithoutEventInput>;

    @Field(() => [EventTicketCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => EventTicketCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<EventTicketCreateOrConnectWithoutEventInput>;

    @Field(() => EventTicketCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => EventTicketCreateManyEventInputEnvelope)
    createMany?: EventTicketCreateManyEventInputEnvelope;

    @Field(() => [EventTicketWhereUniqueInput], {nullable:true})
    @Type(() => EventTicketWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
}
