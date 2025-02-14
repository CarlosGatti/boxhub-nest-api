import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTicketUpdateInput } from './event-ticket-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EventTicketWhereUniqueInput } from './event-ticket-where-unique.input';

@ArgsType()
export class UpdateOneEventTicketArgs {

    @Field(() => EventTicketUpdateInput, {nullable:false})
    @Type(() => EventTicketUpdateInput)
    data!: EventTicketUpdateInput;

    @Field(() => EventTicketWhereUniqueInput, {nullable:false})
    @Type(() => EventTicketWhereUniqueInput)
    where!: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;
}
