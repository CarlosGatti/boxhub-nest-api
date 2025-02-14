import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTicketCreateWithoutUserInput } from './event-ticket-create-without-user.input';
import { Type } from 'class-transformer';
import { EventTicketCreateOrConnectWithoutUserInput } from './event-ticket-create-or-connect-without-user.input';
import { EventTicketCreateManyUserInputEnvelope } from './event-ticket-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventTicketWhereUniqueInput } from './event-ticket-where-unique.input';

@InputType()
export class EventTicketCreateNestedManyWithoutUserInput {

    @Field(() => [EventTicketCreateWithoutUserInput], {nullable:true})
    @Type(() => EventTicketCreateWithoutUserInput)
    create?: Array<EventTicketCreateWithoutUserInput>;

    @Field(() => [EventTicketCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => EventTicketCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<EventTicketCreateOrConnectWithoutUserInput>;

    @Field(() => EventTicketCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => EventTicketCreateManyUserInputEnvelope)
    createMany?: EventTicketCreateManyUserInputEnvelope;

    @Field(() => [EventTicketWhereUniqueInput], {nullable:true})
    @Type(() => EventTicketWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;
}
