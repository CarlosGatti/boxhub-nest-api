import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutTicketsInput } from './event-create-without-tickets.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutTicketsInput } from './event-create-or-connect-without-tickets.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutTicketsInput {

    @Field(() => EventCreateWithoutTicketsInput, {nullable:true})
    @Type(() => EventCreateWithoutTicketsInput)
    create?: EventCreateWithoutTicketsInput;

    @Field(() => EventCreateOrConnectWithoutTicketsInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutTicketsInput)
    connectOrCreate?: EventCreateOrConnectWithoutTicketsInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;
}
