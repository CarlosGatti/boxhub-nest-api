import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignUpdateWithoutResourceInput } from './defined-academy-referral-campaign-update-without-resource.input';
import { DefinedAcademyReferralCampaignCreateWithoutResourceInput } from './defined-academy-referral-campaign-create-without-resource.input';

@InputType()
export class DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutResourceInput {

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => DefinedAcademyReferralCampaignUpdateWithoutResourceInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignUpdateWithoutResourceInput)
    update!: DefinedAcademyReferralCampaignUpdateWithoutResourceInput;

    @Field(() => DefinedAcademyReferralCampaignCreateWithoutResourceInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutResourceInput)
    create!: DefinedAcademyReferralCampaignCreateWithoutResourceInput;
}
