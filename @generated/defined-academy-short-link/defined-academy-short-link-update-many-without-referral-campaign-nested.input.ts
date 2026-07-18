import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateWithoutReferralCampaignInput } from './defined-academy-short-link-create-without-referral-campaign.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateOrConnectWithoutReferralCampaignInput } from './defined-academy-short-link-create-or-connect-without-referral-campaign.input';
import { DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutReferralCampaignInput } from './defined-academy-short-link-upsert-with-where-unique-without-referral-campaign.input';
import { DefinedAcademyShortLinkCreateManyReferralCampaignInputEnvelope } from './defined-academy-short-link-create-many-referral-campaign-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutReferralCampaignInput } from './defined-academy-short-link-update-with-where-unique-without-referral-campaign.input';
import { DefinedAcademyShortLinkUpdateManyWithWhereWithoutReferralCampaignInput } from './defined-academy-short-link-update-many-with-where-without-referral-campaign.input';
import { DefinedAcademyShortLinkScalarWhereInput } from './defined-academy-short-link-scalar-where.input';

@InputType()
export class DefinedAcademyShortLinkUpdateManyWithoutReferralCampaignNestedInput {

    @Field(() => [DefinedAcademyShortLinkCreateWithoutReferralCampaignInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateWithoutReferralCampaignInput)
    create?: Array<DefinedAcademyShortLinkCreateWithoutReferralCampaignInput>;

    @Field(() => [DefinedAcademyShortLinkCreateOrConnectWithoutReferralCampaignInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateOrConnectWithoutReferralCampaignInput)
    connectOrCreate?: Array<DefinedAcademyShortLinkCreateOrConnectWithoutReferralCampaignInput>;

    @Field(() => [DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutReferralCampaignInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutReferralCampaignInput)
    upsert?: Array<DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutReferralCampaignInput>;

    @Field(() => DefinedAcademyShortLinkCreateManyReferralCampaignInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateManyReferralCampaignInputEnvelope)
    createMany?: DefinedAcademyShortLinkCreateManyReferralCampaignInputEnvelope;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutReferralCampaignInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutReferralCampaignInput)
    update?: Array<DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutReferralCampaignInput>;

    @Field(() => [DefinedAcademyShortLinkUpdateManyWithWhereWithoutReferralCampaignInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpdateManyWithWhereWithoutReferralCampaignInput)
    updateMany?: Array<DefinedAcademyShortLinkUpdateManyWithWhereWithoutReferralCampaignInput>;

    @Field(() => [DefinedAcademyShortLinkScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkScalarWhereInput)
    deleteMany?: Array<DefinedAcademyShortLinkScalarWhereInput>;
}
