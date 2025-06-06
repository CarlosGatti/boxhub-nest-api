import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { LogCountOrderByAggregateInput } from './log-count-order-by-aggregate.input';
import { LogAvgOrderByAggregateInput } from './log-avg-order-by-aggregate.input';
import { LogMaxOrderByAggregateInput } from './log-max-order-by-aggregate.input';
import { LogMinOrderByAggregateInput } from './log-min-order-by-aggregate.input';
import { LogSumOrderByAggregateInput } from './log-sum-order-by-aggregate.input';

@InputType()
export class LogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    details?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    route?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ipAddress?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => LogCountOrderByAggregateInput, {nullable:true})
    _count?: LogCountOrderByAggregateInput;

    @Field(() => LogAvgOrderByAggregateInput, {nullable:true})
    _avg?: LogAvgOrderByAggregateInput;

    @Field(() => LogMaxOrderByAggregateInput, {nullable:true})
    _max?: LogMaxOrderByAggregateInput;

    @Field(() => LogMinOrderByAggregateInput, {nullable:true})
    _min?: LogMinOrderByAggregateInput;

    @Field(() => LogSumOrderByAggregateInput, {nullable:true})
    _sum?: LogSumOrderByAggregateInput;
}
