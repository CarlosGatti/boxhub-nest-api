import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProposalStatus } from '../prisma/defined-proposal-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedClient } from '../defined-client/defined-client.model';
import { DefinedProject } from '../defined-project/defined-project.model';
import { User } from '../user/user.model';
import { DefinedProposalSection } from '../defined-proposal-section/defined-proposal-section.model';
import { DefinedProposalPricingOption } from '../defined-proposal-pricing-option/defined-proposal-pricing-option.model';
import { DefinedProposalCount } from './defined-proposal-count.output';

@ObjectType()
export class DefinedProposal {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => Int, {nullable:true})
    projectId!: number | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    subtitle!: string | null;

    @Field(() => DefinedProposalStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof DefinedProposalStatus;

    @Field(() => String, {nullable:true})
    summary!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    contentJson!: any | null;

    @Field(() => String, {nullable:false,defaultValue:'USD'})
    currency!: string;

    @Field(() => String, {nullable:true})
    shareToken!: string | null;

    @Field(() => Date, {nullable:true})
    shareTokenCreatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    shareTokenExpiresAt!: Date | null;

    @Field(() => Date, {nullable:true})
    shareRevokedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    sentAt!: Date | null;

    @Field(() => Date, {nullable:true})
    viewedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    approvedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    declinedAt!: Date | null;

    @Field(() => Int, {nullable:true})
    createdById!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedClient, {nullable:false})
    client?: DefinedClient;

    @Field(() => DefinedProject, {nullable:true})
    project?: DefinedProject | null;

    @Field(() => User, {nullable:true})
    createdBy?: User | null;

    @Field(() => [DefinedProposalSection], {nullable:true})
    sections?: Array<DefinedProposalSection>;

    @Field(() => [DefinedProposalPricingOption], {nullable:true})
    pricingOptions?: Array<DefinedProposalPricingOption>;

    @Field(() => DefinedProposalCount, {nullable:false})
    _count?: DefinedProposalCount;
}
