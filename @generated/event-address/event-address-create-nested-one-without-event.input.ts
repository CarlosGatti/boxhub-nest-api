import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventAddressCreateWithoutEventInput } from './event-address-create-without-event.input';
import { Type } from 'class-transformer';
import { EventAddressCreateOrConnectWithoutEventInput } from './event-address-create-or-connect-without-event.input';
import { Prisma } from '@prisma/client';
import { EventAddressWhereUniqueInput } from './event-address-where-unique.input';

@InputType()
export class EventAddressCreateNestedOneWithoutEventInput {

    @Field(() => EventAddressCreateWithoutEventInput, {nullable:true})
    @Type(() => EventAddressCreateWithoutEventInput)
    create?: EventAddressCreateWithoutEventInput;

    @Field(() => EventAddressCreateOrConnectWithoutEventInput, {nullable:true})
    @Type(() => EventAddressCreateOrConnectWithoutEventInput)
    connectOrCreate?: EventAddressCreateOrConnectWithoutEventInput;

    @Field(() => EventAddressWhereUniqueInput, {nullable:true})
    @Type(() => EventAddressWhereUniqueInput)
    connect?: Prisma.AtLeast<EventAddressWhereUniqueInput, 'id'>;
}
