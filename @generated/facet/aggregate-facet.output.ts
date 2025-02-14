import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FacetCountAggregate } from './facet-count-aggregate.output';
import { FacetAvgAggregate } from './facet-avg-aggregate.output';
import { FacetSumAggregate } from './facet-sum-aggregate.output';
import { FacetMinAggregate } from './facet-min-aggregate.output';
import { FacetMaxAggregate } from './facet-max-aggregate.output';

@ObjectType()
export class AggregateFacet {

    @Field(() => FacetCountAggregate, {nullable:true})
    _count?: FacetCountAggregate;

    @Field(() => FacetAvgAggregate, {nullable:true})
    _avg?: FacetAvgAggregate;

    @Field(() => FacetSumAggregate, {nullable:true})
    _sum?: FacetSumAggregate;

    @Field(() => FacetMinAggregate, {nullable:true})
    _min?: FacetMinAggregate;

    @Field(() => FacetMaxAggregate, {nullable:true})
    _max?: FacetMaxAggregate;
}
