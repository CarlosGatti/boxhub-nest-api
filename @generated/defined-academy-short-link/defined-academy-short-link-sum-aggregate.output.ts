import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyShortLinkSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    academyId?: number;

    @Field(() => Int, {nullable:true})
    resourceId?: number;

    @Field(() => Int, {nullable:true})
    courseId?: number;

    @Field(() => Int, {nullable:true})
    partnerId?: number;

    @Field(() => Int, {nullable:true})
    referralCampaignId?: number;

    @Field(() => Int, {nullable:true})
    visitCount?: number;

    @Field(() => Int, {nullable:true})
    createdById?: number;
}
