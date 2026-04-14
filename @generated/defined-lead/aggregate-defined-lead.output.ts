import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedLeadCountAggregate } from './defined-lead-count-aggregate.output';
import { DefinedLeadAvgAggregate } from './defined-lead-avg-aggregate.output';
import { DefinedLeadSumAggregate } from './defined-lead-sum-aggregate.output';
import { DefinedLeadMinAggregate } from './defined-lead-min-aggregate.output';
import { DefinedLeadMaxAggregate } from './defined-lead-max-aggregate.output';

@ObjectType()
export class AggregateDefinedLead {

    @Field(() => DefinedLeadCountAggregate, {nullable:true})
    _count?: DefinedLeadCountAggregate;

    @Field(() => DefinedLeadAvgAggregate, {nullable:true})
    _avg?: DefinedLeadAvgAggregate;

    @Field(() => DefinedLeadSumAggregate, {nullable:true})
    _sum?: DefinedLeadSumAggregate;

    @Field(() => DefinedLeadMinAggregate, {nullable:true})
    _min?: DefinedLeadMinAggregate;

    @Field(() => DefinedLeadMaxAggregate, {nullable:true})
    _max?: DefinedLeadMaxAggregate;
}
