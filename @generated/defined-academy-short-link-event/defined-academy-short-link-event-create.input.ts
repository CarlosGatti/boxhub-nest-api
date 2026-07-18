import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedAcademyShortLinkCreateNestedOneWithoutEventsInput } from '../defined-academy-short-link/defined-academy-short-link-create-nested-one-without-events.input';

@InputType()
export class DefinedAcademyShortLinkEventCreateInput {

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

    @Field(() => DefinedAcademyShortLinkCreateNestedOneWithoutEventsInput, {nullable:false})
    shortLink!: DefinedAcademyShortLinkCreateNestedOneWithoutEventsInput;
}
