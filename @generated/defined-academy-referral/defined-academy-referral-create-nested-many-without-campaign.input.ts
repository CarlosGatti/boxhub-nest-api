import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateWithoutCampaignInput } from './defined-academy-referral-create-without-campaign.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCreateOrConnectWithoutCampaignInput } from './defined-academy-referral-create-or-connect-without-campaign.input';
import { DefinedAcademyReferralCreateManyCampaignInputEnvelope } from './defined-academy-referral-create-many-campaign-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';

@InputType()
export class DefinedAcademyReferralCreateNestedManyWithoutCampaignInput {

    @Field(() => [DefinedAcademyReferralCreateWithoutCampaignInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateWithoutCampaignInput)
    create?: Array<DefinedAcademyReferralCreateWithoutCampaignInput>;

    @Field(() => [DefinedAcademyReferralCreateOrConnectWithoutCampaignInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateOrConnectWithoutCampaignInput)
    connectOrCreate?: Array<DefinedAcademyReferralCreateOrConnectWithoutCampaignInput>;

    @Field(() => DefinedAcademyReferralCreateManyCampaignInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCreateManyCampaignInputEnvelope)
    createMany?: DefinedAcademyReferralCreateManyCampaignInputEnvelope;

    @Field(() => [DefinedAcademyReferralWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>>;
}
