import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutAddressInput } from './event-create-without-address.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutAddressInput } from './event-create-or-connect-without-address.input';
import { EventCreateManyAddressInputEnvelope } from './event-create-many-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventUncheckedCreateNestedManyWithoutAddressInput {

    @Field(() => [EventCreateWithoutAddressInput], {nullable:true})
    @Type(() => EventCreateWithoutAddressInput)
    create?: Array<EventCreateWithoutAddressInput>;

    @Field(() => [EventCreateOrConnectWithoutAddressInput], {nullable:true})
    @Type(() => EventCreateOrConnectWithoutAddressInput)
    connectOrCreate?: Array<EventCreateOrConnectWithoutAddressInput>;

    @Field(() => EventCreateManyAddressInputEnvelope, {nullable:true})
    @Type(() => EventCreateManyAddressInputEnvelope)
    createMany?: EventCreateManyAddressInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>;
}
