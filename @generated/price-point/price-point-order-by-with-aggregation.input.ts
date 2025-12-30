import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PricePointCountOrderByAggregateInput } from './price-point-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { PricePointAvgOrderByAggregateInput } from './price-point-avg-order-by-aggregate.input';
import { PricePointMaxOrderByAggregateInput } from './price-point-max-order-by-aggregate.input';
import { PricePointMinOrderByAggregateInput } from './price-point-min-order-by-aggregate.input';
import { PricePointSumOrderByAggregateInput } from './price-point-sum-order-by-aggregate.input';

@InputType()
export class PricePointOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assetId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    asOf?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    source?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => PricePointCountOrderByAggregateInput, {nullable:true})
    @Type(() => PricePointCountOrderByAggregateInput)
    _count?: PricePointCountOrderByAggregateInput;

    @Field(() => PricePointAvgOrderByAggregateInput, {nullable:true})
    @Type(() => PricePointAvgOrderByAggregateInput)
    _avg?: PricePointAvgOrderByAggregateInput;

    @Field(() => PricePointMaxOrderByAggregateInput, {nullable:true})
    @Type(() => PricePointMaxOrderByAggregateInput)
    _max?: PricePointMaxOrderByAggregateInput;

    @Field(() => PricePointMinOrderByAggregateInput, {nullable:true})
    @Type(() => PricePointMinOrderByAggregateInput)
    _min?: PricePointMinOrderByAggregateInput;

    @Field(() => PricePointSumOrderByAggregateInput, {nullable:true})
    @Type(() => PricePointSumOrderByAggregateInput)
    _sum?: PricePointSumOrderByAggregateInput;
}
