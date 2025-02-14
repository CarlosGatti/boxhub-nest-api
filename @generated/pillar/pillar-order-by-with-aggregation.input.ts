import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PillarCountOrderByAggregateInput } from './pillar-count-order-by-aggregate.input';
import { PillarAvgOrderByAggregateInput } from './pillar-avg-order-by-aggregate.input';
import { PillarMaxOrderByAggregateInput } from './pillar-max-order-by-aggregate.input';
import { PillarMinOrderByAggregateInput } from './pillar-min-order-by-aggregate.input';
import { PillarSumOrderByAggregateInput } from './pillar-sum-order-by-aggregate.input';

@InputType()
export class PillarOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PillarCountOrderByAggregateInput, {nullable:true})
    _count?: PillarCountOrderByAggregateInput;

    @Field(() => PillarAvgOrderByAggregateInput, {nullable:true})
    _avg?: PillarAvgOrderByAggregateInput;

    @Field(() => PillarMaxOrderByAggregateInput, {nullable:true})
    _max?: PillarMaxOrderByAggregateInput;

    @Field(() => PillarMinOrderByAggregateInput, {nullable:true})
    _min?: PillarMinOrderByAggregateInput;

    @Field(() => PillarSumOrderByAggregateInput, {nullable:true})
    _sum?: PillarSumOrderByAggregateInput;
}
