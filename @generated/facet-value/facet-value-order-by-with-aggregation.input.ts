import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FacetValueCountOrderByAggregateInput } from './facet-value-count-order-by-aggregate.input';
import { FacetValueAvgOrderByAggregateInput } from './facet-value-avg-order-by-aggregate.input';
import { FacetValueMaxOrderByAggregateInput } from './facet-value-max-order-by-aggregate.input';
import { FacetValueMinOrderByAggregateInput } from './facet-value-min-order-by-aggregate.input';
import { FacetValueSumOrderByAggregateInput } from './facet-value-sum-order-by-aggregate.input';

@InputType()
export class FacetValueOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    facetId?: SortOrderInput;

    @Field(() => FacetValueCountOrderByAggregateInput, {nullable:true})
    _count?: FacetValueCountOrderByAggregateInput;

    @Field(() => FacetValueAvgOrderByAggregateInput, {nullable:true})
    _avg?: FacetValueAvgOrderByAggregateInput;

    @Field(() => FacetValueMaxOrderByAggregateInput, {nullable:true})
    _max?: FacetValueMaxOrderByAggregateInput;

    @Field(() => FacetValueMinOrderByAggregateInput, {nullable:true})
    _min?: FacetValueMinOrderByAggregateInput;

    @Field(() => FacetValueSumOrderByAggregateInput, {nullable:true})
    _sum?: FacetValueSumOrderByAggregateInput;
}
