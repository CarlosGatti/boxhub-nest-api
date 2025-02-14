import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTicketScalarWhereInput } from './event-ticket-scalar-where.input';
import { Type } from 'class-transformer';
import { EventTicketUpdateManyMutationInput } from './event-ticket-update-many-mutation.input';

@InputType()
export class EventTicketUpdateManyWithWhereWithoutEventInput {

    @Field(() => EventTicketScalarWhereInput, {nullable:false})
    @Type(() => EventTicketScalarWhereInput)
    where!: EventTicketScalarWhereInput;

    @Field(() => EventTicketUpdateManyMutationInput, {nullable:false})
    @Type(() => EventTicketUpdateManyMutationInput)
    data!: EventTicketUpdateManyMutationInput;
}
