import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventTicketCountAggregate } from './event-ticket-count-aggregate.output';
import { EventTicketAvgAggregate } from './event-ticket-avg-aggregate.output';
import { EventTicketSumAggregate } from './event-ticket-sum-aggregate.output';
import { EventTicketMinAggregate } from './event-ticket-min-aggregate.output';
import { EventTicketMaxAggregate } from './event-ticket-max-aggregate.output';

@ObjectType()
export class AggregateEventTicket {

    @Field(() => EventTicketCountAggregate, {nullable:true})
    _count?: EventTicketCountAggregate;

    @Field(() => EventTicketAvgAggregate, {nullable:true})
    _avg?: EventTicketAvgAggregate;

    @Field(() => EventTicketSumAggregate, {nullable:true})
    _sum?: EventTicketSumAggregate;

    @Field(() => EventTicketMinAggregate, {nullable:true})
    _min?: EventTicketMinAggregate;

    @Field(() => EventTicketMaxAggregate, {nullable:true})
    _max?: EventTicketMaxAggregate;
}
