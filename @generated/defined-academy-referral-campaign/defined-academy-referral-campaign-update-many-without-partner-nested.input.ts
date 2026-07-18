import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateWithoutPartnerInput } from './defined-academy-referral-campaign-create-without-partner.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateOrConnectWithoutPartnerInput } from './defined-academy-referral-campaign-create-or-connect-without-partner.input';
import { DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutPartnerInput } from './defined-academy-referral-campaign-upsert-with-where-unique-without-partner.input';
import { DefinedAcademyReferralCampaignCreateManyPartnerInputEnvelope } from './defined-academy-referral-campaign-create-many-partner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutPartnerInput } from './defined-academy-referral-campaign-update-with-where-unique-without-partner.input';
import { DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutPartnerInput } from './defined-academy-referral-campaign-update-many-with-where-without-partner.input';
import { DefinedAcademyReferralCampaignScalarWhereInput } from './defined-academy-referral-campaign-scalar-where.input';

@InputType()
export class DefinedAcademyReferralCampaignUpdateManyWithoutPartnerNestedInput {

    @Field(() => [DefinedAcademyReferralCampaignCreateWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutPartnerInput)
    create?: Array<DefinedAcademyReferralCampaignCreateWithoutPartnerInput>;

    @Field(() => [DefinedAcademyReferralCampaignCreateOrConnectWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutPartnerInput)
    connectOrCreate?: Array<DefinedAcademyReferralCampaignCreateOrConnectWithoutPartnerInput>;

    @Field(() => [DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutPartnerInput)
    upsert?: Array<DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutPartnerInput>;

    @Field(() => DefinedAcademyReferralCampaignCreateManyPartnerInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateManyPartnerInputEnvelope)
    createMany?: DefinedAcademyReferralCampaignCreateManyPartnerInputEnvelope;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;

    @Field(() => [DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutPartnerInput)
    update?: Array<DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutPartnerInput>;

    @Field(() => [DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutPartnerInput)
    updateMany?: Array<DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutPartnerInput>;

    @Field(() => [DefinedAcademyReferralCampaignScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignScalarWhereInput)
    deleteMany?: Array<DefinedAcademyReferralCampaignScalarWhereInput>;
}
