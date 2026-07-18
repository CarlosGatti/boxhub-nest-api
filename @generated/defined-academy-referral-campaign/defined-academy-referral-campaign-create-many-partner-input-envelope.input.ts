import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateManyPartnerInput } from './defined-academy-referral-campaign-create-many-partner.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyReferralCampaignCreateManyPartnerInputEnvelope {

    @Field(() => [DefinedAcademyReferralCampaignCreateManyPartnerInput], {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateManyPartnerInput)
    data!: Array<DefinedAcademyReferralCampaignCreateManyPartnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
