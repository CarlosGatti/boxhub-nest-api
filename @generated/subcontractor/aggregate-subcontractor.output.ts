import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubcontractorCountAggregate } from './subcontractor-count-aggregate.output';
import { SubcontractorAvgAggregate } from './subcontractor-avg-aggregate.output';
import { SubcontractorSumAggregate } from './subcontractor-sum-aggregate.output';
import { SubcontractorMinAggregate } from './subcontractor-min-aggregate.output';
import { SubcontractorMaxAggregate } from './subcontractor-max-aggregate.output';

@ObjectType()
export class AggregateSubcontractor {

    @Field(() => SubcontractorCountAggregate, {nullable:true})
    _count?: SubcontractorCountAggregate;

    @Field(() => SubcontractorAvgAggregate, {nullable:true})
    _avg?: SubcontractorAvgAggregate;

    @Field(() => SubcontractorSumAggregate, {nullable:true})
    _sum?: SubcontractorSumAggregate;

    @Field(() => SubcontractorMinAggregate, {nullable:true})
    _min?: SubcontractorMinAggregate;

    @Field(() => SubcontractorMaxAggregate, {nullable:true})
    _max?: SubcontractorMaxAggregate;
}
