import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { EventMemberCountOrderByAggregateInput } from './event-member-count-order-by-aggregate.input';
import { EventMemberAvgOrderByAggregateInput } from './event-member-avg-order-by-aggregate.input';
import { EventMemberMaxOrderByAggregateInput } from './event-member-max-order-by-aggregate.input';
import { EventMemberMinOrderByAggregateInput } from './event-member-min-order-by-aggregate.input';
import { EventMemberSumOrderByAggregateInput } from './event-member-sum-order-by-aggregate.input';

@InputType()
export class EventMemberOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eventId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    joinedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    leftAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => EventMemberCountOrderByAggregateInput, {nullable:true})
    _count?: EventMemberCountOrderByAggregateInput;

    @Field(() => EventMemberAvgOrderByAggregateInput, {nullable:true})
    _avg?: EventMemberAvgOrderByAggregateInput;

    @Field(() => EventMemberMaxOrderByAggregateInput, {nullable:true})
    _max?: EventMemberMaxOrderByAggregateInput;

    @Field(() => EventMemberMinOrderByAggregateInput, {nullable:true})
    _min?: EventMemberMinOrderByAggregateInput;

    @Field(() => EventMemberSumOrderByAggregateInput, {nullable:true})
    _sum?: EventMemberSumOrderByAggregateInput;
}
