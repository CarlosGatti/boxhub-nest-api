import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProposalSectionType } from '../prisma/defined-proposal-section-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedProposal } from '../defined-proposal/defined-proposal.model';

@ObjectType()
export class DefinedProposalSection {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    proposalId!: number;

    @Field(() => DefinedProposalSectionType, {nullable:false,defaultValue:'TEXT'})
    type!: keyof typeof DefinedProposalSectionType;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    body!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    contentJson!: any | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    order!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedProposal, {nullable:false})
    proposal?: DefinedProposal;
}
