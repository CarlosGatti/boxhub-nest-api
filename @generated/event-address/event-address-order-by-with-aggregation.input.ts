import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventAddressCountOrderByAggregateInput } from './event-address-count-order-by-aggregate.input';
import { EventAddressAvgOrderByAggregateInput } from './event-address-avg-order-by-aggregate.input';
import { EventAddressMaxOrderByAggregateInput } from './event-address-max-order-by-aggregate.input';
import { EventAddressMinOrderByAggregateInput } from './event-address-min-order-by-aggregate.input';
import { EventAddressSumOrderByAggregateInput } from './event-address-sum-order-by-aggregate.input';

@InputType()
export class EventAddressOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    zipCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => EventAddressCountOrderByAggregateInput, {nullable:true})
    _count?: EventAddressCountOrderByAggregateInput;

    @Field(() => EventAddressAvgOrderByAggregateInput, {nullable:true})
    _avg?: EventAddressAvgOrderByAggregateInput;

    @Field(() => EventAddressMaxOrderByAggregateInput, {nullable:true})
    _max?: EventAddressMaxOrderByAggregateInput;

    @Field(() => EventAddressMinOrderByAggregateInput, {nullable:true})
    _min?: EventAddressMinOrderByAggregateInput;

    @Field(() => EventAddressSumOrderByAggregateInput, {nullable:true})
    _sum?: EventAddressSumOrderByAggregateInput;
}
