import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateManyCampaignInput } from './defined-academy-referral-create-many-campaign.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyReferralCreateManyCampaignInputEnvelope {

    @Field(() => [DefinedAcademyReferralCreateManyCampaignInput], {nullable:false})
    @Type(() => DefinedAcademyReferralCreateManyCampaignInput)
    data!: Array<DefinedAcademyReferralCreateManyCampaignInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
