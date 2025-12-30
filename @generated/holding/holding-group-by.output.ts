import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { HoldingCountAggregate } from './holding-count-aggregate.output';
import { HoldingAvgAggregate } from './holding-avg-aggregate.output';
import { HoldingSumAggregate } from './holding-sum-aggregate.output';
import { HoldingMinAggregate } from './holding-min-aggregate.output';
import { HoldingMaxAggregate } from './holding-max-aggregate.output';

@ObjectType()
export class HoldingGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    portfolioId!: number;

    @Field(() => Int, {nullable:false})
    assetId!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    quantity!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    averageCost!: Decimal;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => HoldingCountAggregate, {nullable:true})
    _count?: HoldingCountAggregate;

    @Field(() => HoldingAvgAggregate, {nullable:true})
    _avg?: HoldingAvgAggregate;

    @Field(() => HoldingSumAggregate, {nullable:true})
    _sum?: HoldingSumAggregate;

    @Field(() => HoldingMinAggregate, {nullable:true})
    _min?: HoldingMinAggregate;

    @Field(() => HoldingMaxAggregate, {nullable:true})
    _max?: HoldingMaxAggregate;
}
