import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCountAggregate } from './defined-academy-short-link-count-aggregate.output';
import { DefinedAcademyShortLinkAvgAggregate } from './defined-academy-short-link-avg-aggregate.output';
import { DefinedAcademyShortLinkSumAggregate } from './defined-academy-short-link-sum-aggregate.output';
import { DefinedAcademyShortLinkMinAggregate } from './defined-academy-short-link-min-aggregate.output';
import { DefinedAcademyShortLinkMaxAggregate } from './defined-academy-short-link-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyShortLink {

    @Field(() => DefinedAcademyShortLinkCountAggregate, {nullable:true})
    _count?: DefinedAcademyShortLinkCountAggregate;

    @Field(() => DefinedAcademyShortLinkAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyShortLinkAvgAggregate;

    @Field(() => DefinedAcademyShortLinkSumAggregate, {nullable:true})
    _sum?: DefinedAcademyShortLinkSumAggregate;

    @Field(() => DefinedAcademyShortLinkMinAggregate, {nullable:true})
    _min?: DefinedAcademyShortLinkMinAggregate;

    @Field(() => DefinedAcademyShortLinkMaxAggregate, {nullable:true})
    _max?: DefinedAcademyShortLinkMaxAggregate;
}
