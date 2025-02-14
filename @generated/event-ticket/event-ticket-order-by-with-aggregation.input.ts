import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { EventTicketCountOrderByAggregateInput } from './event-ticket-count-order-by-aggregate.input';
import { EventTicketAvgOrderByAggregateInput } from './event-ticket-avg-order-by-aggregate.input';
import { EventTicketMaxOrderByAggregateInput } from './event-ticket-max-order-by-aggregate.input';
import { EventTicketMinOrderByAggregateInput } from './event-ticket-min-order-by-aggregate.input';
import { EventTicketSumOrderByAggregateInput } from './event-ticket-sum-order-by-aggregate.input';

@InputType()
export class EventTicketOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    beeped?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expire?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userEmail?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    beepedTime?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    valid?: keyof typeof SortOrder;

    @Field(() => EventTicketCountOrderByAggregateInput, {nullable:true})
    _count?: EventTicketCountOrderByAggregateInput;

    @Field(() => EventTicketAvgOrderByAggregateInput, {nullable:true})
    _avg?: EventTicketAvgOrderByAggregateInput;

    @Field(() => EventTicketMaxOrderByAggregateInput, {nullable:true})
    _max?: EventTicketMaxOrderByAggregateInput;

    @Field(() => EventTicketMinOrderByAggregateInput, {nullable:true})
    _min?: EventTicketMinOrderByAggregateInput;

    @Field(() => EventTicketSumOrderByAggregateInput, {nullable:true})
    _sum?: EventTicketSumOrderByAggregateInput;
}
