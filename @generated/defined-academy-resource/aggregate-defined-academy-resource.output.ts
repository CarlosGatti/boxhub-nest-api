import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyResourceCountAggregate } from './defined-academy-resource-count-aggregate.output';
import { DefinedAcademyResourceAvgAggregate } from './defined-academy-resource-avg-aggregate.output';
import { DefinedAcademyResourceSumAggregate } from './defined-academy-resource-sum-aggregate.output';
import { DefinedAcademyResourceMinAggregate } from './defined-academy-resource-min-aggregate.output';
import { DefinedAcademyResourceMaxAggregate } from './defined-academy-resource-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyResource {

    @Field(() => DefinedAcademyResourceCountAggregate, {nullable:true})
    _count?: DefinedAcademyResourceCountAggregate;

    @Field(() => DefinedAcademyResourceAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyResourceAvgAggregate;

    @Field(() => DefinedAcademyResourceSumAggregate, {nullable:true})
    _sum?: DefinedAcademyResourceSumAggregate;

    @Field(() => DefinedAcademyResourceMinAggregate, {nullable:true})
    _min?: DefinedAcademyResourceMinAggregate;

    @Field(() => DefinedAcademyResourceMaxAggregate, {nullable:true})
    _max?: DefinedAcademyResourceMaxAggregate;
}
