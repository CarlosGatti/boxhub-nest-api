import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProposalSectionType } from '../prisma/defined-proposal-section-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DefinedProposalSectionUncheckedCreateWithoutProposalInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => DefinedProposalSectionType, {nullable:true})
    type?: keyof typeof DefinedProposalSectionType;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    body?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    contentJson?: any;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
