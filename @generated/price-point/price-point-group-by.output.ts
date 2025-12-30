import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PricePointCountAggregate } from './price-point-count-aggregate.output';
import { PricePointAvgAggregate } from './price-point-avg-aggregate.output';
import { PricePointSumAggregate } from './price-point-sum-aggregate.output';
import { PricePointMinAggregate } from './price-point-min-aggregate.output';
import { PricePointMaxAggregate } from './price-point-max-aggregate.output';

@ObjectType()
export class PricePointGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    assetId!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Date, {nullable:false})
    asOf!: Date | string;

    @Field(() => String, {nullable:false})
    source!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => PricePointCountAggregate, {nullable:true})
    _count?: PricePointCountAggregate;

    @Field(() => PricePointAvgAggregate, {nullable:true})
    _avg?: PricePointAvgAggregate;

    @Field(() => PricePointSumAggregate, {nullable:true})
    _sum?: PricePointSumAggregate;

    @Field(() => PricePointMinAggregate, {nullable:true})
    _min?: PricePointMinAggregate;

    @Field(() => PricePointMaxAggregate, {nullable:true})
    _max?: PricePointMaxAggregate;
}
