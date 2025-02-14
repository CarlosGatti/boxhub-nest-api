import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutAddressInput } from './event-create-without-address.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutAddressInput } from './event-create-or-connect-without-address.input';
import { EventUpsertWithWhereUniqueWithoutAddressInput } from './event-upsert-with-where-unique-without-address.input';
import { EventCreateManyAddressInputEnvelope } from './event-create-many-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithWhereUniqueWithoutAddressInput } from './event-update-with-where-unique-without-address.input';
import { EventUpdateManyWithWhereWithoutAddressInput } from './event-update-many-with-where-without-address.input';
import { EventScalarWhereInput } from './event-scalar-where.input';

@InputType()
export class EventUncheckedUpdateManyWithoutAddressNestedInput {

    @Field(() => [EventCreateWithoutAddressInput], {nullable:true})
    @Type(() => EventCreateWithoutAddressInput)
    create?: Array<EventCreateWithoutAddressInput>;

    @Field(() => [EventCreateOrConnectWithoutAddressInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutAddressInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutAddressInput>;

    @Field(() => [EventUpsertWithWhereUniqueWithoutAddressInput], {nullable:true})
    @Type(() => EventUpsertWithWhereUniqueWithoutAddressInput)
    upsert?: Array<EventUpsertWithWhereUniqueWithoutAddressInput>;

    @Field(() => EventCreateManyAddressInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyAddressInputEnvelope)
    createMany?: EventCreateManyAddressInputEnvelope;

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

    @Field(() => [EventUpdateWithWhereUniqueWithoutAddressInput], {nullable:true})
    @Type(() => EventUpdateWithWhereUniqueWithoutAddressInput)
    update?: Array<EventUpdateWithWhereUniqueWithoutAddressInput>;

    @Field(() => [EventUpdateManyWithWhereWithoutAddressInput], {nullable:true})
    @Type(() => EventUpdateManyWithWhereWithoutAddressInput)
    updateMany?: Array<EventUpdateManyWithWhereWithoutAddressInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    @Type(() => EventScalarWhereInput)
    deleteMany?: Array<EventScalarWhereInput>;
}
