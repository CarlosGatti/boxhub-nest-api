import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutAddressInput } from './event-update-without-address.input';

@InputType()
export class EventUpdateWithWhereUniqueWithoutAddressInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateWithoutAddressInput, {nullable:false})
    @Type(() => EventUpdateWithoutAddressInput)
    data!: EventUpdateWithoutAddressInput;
}
