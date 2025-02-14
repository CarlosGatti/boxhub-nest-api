import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTicketWhereInput } from './event-ticket-where.input';
import { Type } from 'class-transformer';
import { EventTicketOrderByWithRelationInput } from './event-ticket-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventTicketWhereUniqueInput } from './event-ticket-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventTicketScalarFieldEnum } from './event-ticket-scalar-field.enum';

@ArgsType()
export class FindFirstEventTicketArgs {

    @Field(() => EventTicketWhereInput, {nullable:true})
    @Type(() => EventTicketWhereInput)
    where?: EventTicketWhereInput;

    @Field(() => [EventTicketOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventTicketOrderByWithRelationInput>;

    @Field(() => EventTicketWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EventTicketWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EventTicketScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EventTicketScalarFieldEnum>;
}
