import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { EventOnlineDetailCountOrderByAggregateInput } from './event-online-detail-count-order-by-aggregate.input';
import { EventOnlineDetailAvgOrderByAggregateInput } from './event-online-detail-avg-order-by-aggregate.input';
import { EventOnlineDetailMaxOrderByAggregateInput } from './event-online-detail-max-order-by-aggregate.input';
import { EventOnlineDetailMinOrderByAggregateInput } from './event-online-detail-min-order-by-aggregate.input';
import { EventOnlineDetailSumOrderByAggregateInput } from './event-online-detail-sum-order-by-aggregate.input';

@InputType()
export class EventOnlineDetailOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    platform?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    joinCode?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    joinDetails?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => EventOnlineDetailCountOrderByAggregateInput, {nullable:true})
    _count?: EventOnlineDetailCountOrderByAggregateInput;

    @Field(() => EventOnlineDetailAvgOrderByAggregateInput, {nullable:true})
    _avg?: EventOnlineDetailAvgOrderByAggregateInput;

    @Field(() => EventOnlineDetailMaxOrderByAggregateInput, {nullable:true})
    _max?: EventOnlineDetailMaxOrderByAggregateInput;

    @Field(() => EventOnlineDetailMinOrderByAggregateInput, {nullable:true})
    _min?: EventOnlineDetailMinOrderByAggregateInput;

    @Field(() => EventOnlineDetailSumOrderByAggregateInput, {nullable:true})
    _sum?: EventOnlineDetailSumOrderByAggregateInput;
}
