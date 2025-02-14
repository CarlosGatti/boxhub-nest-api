import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { EventUpdateWithoutTicketsInput } from './event-update-without-tickets.input';

@InputType()
export class EventUpdateToOneWithWhereWithoutTicketsInput {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => EventUpdateWithoutTicketsInput, {nullable:false})
    @Type(() => EventUpdateWithoutTicketsInput)
    data!: EventUpdateWithoutTicketsInput;
}
