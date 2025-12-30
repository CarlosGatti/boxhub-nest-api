import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HoldingCountAggregate } from './holding-count-aggregate.output';
import { HoldingAvgAggregate } from './holding-avg-aggregate.output';
import { HoldingSumAggregate } from './holding-sum-aggregate.output';
import { HoldingMinAggregate } from './holding-min-aggregate.output';
import { HoldingMaxAggregate } from './holding-max-aggregate.output';

@ObjectType()
export class AggregateHolding {

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
