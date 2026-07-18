import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedAcademyShortLink } from '../defined-academy-short-link/defined-academy-short-link.model';

@ObjectType()
export class DefinedAcademyShortLinkEvent {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    shortLinkId!: number;

    @Field(() => Date, {nullable:false})
    occurredAt!: Date;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => String, {nullable:true})
    anonymousSessionHash!: string | null;

    @Field(() => String, {nullable:true})
    referrer!: string | null;

    @Field(() => String, {nullable:true})
    userAgentSummary!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    campaignMetadata!: any | null;

    @Field(() => DefinedAcademyShortLink, {nullable:false})
    shortLink?: DefinedAcademyShortLink;
}
