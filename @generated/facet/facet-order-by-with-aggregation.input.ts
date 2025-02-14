import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FacetCountOrderByAggregateInput } from './facet-count-order-by-aggregate.input';
import { FacetAvgOrderByAggregateInput } from './facet-avg-order-by-aggregate.input';
import { FacetMaxOrderByAggregateInput } from './facet-max-order-by-aggregate.input';
import { FacetMinOrderByAggregateInput } from './facet-min-order-by-aggregate.input';
import { FacetSumOrderByAggregateInput } from './facet-sum-order-by-aggregate.input';

@InputType()
export class FacetOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    communityId?: SortOrderInput;

    @Field(() => FacetCountOrderByAggregateInput, {nullable:true})
    _count?: FacetCountOrderByAggregateInput;

    @Field(() => FacetAvgOrderByAggregateInput, {nullable:true})
    _avg?: FacetAvgOrderByAggregateInput;

    @Field(() => FacetMaxOrderByAggregateInput, {nullable:true})
    _max?: FacetMaxOrderByAggregateInput;

    @Field(() => FacetMinOrderByAggregateInput, {nullable:true})
    _min?: FacetMinOrderByAggregateInput;

    @Field(() => FacetSumOrderByAggregateInput, {nullable:true})
    _sum?: FacetSumOrderByAggregateInput;
}
