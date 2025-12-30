import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { TransactionCountOrderByAggregateInput } from './transaction-count-order-by-aggregate.input';
import { TransactionAvgOrderByAggregateInput } from './transaction-avg-order-by-aggregate.input';
import { TransactionMaxOrderByAggregateInput } from './transaction-max-order-by-aggregate.input';
import { TransactionMinOrderByAggregateInput } from './transaction-min-order-by-aggregate.input';
import { TransactionSumOrderByAggregateInput } from './transaction-sum-order-by-aggregate.input';

@InputType()
export class TransactionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    portfolioId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assetId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    fees?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    executedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => TransactionCountOrderByAggregateInput, {nullable:true})
    @Type(() => TransactionCountOrderByAggregateInput)
    _count?: TransactionCountOrderByAggregateInput;

    @Field(() => TransactionAvgOrderByAggregateInput, {nullable:true})
    @Type(() => TransactionAvgOrderByAggregateInput)
    _avg?: TransactionAvgOrderByAggregateInput;

    @Field(() => TransactionMaxOrderByAggregateInput, {nullable:true})
    @Type(() => TransactionMaxOrderByAggregateInput)
    _max?: TransactionMaxOrderByAggregateInput;

    @Field(() => TransactionMinOrderByAggregateInput, {nullable:true})
    @Type(() => TransactionMinOrderByAggregateInput)
    _min?: TransactionMinOrderByAggregateInput;

    @Field(() => TransactionSumOrderByAggregateInput, {nullable:true})
    @Type(() => TransactionSumOrderByAggregateInput)
    _sum?: TransactionSumOrderByAggregateInput;
}
