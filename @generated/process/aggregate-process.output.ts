import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProcessCountAggregate } from './process-count-aggregate.output';
import { ProcessAvgAggregate } from './process-avg-aggregate.output';
import { ProcessSumAggregate } from './process-sum-aggregate.output';
import { ProcessMinAggregate } from './process-min-aggregate.output';
import { ProcessMaxAggregate } from './process-max-aggregate.output';

@ObjectType()
export class AggregateProcess {

    @Field(() => ProcessCountAggregate, {nullable:true})
    _count?: ProcessCountAggregate;

    @Field(() => ProcessAvgAggregate, {nullable:true})
    _avg?: ProcessAvgAggregate;

    @Field(() => ProcessSumAggregate, {nullable:true})
    _sum?: ProcessSumAggregate;

    @Field(() => ProcessMinAggregate, {nullable:true})
    _min?: ProcessMinAggregate;

    @Field(() => ProcessMaxAggregate, {nullable:true})
    _max?: ProcessMaxAggregate;
}
