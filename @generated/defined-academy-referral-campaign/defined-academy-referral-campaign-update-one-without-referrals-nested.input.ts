import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateWithoutReferralsInput } from './defined-academy-referral-campaign-create-without-referrals.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateOrConnectWithoutReferralsInput } from './defined-academy-referral-campaign-create-or-connect-without-referrals.input';
import { DefinedAcademyReferralCampaignUpsertWithoutReferralsInput } from './defined-academy-referral-campaign-upsert-without-referrals.input';
import { DefinedAcademyReferralCampaignWhereInput } from './defined-academy-referral-campaign-where.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { DefinedAcademyReferralCampaignUpdateToOneWithWhereWithoutReferralsInput } from './defined-academy-referral-campaign-update-to-one-with-where-without-referrals.input';

@InputType()
export class DefinedAcademyReferralCampaignUpdateOneWithoutReferralsNestedInput {

    @Field(() => DefinedAcademyReferralCampaignCreateWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutReferralsInput)
    create?: DefinedAcademyReferralCampaignCreateWithoutReferralsInput;

    @Field(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutReferralsInput)
    connectOrCreate?: DefinedAcademyReferralCampaignCreateOrConnectWithoutReferralsInput;

    @Field(() => DefinedAcademyReferralCampaignUpsertWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpsertWithoutReferralsInput)
    upsert?: DefinedAcademyReferralCampaignUpsertWithoutReferralsInput;

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereInput)
    disconnect?: DefinedAcademyReferralCampaignWhereInput;

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereInput)
    delete?: DefinedAcademyReferralCampaignWhereInput;

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => DefinedAcademyReferralCampaignUpdateToOneWithWhereWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpdateToOneWithWhereWithoutReferralsInput)
    update?: DefinedAcademyReferralCampaignUpdateToOneWithWhereWithoutReferralsInput;
}
