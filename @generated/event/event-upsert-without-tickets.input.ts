import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventUpdateWithoutTicketsInput } from './event-update-without-tickets.input';
import { Type } from 'class-transformer';
import { EventCreateWithoutTicketsInput } from './event-create-without-tickets.input';
import { EventWhereInput } from './event-where.input';

@InputType()
export class EventUpsertWithoutTicketsInput {

    @Field(() => EventUpdateWithoutTicketsInput, {nullable:false})
    @Type(() => EventUpdateWithoutTicketsInput)
    update!: EventUpdateWithoutTicketsInput;

    @Field(() => EventCreateWithoutTicketsInput, {nullable:false})
    @Type(() => EventCreateWithoutTicketsInput)
    create!: EventCreateWithoutTicketsInput;

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;
}
