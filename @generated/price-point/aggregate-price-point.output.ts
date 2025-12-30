import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PricePointCountAggregate } from './price-point-count-aggregate.output';
import { PricePointAvgAggregate } from './price-point-avg-aggregate.output';
import { PricePointSumAggregate } from './price-point-sum-aggregate.output';
import { PricePointMinAggregate } from './price-point-min-aggregate.output';
import { PricePointMaxAggregate } from './price-point-max-aggregate.output';

@ObjectType()
export class AggregatePricePoint {

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
