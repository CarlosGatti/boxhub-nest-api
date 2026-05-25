import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedBrandingSectionCountAggregate } from './defined-branding-section-count-aggregate.output';
import { DefinedBrandingSectionAvgAggregate } from './defined-branding-section-avg-aggregate.output';
import { DefinedBrandingSectionSumAggregate } from './defined-branding-section-sum-aggregate.output';
import { DefinedBrandingSectionMinAggregate } from './defined-branding-section-min-aggregate.output';
import { DefinedBrandingSectionMaxAggregate } from './defined-branding-section-max-aggregate.output';

@ObjectType()
export class AggregateDefinedBrandingSection {

    @Field(() => DefinedBrandingSectionCountAggregate, {nullable:true})
    _count?: DefinedBrandingSectionCountAggregate;

    @Field(() => DefinedBrandingSectionAvgAggregate, {nullable:true})
    _avg?: DefinedBrandingSectionAvgAggregate;

    @Field(() => DefinedBrandingSectionSumAggregate, {nullable:true})
    _sum?: DefinedBrandingSectionSumAggregate;

    @Field(() => DefinedBrandingSectionMinAggregate, {nullable:true})
    _min?: DefinedBrandingSectionMinAggregate;

    @Field(() => DefinedBrandingSectionMaxAggregate, {nullable:true})
    _max?: DefinedBrandingSectionMaxAggregate;
}
