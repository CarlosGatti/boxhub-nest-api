import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyReferralCampaignCount {

    @Field(() => Int, {nullable:false})
    shortLinks?: number;

    @Field(() => Int, {nullable:false})
    referrals?: number;
}
