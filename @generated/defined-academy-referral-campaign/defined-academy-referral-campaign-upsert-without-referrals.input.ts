import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignUpdateWithoutReferralsInput } from './defined-academy-referral-campaign-update-without-referrals.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateWithoutReferralsInput } from './defined-academy-referral-campaign-create-without-referrals.input';
import { DefinedAcademyReferralCampaignWhereInput } from './defined-academy-referral-campaign-where.input';

@InputType()
export class DefinedAcademyReferralCampaignUpsertWithoutReferralsInput {

    @Field(() => DefinedAcademyReferralCampaignUpdateWithoutReferralsInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignUpdateWithoutReferralsInput)
    update!: DefinedAcademyReferralCampaignUpdateWithoutReferralsInput;

    @Field(() => DefinedAcademyReferralCampaignCreateWithoutReferralsInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutReferralsInput)
    create!: DefinedAcademyReferralCampaignCreateWithoutReferralsInput;

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereInput)
    where?: DefinedAcademyReferralCampaignWhereInput;
}
