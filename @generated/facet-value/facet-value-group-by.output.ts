import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FacetValueCountAggregate } from './facet-value-count-aggregate.output';
import { FacetValueAvgAggregate } from './facet-value-avg-aggregate.output';
import { FacetValueSumAggregate } from './facet-value-sum-aggregate.output';
import { FacetValueMinAggregate } from './facet-value-min-aggregate.output';
import { FacetValueMaxAggregate } from './facet-value-max-aggregate.output';

@ObjectType()
export class FacetValueGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:true})
    facetId?: number;

    @Field(() => FacetValueCountAggregate, {nullable:true})
    _count?: FacetValueCountAggregate;

    @Field(() => FacetValueAvgAggregate, {nullable:true})
    _avg?: FacetValueAvgAggregate;

    @Field(() => FacetValueSumAggregate, {nullable:true})
    _sum?: FacetValueSumAggregate;

    @Field(() => FacetValueMinAggregate, {nullable:true})
    _min?: FacetValueMinAggregate;

    @Field(() => FacetValueMaxAggregate, {nullable:true})
    _max?: FacetValueMaxAggregate;
}
