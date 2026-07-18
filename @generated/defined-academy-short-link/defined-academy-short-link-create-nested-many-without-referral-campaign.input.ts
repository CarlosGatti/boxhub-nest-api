import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateWithoutReferralCampaignInput } from './defined-academy-short-link-create-without-referral-campaign.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateOrConnectWithoutReferralCampaignInput } from './defined-academy-short-link-create-or-connect-without-referral-campaign.input';
import { DefinedAcademyShortLinkCreateManyReferralCampaignInputEnvelope } from './defined-academy-short-link-create-many-referral-campaign-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';

@InputType()
export class DefinedAcademyShortLinkCreateNestedManyWithoutReferralCampaignInput {

    @Field(() => [DefinedAcademyShortLinkCreateWithoutReferralCampaignInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateWithoutReferralCampaignInput)
    create?: Array<DefinedAcademyShortLinkCreateWithoutReferralCampaignInput>;

    @Field(() => [DefinedAcademyShortLinkCreateOrConnectWithoutReferralCampaignInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateOrConnectWithoutReferralCampaignInput)
    connectOrCreate?: Array<DefinedAcademyShortLinkCreateOrConnectWithoutReferralCampaignInput>;

    @Field(() => DefinedAcademyShortLinkCreateManyReferralCampaignInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateManyReferralCampaignInputEnvelope)
    createMany?: DefinedAcademyShortLinkCreateManyReferralCampaignInputEnvelope;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;
}
