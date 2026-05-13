import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProposalSectionType } from '../prisma/defined-proposal-section-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedProposalSectionCountAggregate } from './defined-proposal-section-count-aggregate.output';
import { DefinedProposalSectionAvgAggregate } from './defined-proposal-section-avg-aggregate.output';
import { DefinedProposalSectionSumAggregate } from './defined-proposal-section-sum-aggregate.output';
import { DefinedProposalSectionMinAggregate } from './defined-proposal-section-min-aggregate.output';
import { DefinedProposalSectionMaxAggregate } from './defined-proposal-section-max-aggregate.output';

@ObjectType()
export class DefinedProposalSectionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    proposalId!: number;

    @Field(() => DefinedProposalSectionType, {nullable:false})
    type!: keyof typeof DefinedProposalSectionType;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    body?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    contentJson?: any;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
