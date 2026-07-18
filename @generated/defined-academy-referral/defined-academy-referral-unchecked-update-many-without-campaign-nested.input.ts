import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateWithoutCampaignInput } from './defined-academy-referral-create-without-campaign.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCreateOrConnectWithoutCampaignInput } from './defined-academy-referral-create-or-connect-without-campaign.input';
import { DefinedAcademyReferralUpsertWithWhereUniqueWithoutCampaignInput } from './defined-academy-referral-upsert-with-where-unique-without-campaign.input';
import { DefinedAcademyReferralCreateManyCampaignInputEnvelope } from './defined-academy-referral-create-many-campaign-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { DefinedAcademyReferralUpdateWithWhereUniqueWithoutCampaignInput } from './defined-academy-referral-update-with-where-unique-without-campaign.input';
import { DefinedAcademyReferralUpdateManyWithWhereWithoutCampaignInput } from './defined-academy-referral-update-many-with-where-without-campaign.input';
import { DefinedAcademyReferralScalarWhereInput } from './defined-academy-referral-scalar-where.input';

@InputType()
export class DefinedAcademyReferralUncheckedUpdateManyWithoutCampaignNestedInput {

    @Field(() => [DefinedAcademyReferralCreateWithoutCampaignInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateWithoutCampaignInput)
    create?: Array<DefinedAcademyReferralCreateWithoutCampaignInput>;

    @Field(() => [DefinedAcademyReferralCreateOrConnectWithoutCampaignInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateOrConnectWithoutCampaignInput)
    connectOrCreate?: Array<DefinedAcademyReferralCreateOrConnectWithoutCampaignInput>;

    @Field(() => [DefinedAcademyReferralUpsertWithWhereUniqueWithoutCampaignInput], {nullable:true})
    @Type(() => DefinedAcademyReferralUpsertWithWhereUniqueWithoutCampaignInput)
    upsert?: Array<DefinedAcademyReferralUpsertWithWhereUniqueWithoutCampaignInput>;

    @Field(() => DefinedAcademyReferralCreateManyCampaignInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCreateManyCampaignInputEnvelope)
    createMany?: DefinedAcademyReferralCreateManyCampaignInputEnvelope;

    @Field(() => [DefinedAcademyReferralWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyReferralWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyReferralWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyReferralWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyReferralUpdateWithWhereUniqueWithoutCampaignInput], {nullable:true})
    @Type(() => DefinedAcademyReferralUpdateWithWhereUniqueWithoutCampaignInput)
    update?: Array<DefinedAcademyReferralUpdateWithWhereUniqueWithoutCampaignInput>;

    @Field(() => [DefinedAcademyReferralUpdateManyWithWhereWithoutCampaignInput], {nullable:true})
    @Type(() => DefinedAcademyReferralUpdateManyWithWhereWithoutCampaignInput)
    updateMany?: Array<DefinedAcademyReferralUpdateManyWithWhereWithoutCampaignInput>;

    @Field(() => [DefinedAcademyReferralScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyReferralScalarWhereInput)
    deleteMany?: Array<DefinedAcademyReferralScalarWhereInput>;
}
