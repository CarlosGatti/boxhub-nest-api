import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateWithoutPartnerInput } from './defined-academy-referral-campaign-create-without-partner.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateOrConnectWithoutPartnerInput } from './defined-academy-referral-campaign-create-or-connect-without-partner.input';
import { DefinedAcademyReferralCampaignCreateManyPartnerInputEnvelope } from './defined-academy-referral-campaign-create-many-partner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';

@InputType()
export class DefinedAcademyReferralCampaignUncheckedCreateNestedManyWithoutPartnerInput {

    @Field(() => [DefinedAcademyReferralCampaignCreateWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutPartnerInput)
    create?: Array<DefinedAcademyReferralCampaignCreateWithoutPartnerInput>;

    @Field(() => [DefinedAcademyReferralCampaignCreateOrConnectWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutPartnerInput)
    connectOrCreate?: Array<DefinedAcademyReferralCampaignCreateOrConnectWithoutPartnerInput>;

    @Field(() => DefinedAcademyReferralCampaignCreateManyPartnerInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateManyPartnerInputEnvelope)
    createMany?: DefinedAcademyReferralCampaignCreateManyPartnerInputEnvelope;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;
}
