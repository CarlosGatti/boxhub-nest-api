import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionType } from '../prisma/transaction-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { TransactionCountAggregate } from './transaction-count-aggregate.output';
import { TransactionAvgAggregate } from './transaction-avg-aggregate.output';
import { TransactionSumAggregate } from './transaction-sum-aggregate.output';
import { TransactionMinAggregate } from './transaction-min-aggregate.output';
import { TransactionMaxAggregate } from './transaction-max-aggregate.output';

@ObjectType()
export class TransactionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    portfolioId!: number;

    @Field(() => Int, {nullable:false})
    assetId!: number;

    @Field(() => TransactionType, {nullable:false})
    type!: keyof typeof TransactionType;

    @Field(() => GraphQLDecimal, {nullable:false})
    quantity!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    fees?: Decimal;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:false})
    executedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => TransactionCountAggregate, {nullable:true})
    _count?: TransactionCountAggregate;

    @Field(() => TransactionAvgAggregate, {nullable:true})
    _avg?: TransactionAvgAggregate;

    @Field(() => TransactionSumAggregate, {nullable:true})
    _sum?: TransactionSumAggregate;

    @Field(() => TransactionMinAggregate, {nullable:true})
    _min?: TransactionMinAggregate;

    @Field(() => TransactionMaxAggregate, {nullable:true})
    _max?: TransactionMaxAggregate;
}
