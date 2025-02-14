import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventAddressWhereUniqueInput } from './event-address-where-unique.input';
import { Type } from 'class-transformer';
import { EventAddressCreateWithoutEventInput } from './event-address-create-without-event.input';

@InputType()
export class EventAddressCreateOrConnectWithoutEventInput {

    @Field(() => EventAddressWhereUniqueInput, {nullable:false})
    @Type(() => EventAddressWhereUniqueInput)
    where!: Prisma.AtLeast<EventAddressWhereUniqueInput, 'id'>;

    @Field(() => EventAddressCreateWithoutEventInput, {nullable:false})
    @Type(() => EventAddressCreateWithoutEventInput)
    create!: EventAddressCreateWithoutEventInput;
}
