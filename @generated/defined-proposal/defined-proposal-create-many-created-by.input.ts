import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProposalStatus } from '../prisma/defined-proposal-status.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DefinedProposalCreateManyCreatedByInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    subtitle?: string;

    @Field(() => DefinedProposalStatus, {nullable:true})
    status?: keyof typeof DefinedProposalStatus;

    @Field(() => String, {nullable:true})
    summary?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    contentJson?: any;

    @Field(() => String, {nullable:true})
    currency?: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
