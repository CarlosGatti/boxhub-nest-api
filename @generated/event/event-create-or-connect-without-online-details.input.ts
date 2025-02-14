import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutOnlineDetailsInput } from './event-create-without-online-details.input';

@InputType()
export class EventCreateOrConnectWithoutOnlineDetailsInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutOnlineDetailsInput, {nullable:false})
    @Type(() => EventCreateWithoutOnlineDetailsInput)
    create!: EventCreateWithoutOnlineDetailsInput;
}
