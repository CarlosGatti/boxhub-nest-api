import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTicketCreateInput } from './event-ticket-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEventTicketArgs {

    @Field(() => EventTicketCreateInput, {nullable:false})
    @Type(() => EventTicketCreateInput)
    data!: EventTicketCreateInput;
}
