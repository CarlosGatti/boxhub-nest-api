import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignUpdateWithoutShortLinksInput } from './defined-academy-referral-campaign-update-without-short-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateWithoutShortLinksInput } from './defined-academy-referral-campaign-create-without-short-links.input';
import { DefinedAcademyReferralCampaignWhereInput } from './defined-academy-referral-campaign-where.input';

@InputType()
export class DefinedAcademyReferralCampaignUpsertWithoutShortLinksInput {

    @Field(() => DefinedAcademyReferralCampaignUpdateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignUpdateWithoutShortLinksInput)
    update!: DefinedAcademyReferralCampaignUpdateWithoutShortLinksInput;

    @Field(() => DefinedAcademyReferralCampaignCreateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutShortLinksInput)
    create!: DefinedAcademyReferralCampaignCreateWithoutShortLinksInput;

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereInput)
    where?: DefinedAcademyReferralCampaignWhereInput;
}
