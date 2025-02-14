import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PillarCountAggregate } from './pillar-count-aggregate.output';
import { PillarAvgAggregate } from './pillar-avg-aggregate.output';
import { PillarSumAggregate } from './pillar-sum-aggregate.output';
import { PillarMinAggregate } from './pillar-min-aggregate.output';
import { PillarMaxAggregate } from './pillar-max-aggregate.output';

@ObjectType()
export class AggregatePillar {

    @Field(() => PillarCountAggregate, {nullable:true})
    _count?: PillarCountAggregate;

    @Field(() => PillarAvgAggregate, {nullable:true})
    _avg?: PillarAvgAggregate;

    @Field(() => PillarSumAggregate, {nullable:true})
    _sum?: PillarSumAggregate;

    @Field(() => PillarMinAggregate, {nullable:true})
    _min?: PillarMinAggregate;

    @Field(() => PillarMaxAggregate, {nullable:true})
    _max?: PillarMaxAggregate;
}
