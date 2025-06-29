import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ConstructionLogCountOrderByAggregateInput } from './construction-log-count-order-by-aggregate.input';
import { ConstructionLogAvgOrderByAggregateInput } from './construction-log-avg-order-by-aggregate.input';
import { ConstructionLogMaxOrderByAggregateInput } from './construction-log-max-order-by-aggregate.input';
import { ConstructionLogMinOrderByAggregateInput } from './construction-log-min-order-by-aggregate.input';
import { ConstructionLogSumOrderByAggregateInput } from './construction-log-sum-order-by-aggregate.input';

@InputType()
export class ConstructionLogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    images?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ConstructionLogCountOrderByAggregateInput, {nullable:true})
    _count?: ConstructionLogCountOrderByAggregateInput;

    @Field(() => ConstructionLogAvgOrderByAggregateInput, {nullable:true})
    _avg?: ConstructionLogAvgOrderByAggregateInput;

    @Field(() => ConstructionLogMaxOrderByAggregateInput, {nullable:true})
    _max?: ConstructionLogMaxOrderByAggregateInput;

    @Field(() => ConstructionLogMinOrderByAggregateInput, {nullable:true})
    _min?: ConstructionLogMinOrderByAggregateInput;

    @Field(() => ConstructionLogSumOrderByAggregateInput, {nullable:true})
    _sum?: ConstructionLogSumOrderByAggregateInput;
}
