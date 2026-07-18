import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedAcademyShortLinkEventCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    shortLinkId?: true;

    @Field(() => Boolean, {nullable:true})
    occurredAt?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    anonymousSessionHash?: true;

    @Field(() => Boolean, {nullable:true})
    referrer?: true;

    @Field(() => Boolean, {nullable:true})
    userAgentSummary?: true;

    @Field(() => Boolean, {nullable:true})
    campaignMetadata?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
