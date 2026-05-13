import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProposalStatus } from '../prisma/defined-proposal-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedProposalCountAggregate } from './defined-proposal-count-aggregate.output';
import { DefinedProposalAvgAggregate } from './defined-proposal-avg-aggregate.output';
import { DefinedProposalSumAggregate } from './defined-proposal-sum-aggregate.output';
import { DefinedProposalMinAggregate } from './defined-proposal-min-aggregate.output';
import { DefinedProposalMaxAggregate } from './defined-proposal-max-aggregate.output';

@ObjectType()
export class DefinedProposalGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    subtitle?: string;

    @Field(() => DefinedProposalStatus, {nullable:false})
    status!: keyof typeof DefinedProposalStatus;

    @Field(() => String, {nullable:true})
    summary?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    contentJson?: any;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => String, {nullable:true})
    shareToken?: string;

    @Field(() => Date, {nullable:true})
    shareTokenCreatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    shareTokenExpiresAt?: Date | string;

    @Field(() => Date, {nullable:true})
    shareRevokedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    sentAt?: Date | string;

    @Field(() => Date, {nullable:true})
    viewedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    approvedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    declinedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    createdById?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
