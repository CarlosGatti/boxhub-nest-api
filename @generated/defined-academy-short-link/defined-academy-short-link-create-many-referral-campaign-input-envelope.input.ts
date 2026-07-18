import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateManyReferralCampaignInput } from './defined-academy-short-link-create-many-referral-campaign.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyShortLinkCreateManyReferralCampaignInputEnvelope {

    @Field(() => [DefinedAcademyShortLinkCreateManyReferralCampaignInput], {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateManyReferralCampaignInput)
    data!: Array<DefinedAcademyShortLinkCreateManyReferralCampaignInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
