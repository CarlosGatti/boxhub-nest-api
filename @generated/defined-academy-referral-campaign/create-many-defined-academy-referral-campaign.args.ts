import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateManyInput } from './defined-academy-referral-campaign-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyReferralCampaignArgs {

    @Field(() => [DefinedAcademyReferralCampaignCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateManyInput)
    data!: Array<DefinedAcademyReferralCampaignCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
