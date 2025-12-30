import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { HoldingCountOrderByAggregateInput } from './holding-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { HoldingAvgOrderByAggregateInput } from './holding-avg-order-by-aggregate.input';
import { HoldingMaxOrderByAggregateInput } from './holding-max-order-by-aggregate.input';
import { HoldingMinOrderByAggregateInput } from './holding-min-order-by-aggregate.input';
import { HoldingSumOrderByAggregateInput } from './holding-sum-order-by-aggregate.input';

@InputType()
export class HoldingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    portfolioId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assetId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    averageCost?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HoldingCountOrderByAggregateInput, {nullable:true})
    @Type(() => HoldingCountOrderByAggregateInput)
    _count?: HoldingCountOrderByAggregateInput;

    @Field(() => HoldingAvgOrderByAggregateInput, {nullable:true})
    @Type(() => HoldingAvgOrderByAggregateInput)
    _avg?: HoldingAvgOrderByAggregateInput;

    @Field(() => HoldingMaxOrderByAggregateInput, {nullable:true})
    @Type(() => HoldingMaxOrderByAggregateInput)
    _max?: HoldingMaxOrderByAggregateInput;

    @Field(() => HoldingMinOrderByAggregateInput, {nullable:true})
    @Type(() => HoldingMinOrderByAggregateInput)
    _min?: HoldingMinOrderByAggregateInput;

    @Field(() => HoldingSumOrderByAggregateInput, {nullable:true})
    @Type(() => HoldingSumOrderByAggregateInput)
    _sum?: HoldingSumOrderByAggregateInput;
}
