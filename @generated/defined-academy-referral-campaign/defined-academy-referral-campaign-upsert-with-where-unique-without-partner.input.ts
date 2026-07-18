import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignUpdateWithoutPartnerInput } from './defined-academy-referral-campaign-update-without-partner.input';
import { DefinedAcademyReferralCampaignCreateWithoutPartnerInput } from './defined-academy-referral-campaign-create-without-partner.input';

@InputType()
export class DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutPartnerInput {

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => DefinedAcademyReferralCampaignUpdateWithoutPartnerInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignUpdateWithoutPartnerInput)
    update!: DefinedAcademyReferralCampaignUpdateWithoutPartnerInput;

    @Field(() => DefinedAcademyReferralCampaignCreateWithoutPartnerInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutPartnerInput)
    create!: DefinedAcademyReferralCampaignCreateWithoutPartnerInput;
}
