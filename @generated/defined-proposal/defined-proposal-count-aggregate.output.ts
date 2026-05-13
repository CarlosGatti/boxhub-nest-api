import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedProposalCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    subtitle!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    summary!: number;

    @Field(() => Int, {nullable:false})
    contentJson!: number;

    @Field(() => Int, {nullable:false})
    currency!: number;

    @Field(() => Int, {nullable:false})
    shareToken!: number;

    @Field(() => Int, {nullable:false})
    shareTokenCreatedAt!: number;

    @Field(() => Int, {nullable:false})
    shareTokenExpiresAt!: number;

    @Field(() => Int, {nullable:false})
    shareRevokedAt!: number;

    @Field(() => Int, {nullable:false})
    sentAt!: number;

    @Field(() => Int, {nullable:false})
    viewedAt!: number;

    @Field(() => Int, {nullable:false})
    approvedAt!: number;

    @Field(() => Int, {nullable:false})
    declinedAt!: number;

    @Field(() => Int, {nullable:false})
    createdById!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
