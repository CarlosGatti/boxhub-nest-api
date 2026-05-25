import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedBrandingProjectCountAggregate } from './defined-branding-project-count-aggregate.output';
import { DefinedBrandingProjectAvgAggregate } from './defined-branding-project-avg-aggregate.output';
import { DefinedBrandingProjectSumAggregate } from './defined-branding-project-sum-aggregate.output';
import { DefinedBrandingProjectMinAggregate } from './defined-branding-project-min-aggregate.output';
import { DefinedBrandingProjectMaxAggregate } from './defined-branding-project-max-aggregate.output';

@ObjectType()
export class AggregateDefinedBrandingProject {

    @Field(() => DefinedBrandingProjectCountAggregate, {nullable:true})
    _count?: DefinedBrandingProjectCountAggregate;

    @Field(() => DefinedBrandingProjectAvgAggregate, {nullable:true})
    _avg?: DefinedBrandingProjectAvgAggregate;

    @Field(() => DefinedBrandingProjectSumAggregate, {nullable:true})
    _sum?: DefinedBrandingProjectSumAggregate;

    @Field(() => DefinedBrandingProjectMinAggregate, {nullable:true})
    _min?: DefinedBrandingProjectMinAggregate;

    @Field(() => DefinedBrandingProjectMaxAggregate, {nullable:true})
    _max?: DefinedBrandingProjectMaxAggregate;
}
