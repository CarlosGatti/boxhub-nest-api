import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedProposalSectionCountAggregate } from './defined-proposal-section-count-aggregate.output';
import { DefinedProposalSectionAvgAggregate } from './defined-proposal-section-avg-aggregate.output';
import { DefinedProposalSectionSumAggregate } from './defined-proposal-section-sum-aggregate.output';
import { DefinedProposalSectionMinAggregate } from './defined-proposal-section-min-aggregate.output';
import { DefinedProposalSectionMaxAggregate } from './defined-proposal-section-max-aggregate.output';

@ObjectType()
export class AggregateDefinedProposalSection {

    @Field(() => DefinedProposalSectionCountAggregate, {nullable:true})
    _count?: DefinedProposalSectionCountAggregate;

    @Field(() => DefinedProposalSectionAvgAggregate, {nullable:true})
    _avg?: DefinedProposalSectionAvgAggregate;

    @Field(() => DefinedProposalSectionSumAggregate, {nullable:true})
    _sum?: DefinedProposalSectionSumAggregate;

    @Field(() => DefinedProposalSectionMinAggregate, {nullable:true})
    _min?: DefinedProposalSectionMinAggregate;

    @Field(() => DefinedProposalSectionMaxAggregate, {nullable:true})
    _max?: DefinedProposalSectionMaxAggregate;
}
