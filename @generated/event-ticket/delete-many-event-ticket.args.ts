import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTicketWhereInput } from './event-ticket-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyEventTicketArgs {

    @Field(() => EventTicketWhereInput, {nullable:true})
    @Type(() => EventTicketWhereInput)
    where?: EventTicketWhereInput;
}
