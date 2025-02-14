import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventAddressCreateWithoutEventInput } from './event-address-create-without-event.input';
import { Type } from 'class-transformer';
import { EventAddressCreateOrConnectWithoutEventInput } from './event-address-create-or-connect-without-event.input';
import { EventAddressUpsertWithoutEventInput } from './event-address-upsert-without-event.input';
import { EventAddressWhereInput } from './event-address-where.input';
import { Prisma } from '@prisma/client';
import { EventAddressWhereUniqueInput } from './event-address-where-unique.input';
import { EventAddressUpdateToOneWithWhereWithoutEventInput } from './event-address-update-to-one-with-where-without-event.input';

@InputType()
export class EventAddressUpdateOneWithoutEventNestedInput {

    @Field(() => EventAddressCreateWithoutEventInput, {nullable:true})
    @Type(() => EventAddressCreateWithoutEventInput)
    create?: EventAddressCreateWithoutEventInput;

    @Field(() => EventAddressCreateOrConnectWithoutEventInput, {nullable:true})
    @Type(() => EventAddressCreateOrConnectWithoutEventInput)
    connectOrCreate?: EventAddressCreateOrConnectWithoutEventInput;

    @Field(() => EventAddressUpsertWithoutEventInput, {nullable:true})
    @Type(() => EventAddressUpsertWithoutEventInput)
    upsert?: EventAddressUpsertWithoutEventInput;

    @Field(() => EventAddressWhereInput, {nullable:true})
    @Type(() => EventAddressWhereInput)
    disconnect?: EventAddressWhereInput;

    @Field(() => EventAddressWhereInput, {nullable:true})
    @Type(() => EventAddressWhereInput)
    delete?: EventAddressWhereInput;

    @Field(() => EventAddressWhereUniqueInput, {nullable:true})
    @Type(() => EventAddressWhereUniqueInput)
    connect?: Prisma.AtLeast<EventAddressWhereUniqueInput, 'id'>;

    @Field(() => EventAddressUpdateToOneWithWhereWithoutEventInput, {nullable:true})
    @Type(() => EventAddressUpdateToOneWithWhereWithoutEventInput)
    update?: EventAddressUpdateToOneWithWhereWithoutEventInput;
}
