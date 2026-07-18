import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DefinedAcademyShortLinkEventCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    shortLinkId!: number;

    @Field(() => Date, {nullable:true})
    occurredAt?: Date | string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => String, {nullable:true})
    anonymousSessionHash?: string;

    @Field(() => String, {nullable:true})
    referrer?: string;

    @Field(() => String, {nullable:true})
    userAgentSummary?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    campaignMetadata?: any;
}
