import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignStatus } from './defined-academy-referral-campaign-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyReferralCampaignStatusFilter } from './nested-enum-defined-academy-referral-campaign-status-filter.input';

@InputType()
export class NestedEnumDefinedAcademyReferralCampaignStatusWithAggregatesFilter {

    @Field(() => DefinedAcademyReferralCampaignStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyReferralCampaignStatus;

    @Field(() => [DefinedAcademyReferralCampaignStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyReferralCampaignStatus>;

    @Field(() => [DefinedAcademyReferralCampaignStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyReferralCampaignStatus>;

    @Field(() => NestedEnumDefinedAcademyReferralCampaignStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyReferralCampaignStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyReferralCampaignStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyReferralCampaignStatusFilter;

    @Field(() => NestedEnumDefinedAcademyReferralCampaignStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyReferralCampaignStatusFilter;
}
