import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProposalStatus } from '../prisma/defined-proposal-status.enum';

@ObjectType()
export class DefinedProposalMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    clientId?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    subtitle?: string;

    @Field(() => DefinedProposalStatus, {nullable:true})
    status?: keyof typeof DefinedProposalStatus;

    @Field(() => String, {nullable:true})
    summary?: string;

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

    @Field(() => Int, {nullable:true})
    createdById?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
