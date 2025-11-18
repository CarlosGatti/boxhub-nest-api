import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DiscartItemCountAggregate } from './discart-item-count-aggregate.output';
import { DiscartItemAvgAggregate } from './discart-item-avg-aggregate.output';
import { DiscartItemSumAggregate } from './discart-item-sum-aggregate.output';
import { DiscartItemMinAggregate } from './discart-item-min-aggregate.output';
import { DiscartItemMaxAggregate } from './discart-item-max-aggregate.output';

@ObjectType()
export class AggregateDiscartItem {

    @Field(() => DiscartItemCountAggregate, {nullable:true})
    _count?: DiscartItemCountAggregate;

    @Field(() => DiscartItemAvgAggregate, {nullable:true})
    _avg?: DiscartItemAvgAggregate;

    @Field(() => DiscartItemSumAggregate, {nullable:true})
    _sum?: DiscartItemSumAggregate;

    @Field(() => DiscartItemMinAggregate, {nullable:true})
    _min?: DiscartItemMinAggregate;

    @Field(() => DiscartItemMaxAggregate, {nullable:true})
    _max?: DiscartItemMaxAggregate;
}
