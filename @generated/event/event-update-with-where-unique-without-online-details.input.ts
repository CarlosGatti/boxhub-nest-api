import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutOnlineDetailsInput } from './event-update-without-online-details.input';

@InputType()
export class EventUpdateWithWhereUniqueWithoutOnlineDetailsInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateWithoutOnlineDetailsInput, {nullable:false})
    @Type(() => EventUpdateWithoutOnlineDetailsInput)
    data!: EventUpdateWithoutOnlineDetailsInput;
}
