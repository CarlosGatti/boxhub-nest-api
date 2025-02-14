import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutOnlineDetailsInput } from './event-create-without-online-details.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutOnlineDetailsInput } from './event-create-or-connect-without-online-details.input';
import { EventUpsertWithWhereUniqueWithoutOnlineDetailsInput } from './event-upsert-with-where-unique-without-online-details.input';
import { EventCreateManyOnlineDetailsInputEnvelope } from './event-create-many-online-details-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithWhereUniqueWithoutOnlineDetailsInput } from './event-update-with-where-unique-without-online-details.input';
import { EventUpdateManyWithWhereWithoutOnlineDetailsInput } from './event-update-many-with-where-without-online-details.input';
import { EventScalarWhereInput } from './event-scalar-where.input';

@InputType()
export class EventUpdateManyWithoutOnlineDetailsNestedInput {

    @Field(() => [EventCreateWithoutOnlineDetailsInput], {nullable:true})
    @Type(() => EventCreateWithoutOnlineDetailsInput)
    create?: Array<EventCreateWithoutOnlineDetailsInput>;

    @Field(() => [EventCreateOrConnectWithoutOnlineDetailsInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutOnlineDetailsInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutOnlineDetailsInput>;

    @Field(() => [EventUpsertWithWhereUniqueWithoutOnlineDetailsInput], {nullable:true})
    @Type(() => EventUpsertWithWhereUniqueWithoutOnlineDetailsInput)
    upsert?: Array<EventUpsertWithWhereUniqueWithoutOnlineDetailsInput>;

    @Field(() => EventCreateManyOnlineDetailsInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyOnlineDetailsInputEnvelope)
    createMany?: EventCreateManyOnlineDetailsInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;

    @Field(() => [EventUpdateWithWhereUniqueWithoutOnlineDetailsInput], {nullable:true})
    @Type(() => EventUpdateWithWhereUniqueWithoutOnlineDetailsInput)
    update?: Array<EventUpdateWithWhereUniqueWithoutOnlineDetailsInput>;

    @Field(() => [EventUpdateManyWithWhereWithoutOnlineDetailsInput], {nullable:true})
    @Type(() => EventUpdateManyWithWhereWithoutOnlineDetailsInput)
    updateMany?: Array<EventUpdateManyWithWhereWithoutOnlineDetailsInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    @Type(() => EventScalarWhereInput)
    deleteMany?: Array<EventScalarWhereInput>;
}
