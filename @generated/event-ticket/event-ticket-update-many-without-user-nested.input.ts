import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTicketCreateWithoutUserInput } from './event-ticket-create-without-user.input';
import { Type } from 'class-transformer';
import { EventTicketCreateOrConnectWithoutUserInput } from './event-ticket-create-or-connect-without-user.input';
import { EventTicketUpsertWithWhereUniqueWithoutUserInput } from './event-ticket-upsert-with-where-unique-without-user.input';
import { EventTicketCreateManyUserInputEnvelope } from './event-ticket-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventTicketWhereUniqueInput } from './event-ticket-where-unique.input';
import { EventTicketUpdateWithWhereUniqueWithoutUserInput } from './event-ticket-update-with-where-unique-without-user.input';
import { EventTicketUpdateManyWithWhereWithoutUserInput } from './event-ticket-update-many-with-where-without-user.input';
import { EventTicketScalarWhereInput } from './event-ticket-scalar-where.input';

@InputType()
export class EventTicketUpdateManyWithoutUserNestedInput {

    @Field(() => [EventTicketCreateWithoutUserInput], {nullable:true})
    @Type(() => EventTicketCreateWithoutUserInput)
    create?: Array<EventTicketCreateWithoutUserInput>;

    @Field(() => [EventTicketCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => EventTicketCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<EventTicketCreateOrConnectWithoutUserInput>;

    @Field(() => [EventTicketUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EventTicketUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<EventTicketUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => EventTicketCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => EventTicketCreateManyUserInputEnvelope)
    createMany?: EventTicketCreateManyUserInputEnvelope;

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

    @Field(() => [EventTicketUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => EventTicketUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<EventTicketUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [EventTicketUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => EventTicketUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<EventTicketUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [EventTicketScalarWhereInput], {nullable:true})
    @Type(() => EventTicketScalarWhereInput)
    deleteMany?: Array<EventTicketScalarWhereInput>;
}
