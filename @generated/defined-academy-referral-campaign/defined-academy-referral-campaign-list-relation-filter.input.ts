import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignWhereInput } from './defined-academy-referral-campaign-where.input';

@InputType()
export class DefinedAcademyReferralCampaignListRelationFilter {

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    every?: DefinedAcademyReferralCampaignWhereInput;

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    some?: DefinedAcademyReferralCampaignWhereInput;

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    none?: DefinedAcademyReferralCampaignWhereInput;
}
