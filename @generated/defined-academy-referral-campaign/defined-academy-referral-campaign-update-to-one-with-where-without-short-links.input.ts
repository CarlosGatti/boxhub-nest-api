import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignWhereInput } from './defined-academy-referral-campaign-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignUpdateWithoutShortLinksInput } from './defined-academy-referral-campaign-update-without-short-links.input';

@InputType()
export class DefinedAcademyReferralCampaignUpdateToOneWithWhereWithoutShortLinksInput {

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereInput)
    where?: DefinedAcademyReferralCampaignWhereInput;

    @Field(() => DefinedAcademyReferralCampaignUpdateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignUpdateWithoutShortLinksInput)
    data!: DefinedAcademyReferralCampaignUpdateWithoutShortLinksInput;
}
