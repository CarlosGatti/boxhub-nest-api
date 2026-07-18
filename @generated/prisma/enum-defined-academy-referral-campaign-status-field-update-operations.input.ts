import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignStatus } from './defined-academy-referral-campaign-status.enum';

@InputType()
export class EnumDefinedAcademyReferralCampaignStatusFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyReferralCampaignStatus, {nullable:true})
    set?: keyof typeof DefinedAcademyReferralCampaignStatus;
}
