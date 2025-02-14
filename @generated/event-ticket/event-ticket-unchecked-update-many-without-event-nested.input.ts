import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTicketCreateWithoutEventInput } from './event-ticket-create-without-event.input';
import { Type } from 'class-transformer';
import { EventTicketCreateOrConnectWithoutEventInput } from './event-ticket-create-or-connect-without-event.input';
import { EventTicketUpsertWithWhereUniqueWithoutEventInput } from './event-ticket-upsert-with-where-unique-without-event.input';
import { EventTicketCreateManyEventInputEnvelope } from './event-ticket-create-many-event-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventTicketWhereUniqueInput } from './event-ticket-where-unique.input';
import { EventTicketUpdateWithWhereUniqueWithoutEventInput } from './event-ticket-update-with-where-unique-without-event.input';
import { EventTicketUpdateManyWithWhereWithoutEventInput } from './event-ticket-update-many-with-where-without-event.input';
import { EventTicketScalarWhereInput } from './event-ticket-scalar-where.input';

@InputType()
export class EventTicketUncheckedUpdateManyWithoutEventNestedInput {

    @Field(() => [EventTicketCreateWithoutEventInput], {nullable:true})
    @Type(() => EventTicketCreateWithoutEventInput)
    create?: Array<EventTicketCreateWithoutEventInput>;

    @Field(() => [EventTicketCreateOrConnectWithoutEventInput], {nullable:true})
    @Type(() => EventTicketCreateOrConnectWithoutEventInput)
    connectOrCreate?: Array<EventTicketCreateOrConnectWithoutEventInput>;

    @Field(() => [EventTicketUpsertWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => EventTicketUpsertWithWhereUniqueWithoutEventInput)
    upsert?: Array<EventTicketUpsertWithWhereUniqueWithoutEventInput>;

    @Field(() => EventTicketCreateManyEventInputEnvelope, {nullable:true})
    @Type(() => EventTicketCreateManyEventInputEnvelope)
    createMany?: EventTicketCreateManyEventInputEnvelope;

    @Field(() => [EventTicketWhereUniqueInput], {nullable:true})
    @Type(() => EventTicketWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;

    @Field(() => [EventTicketWhereUniqueInput], {nullable:true})
    @Type(() => EventTicketWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;

    @Field(() => [EventTicketWhereUniqueInput], {nullable:true})
    @Type(() => EventTicketWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;

    @Field(() => [EventTicketWhereUniqueInput], {nullable:true})
    @Type(() => EventTicketWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>>;

    @Field(() => [EventTicketUpdateWithWhereUniqueWithoutEventInput], {nullable:true})
    @Type(() => EventTicketUpdateWithWhereUniqueWithoutEventInput)
    update?: Array<EventTicketUpdateWithWhereUniqueWithoutEventInput>;

    @Field(() => [EventTicketUpdateManyWithWhereWithoutEventInput], {nullable:true})
    @Type(() => EventTicketUpdateManyWithWhereWithoutEventInput)
    updateMany?: Array<EventTicketUpdateManyWithWhereWithoutEventInput>;

    @Field(() => [EventTicketScalarWhereInput], {nullable:true})
    @Type(() => EventTicketScalarWhereInput)
    deleteMany?: Array<EventTicketScalarWhereInput>;
}
