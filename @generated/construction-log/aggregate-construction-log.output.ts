import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ConstructionLogCountAggregate } from './construction-log-count-aggregate.output';
import { ConstructionLogAvgAggregate } from './construction-log-avg-aggregate.output';
import { ConstructionLogSumAggregate } from './construction-log-sum-aggregate.output';
import { ConstructionLogMinAggregate } from './construction-log-min-aggregate.output';
import { ConstructionLogMaxAggregate } from './construction-log-max-aggregate.output';

@ObjectType()
export class AggregateConstructionLog {

    @Field(() => ConstructionLogCountAggregate, {nullable:true})
    _count?: ConstructionLogCountAggregate;

    @Field(() => ConstructionLogAvgAggregate, {nullable:true})
    _avg?: ConstructionLogAvgAggregate;

    @Field(() => ConstructionLogSumAggregate, {nullable:true})
    _sum?: ConstructionLogSumAggregate;

    @Field(() => ConstructionLogMinAggregate, {nullable:true})
    _min?: ConstructionLogMinAggregate;

    @Field(() => ConstructionLogMaxAggregate, {nullable:true})
    _max?: ConstructionLogMaxAggregate;
}
