import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTicketUpdateManyMutationInput } from './event-ticket-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EventTicketWhereInput } from './event-ticket-where.input';

@ArgsType()
export class UpdateManyEventTicketArgs {

    @Field(() => EventTicketUpdateManyMutationInput, {nullable:false})
    @Type(() => EventTicketUpdateManyMutationInput)
    data!: EventTicketUpdateManyMutationInput;

    @Field(() => EventTicketWhereInput, {nullable:true})
    @Type(() => EventTicketWhereInput)
    where?: EventTicketWhereInput;
}
