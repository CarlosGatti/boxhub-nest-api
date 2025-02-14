import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTicketCreateManyInput } from './event-ticket-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEventTicketArgs {

    @Field(() => [EventTicketCreateManyInput], {nullable:false})
    @Type(() => EventTicketCreateManyInput)
    data!: Array<EventTicketCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
