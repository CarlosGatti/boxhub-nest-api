import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutAddressInput } from './event-update-without-address.input';
import { EventCreateWithoutAddressInput } from './event-create-without-address.input';

@InputType()
export class EventUpsertWithWhereUniqueWithoutAddressInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateWithoutAddressInput, {nullable:false})
    @Type(() => EventUpdateWithoutAddressInput)
    update!: EventUpdateWithoutAddressInput;

    @Field(() => EventCreateWithoutAddressInput, {nullable:false})
    @Type(() => EventCreateWithoutAddressInput)
    create!: EventCreateWithoutAddressInput;
}
