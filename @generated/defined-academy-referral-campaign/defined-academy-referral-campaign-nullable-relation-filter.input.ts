import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignWhereInput } from './defined-academy-referral-campaign-where.input';

@InputType()
export class DefinedAcademyReferralCampaignNullableRelationFilter {

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    is?: DefinedAcademyReferralCampaignWhereInput;

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    isNot?: DefinedAcademyReferralCampaignWhereInput;
}
