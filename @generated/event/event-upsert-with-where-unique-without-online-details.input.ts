import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutOnlineDetailsInput } from './event-update-without-online-details.input';
import { EventCreateWithoutOnlineDetailsInput } from './event-create-without-online-details.input';

@InputType()
export class EventUpsertWithWhereUniqueWithoutOnlineDetailsInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateWithoutOnlineDetailsInput, {nullable:false})
    @Type(() => EventUpdateWithoutOnlineDetailsInput)
    update!: EventUpdateWithoutOnlineDetailsInput;

    @Field(() => EventCreateWithoutOnlineDetailsInput, {nullable:false})
    @Type(() => EventCreateWithoutOnlineDetailsInput)
    create!: EventCreateWithoutOnlineDetailsInput;
}
