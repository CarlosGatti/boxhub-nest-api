import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignWhereInput } from './defined-academy-referral-campaign-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignUpdateWithoutReferralsInput } from './defined-academy-referral-campaign-update-without-referrals.input';

@InputType()
export class DefinedAcademyReferralCampaignUpdateToOneWithWhereWithoutReferralsInput {

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereInput)
    where?: DefinedAcademyReferralCampaignWhereInput;

    @Field(() => DefinedAcademyReferralCampaignUpdateWithoutReferralsInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignUpdateWithoutReferralsInput)
    data!: DefinedAcademyReferralCampaignUpdateWithoutReferralsInput;
}
