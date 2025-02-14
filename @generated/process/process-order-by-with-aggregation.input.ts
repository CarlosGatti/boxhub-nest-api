import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProcessCountOrderByAggregateInput } from './process-count-order-by-aggregate.input';
import { ProcessAvgOrderByAggregateInput } from './process-avg-order-by-aggregate.input';
import { ProcessMaxOrderByAggregateInput } from './process-max-order-by-aggregate.input';
import { ProcessMinOrderByAggregateInput } from './process-min-order-by-aggregate.input';
import { ProcessSumOrderByAggregateInput } from './process-sum-order-by-aggregate.input';

@InputType()
export class ProcessOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    pillarId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ProcessCountOrderByAggregateInput, {nullable:true})
    _count?: ProcessCountOrderByAggregateInput;

    @Field(() => ProcessAvgOrderByAggregateInput, {nullable:true})
    _avg?: ProcessAvgOrderByAggregateInput;

    @Field(() => ProcessMaxOrderByAggregateInput, {nullable:true})
    _max?: ProcessMaxOrderByAggregateInput;

    @Field(() => ProcessMinOrderByAggregateInput, {nullable:true})
    _min?: ProcessMinOrderByAggregateInput;

    @Field(() => ProcessSumOrderByAggregateInput, {nullable:true})
    _sum?: ProcessSumOrderByAggregateInput;
}
