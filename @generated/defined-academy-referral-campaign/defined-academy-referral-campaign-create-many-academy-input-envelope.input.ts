import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateManyAcademyInput } from './defined-academy-referral-campaign-create-many-academy.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyReferralCampaignCreateManyAcademyInputEnvelope {

    @Field(() => [DefinedAcademyReferralCampaignCreateManyAcademyInput], {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateManyAcademyInput)
    data!: Array<DefinedAcademyReferralCampaignCreateManyAcademyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
