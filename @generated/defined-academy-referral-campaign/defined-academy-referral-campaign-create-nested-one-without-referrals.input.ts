import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateWithoutReferralsInput } from './defined-academy-referral-campaign-create-without-referrals.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateOrConnectWithoutReferralsInput } from './defined-academy-referral-campaign-create-or-connect-without-referrals.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';

@InputType()
export class DefinedAcademyReferralCampaignCreateNestedOneWithoutReferralsInput {

    @Field(() => DefinedAcademyReferralCampaignCreateWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutReferralsInput)
    create?: DefinedAcademyReferralCampaignCreateWithoutReferralsInput;

    @Field(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutReferralsInput)
    connectOrCreate?: DefinedAcademyReferralCampaignCreateOrConnectWithoutReferralsInput;

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;
}
