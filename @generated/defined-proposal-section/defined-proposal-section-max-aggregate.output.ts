import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProposalSectionType } from '../prisma/defined-proposal-section-type.enum';

@ObjectType()
export class DefinedProposalSectionMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    proposalId?: number;

    @Field(() => DefinedProposalSectionType, {nullable:true})
    type?: keyof typeof DefinedProposalSectionType;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    body?: string;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
