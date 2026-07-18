import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyShortLinkEventMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    shortLinkId?: number;

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
}
