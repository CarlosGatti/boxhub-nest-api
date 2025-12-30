import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PortfolioCountOrderByAggregateInput } from './portfolio-count-order-by-aggregate.input';
import { PortfolioAvgOrderByAggregateInput } from './portfolio-avg-order-by-aggregate.input';
import { PortfolioMaxOrderByAggregateInput } from './portfolio-max-order-by-aggregate.input';
import { PortfolioMinOrderByAggregateInput } from './portfolio-min-order-by-aggregate.input';
import { PortfolioSumOrderByAggregateInput } from './portfolio-sum-order-by-aggregate.input';

@InputType()
export class PortfolioOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    baseCurrency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PortfolioCountOrderByAggregateInput, {nullable:true})
    _count?: PortfolioCountOrderByAggregateInput;

    @Field(() => PortfolioAvgOrderByAggregateInput, {nullable:true})
    _avg?: PortfolioAvgOrderByAggregateInput;

    @Field(() => PortfolioMaxOrderByAggregateInput, {nullable:true})
    _max?: PortfolioMaxOrderByAggregateInput;

    @Field(() => PortfolioMinOrderByAggregateInput, {nullable:true})
    _min?: PortfolioMinOrderByAggregateInput;

    @Field(() => PortfolioSumOrderByAggregateInput, {nullable:true})
    _sum?: PortfolioSumOrderByAggregateInput;
}
