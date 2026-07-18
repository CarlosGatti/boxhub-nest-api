import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateInput } from './defined-academy-referral-campaign-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyReferralCampaignArgs {

    @Field(() => DefinedAcademyReferralCampaignCreateInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateInput)
    data!: DefinedAcademyReferralCampaignCreateInput;
}
