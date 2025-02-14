import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutTicketsInput } from './event-create-without-tickets.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutTicketsInput } from './event-create-or-connect-without-tickets.input';
import { EventUpsertWithoutTicketsInput } from './event-upsert-without-tickets.input';
import { Prisma } from '@prisma/client';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateToOneWithWhereWithoutTicketsInput } from './event-update-to-one-with-where-without-tickets.input';

@InputType()
export class EventUpdateOneRequiredWithoutTicketsNestedInput {

    @Field(() => EventCreateWithoutTicketsInput, {nullable:true})
    @Type(() => EventCreateWithoutTicketsInput)
    create?: EventCreateWithoutTicketsInput;

    @Field(() => EventCreateOrConnectWithoutTicketsInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutTicketsInput)
    connectOrCreate?: EventCreateOrConnectWithoutTicketsInput;

    @Field(() => EventUpsertWithoutTicketsInput, {nullable:true})
    @Type(() => EventUpsertWithoutTicketsInput)
    upsert?: EventUpsertWithoutTicketsInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>;

    @Field(() => EventUpdateToOneWithWhereWithoutTicketsInput, {nullable:true})
    @Type(() => EventUpdateToOneWithWhereWithoutTicketsInput)
    update?: EventUpdateToOneWithWhereWithoutTicketsInput;
}
