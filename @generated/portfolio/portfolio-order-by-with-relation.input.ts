import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { HoldingOrderByRelationAggregateInput } from '../holding/holding-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { TransactionOrderByRelationAggregateInput } from '../transaction/transaction-order-by-relation-aggregate.input';

@InputType()
export class PortfolioOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => HoldingOrderByRelationAggregateInput, {nullable:true})
    @Type(() => HoldingOrderByRelationAggregateInput)
    holdings?: HoldingOrderByRelationAggregateInput;

    @Field(() => TransactionOrderByRelationAggregateInput, {nullable:true})
    @Type(() => TransactionOrderByRelationAggregateInput)
    transactions?: TransactionOrderByRelationAggregateInput;
}
