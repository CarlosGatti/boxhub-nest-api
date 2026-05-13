import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedProposalCountAggregate } from './defined-proposal-count-aggregate.output';
import { DefinedProposalAvgAggregate } from './defined-proposal-avg-aggregate.output';
import { DefinedProposalSumAggregate } from './defined-proposal-sum-aggregate.output';
import { DefinedProposalMinAggregate } from './defined-proposal-min-aggregate.output';
import { DefinedProposalMaxAggregate } from './defined-proposal-max-aggregate.output';

@ObjectType()
export class AggregateDefinedProposal {

    @Field(() => DefinedProposalCountAggregate, {nullable:true})
    _count?: DefinedProposalCountAggregate;

    @Field(() => DefinedProposalAvgAggregate, {nullable:true})
    _avg?: DefinedProposalAvgAggregate;

    @Field(() => DefinedProposalSumAggregate, {nullable:true})
    _sum?: DefinedProposalSumAggregate;

    @Field(() => DefinedProposalMinAggregate, {nullable:true})
    _min?: DefinedProposalMinAggregate;

    @Field(() => DefinedProposalMaxAggregate, {nullable:true})
    _max?: DefinedProposalMaxAggregate;
}
