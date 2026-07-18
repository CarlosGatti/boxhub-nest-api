import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateWithoutReferralsInput } from './defined-academy-referral-campaign-create-without-referrals.input';

@InputType()
export class DefinedAcademyReferralCampaignCreateOrConnectWithoutReferralsInput {

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => DefinedAcademyReferralCampaignCreateWithoutReferralsInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutReferralsInput)
    create!: DefinedAcademyReferralCampaignCreateWithoutReferralsInput;
}
