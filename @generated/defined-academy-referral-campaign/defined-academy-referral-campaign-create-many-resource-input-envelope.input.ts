import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateManyResourceInput } from './defined-academy-referral-campaign-create-many-resource.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyReferralCampaignCreateManyResourceInputEnvelope {

    @Field(() => [DefinedAcademyReferralCampaignCreateManyResourceInput], {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateManyResourceInput)
    data!: Array<DefinedAcademyReferralCampaignCreateManyResourceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
