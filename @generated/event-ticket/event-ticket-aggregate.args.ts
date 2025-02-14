import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTicketWhereInput } from './event-ticket-where.input';
import { Type } from 'class-transformer';
import { EventTicketOrderByWithRelationInput } from './event-ticket-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EventTicketWhereUniqueInput } from './event-ticket-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventTicketCountAggregateInput } from './event-ticket-count-aggregate.input';
import { EventTicketAvgAggregateInput } from './event-ticket-avg-aggregate.input';
import { EventTicketSumAggregateInput } from './event-ticket-sum-aggregate.input';
import { EventTicketMinAggregateInput } from './event-ticket-min-aggregate.input';
import { EventTicketMaxAggregateInput } from './event-ticket-max-aggregate.input';

@ArgsType()
export class EventTicketAggregateArgs {

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

    @Field(() => EventTicketCountAggregateInput, {nullable:true})
    _count?: EventTicketCountAggregateInput;

    @Field(() => EventTicketAvgAggregateInput, {nullable:true})
    _avg?: EventTicketAvgAggregateInput;

    @Field(() => EventTicketSumAggregateInput, {nullable:true})
    _sum?: EventTicketSumAggregateInput;

    @Field(() => EventTicketMinAggregateInput, {nullable:true})
    _min?: EventTicketMinAggregateInput;

    @Field(() => EventTicketMaxAggregateInput, {nullable:true})
    _max?: EventTicketMaxAggregateInput;
}
