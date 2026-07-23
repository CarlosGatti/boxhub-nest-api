import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyCount {

    @Field(() => Int, {nullable:false})
    courses?: number;

    @Field(() => Int, {nullable:false})
    resources?: number;

    @Field(() => Int, {nullable:false})
    partners?: number;

    @Field(() => Int, {nullable:false})
    partnerCategories?: number;

    @Field(() => Int, {nullable:false})
    shortLinks?: number;

    @Field(() => Int, {nullable:false})
    referralCampaigns?: number;

    @Field(() => Int, {nullable:false})
    referrals?: number;

    @Field(() => Int, {nullable:false})
    careerProfiles?: number;
}
