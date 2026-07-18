import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedAcademyShortLinkEventCountAggregate } from './defined-academy-short-link-event-count-aggregate.output';
import { DefinedAcademyShortLinkEventAvgAggregate } from './defined-academy-short-link-event-avg-aggregate.output';
import { DefinedAcademyShortLinkEventSumAggregate } from './defined-academy-short-link-event-sum-aggregate.output';
import { DefinedAcademyShortLinkEventMinAggregate } from './defined-academy-short-link-event-min-aggregate.output';
import { DefinedAcademyShortLinkEventMaxAggregate } from './defined-academy-short-link-event-max-aggregate.output';

@ObjectType()
export class DefinedAcademyShortLinkEventGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    shortLinkId!: number;

    @Field(() => Date, {nullable:false})
    occurredAt!: Date | string;

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

    @Field(() => DefinedAcademyShortLinkEventCountAggregate, {nullable:true})
    _count?: DefinedAcademyShortLinkEventCountAggregate;

    @Field(() => DefinedAcademyShortLinkEventAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyShortLinkEventAvgAggregate;

    @Field(() => DefinedAcademyShortLinkEventSumAggregate, {nullable:true})
    _sum?: DefinedAcademyShortLinkEventSumAggregate;

    @Field(() => DefinedAcademyShortLinkEventMinAggregate, {nullable:true})
    _min?: DefinedAcademyShortLinkEventMinAggregate;

    @Field(() => DefinedAcademyShortLinkEventMaxAggregate, {nullable:true})
    _max?: DefinedAcademyShortLinkEventMaxAggregate;
}
