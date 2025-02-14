import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTicketWhereInput } from './event-ticket-where.input';

@InputType()
export class EventTicketListRelationFilter {

    @Field(() => EventTicketWhereInput, {nullable:true})
    every?: EventTicketWhereInput;

    @Field(() => EventTicketWhereInput, {nullable:true})
    some?: EventTicketWhereInput;

    @Field(() => EventTicketWhereInput, {nullable:true})
    none?: EventTicketWhereInput;
}
