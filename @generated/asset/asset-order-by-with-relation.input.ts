import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { HoldingOrderByRelationAggregateInput } from '../holding/holding-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { PricePointOrderByRelationAggregateInput } from '../price-point/price-point-order-by-relation-aggregate.input';
import { TransactionOrderByRelationAggregateInput } from '../transaction/transaction-order-by-relation-aggregate.input';

@InputType()
export class AssetOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ticker?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    exchange?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HoldingOrderByRelationAggregateInput, {nullable:true})
    @Type(() => HoldingOrderByRelationAggregateInput)
    holdings?: HoldingOrderByRelationAggregateInput;

    @Field(() => PricePointOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PricePointOrderByRelationAggregateInput)
    pricePoints?: PricePointOrderByRelationAggregateInput;

    @Field(() => TransactionOrderByRelationAggregateInput, {nullable:true})
    @Type(() => TransactionOrderByRelationAggregateInput)
    transactions?: TransactionOrderByRelationAggregateInput;
}
