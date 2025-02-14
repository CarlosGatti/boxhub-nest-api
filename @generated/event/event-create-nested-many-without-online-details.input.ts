import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutOnlineDetailsInput } from './event-create-without-online-details.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutOnlineDetailsInput } from './event-create-or-connect-without-online-details.input';
import { EventCreateManyOnlineDetailsInputEnvelope } from './event-create-many-online-details-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedManyWithoutOnlineDetailsInput {

    @Field(() => [EventCreateWithoutOnlineDetailsInput], {nullable:true})
    @Type(() => EventCreateWithoutOnlineDetailsInput)
    create?: Array<EventCreateWithoutOnlineDetailsInput>;

    @Field(() => [EventCreateOrConnectWithoutOnlineDetailsInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutOnlineDetailsInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutOnlineDetailsInput>;

    @Field(() => EventCreateManyOnlineDetailsInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyOnlineDetailsInputEnvelope)
    createMany?: EventCreateManyOnlineDetailsInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
}
