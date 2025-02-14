import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContainerCountAggregate } from './container-count-aggregate.output';
import { ContainerAvgAggregate } from './container-avg-aggregate.output';
import { ContainerSumAggregate } from './container-sum-aggregate.output';
import { ContainerMinAggregate } from './container-min-aggregate.output';
import { ContainerMaxAggregate } from './container-max-aggregate.output';

@ObjectType()
export class AggregateContainer {

    @Field(() => ContainerCountAggregate, {nullable:true})
    _count?: ContainerCountAggregate;

    @Field(() => ContainerAvgAggregate, {nullable:true})
    _avg?: ContainerAvgAggregate;

    @Field(() => ContainerSumAggregate, {nullable:true})
    _sum?: ContainerSumAggregate;

    @Field(() => ContainerMinAggregate, {nullable:true})
    _min?: ContainerMinAggregate;

    @Field(() => ContainerMaxAggregate, {nullable:true})
    _max?: ContainerMaxAggregate;
}
