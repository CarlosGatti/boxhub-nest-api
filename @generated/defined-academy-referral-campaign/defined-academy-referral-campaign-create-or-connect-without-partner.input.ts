import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateWithoutPartnerInput } from './defined-academy-referral-campaign-create-without-partner.input';

@InputType()
export class DefinedAcademyReferralCampaignCreateOrConnectWithoutPartnerInput {

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => DefinedAcademyReferralCampaignCreateWithoutPartnerInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutPartnerInput)
    create!: DefinedAcademyReferralCampaignCreateWithoutPartnerInput;
}
