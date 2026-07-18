import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignStatus } from './defined-academy-referral-campaign-status.enum';

@InputType()
export class NestedEnumDefinedAcademyReferralCampaignStatusFilter {

    @Field(() => DefinedAcademyReferralCampaignStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyReferralCampaignStatus;

    @Field(() => [DefinedAcademyReferralCampaignStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyReferralCampaignStatus>;

    @Field(() => [DefinedAcademyReferralCampaignStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyReferralCampaignStatus>;

    @Field(() => NestedEnumDefinedAcademyReferralCampaignStatusFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyReferralCampaignStatusFilter;
}
