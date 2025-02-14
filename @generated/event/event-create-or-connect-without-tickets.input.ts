import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutTicketsInput } from './event-create-without-tickets.input';

@InputType()
export class EventCreateOrConnectWithoutTicketsInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    @Type(() => EventWhereUniqueInput)
    where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventCreateWithoutTicketsInput, {nullable:false})
    @Type(() => EventCreateWithoutTicketsInput)
    create!: EventCreateWithoutTicketsInput;
}
