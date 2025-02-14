import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EventTicketWhereUniqueInput } from './event-ticket-where-unique.input';
import { Type } from 'class-transformer';
import { EventTicketCreateInput } from './event-ticket-create.input';
import { EventTicketUpdateInput } from './event-ticket-update.input';

@ArgsType()
export class UpsertOneEventTicketArgs {

    @Field(() => EventTicketWhereUniqueInput, {nullable:false})
    @Type(() => EventTicketWhereUniqueInput)
    where!: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;

    @Field(() => EventTicketCreateInput, {nullable:false})
    @Type(() => EventTicketCreateInput)
    create!: EventTicketCreateInput;

    @Field(() => EventTicketUpdateInput, {nullable:false})
    @Type(() => EventTicketUpdateInput)
    update!: EventTicketUpdateInput;
}
